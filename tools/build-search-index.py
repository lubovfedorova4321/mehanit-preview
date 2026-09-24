"""Пересборка search-index.json из текущих страниц сайта.

Запуск из корня репозитория:
    python3 tools/build-search-index.py            — пересобрать индекс
    python3 tools/build-search-index.py --check    — сверить, ничего не записывая

Правила восстановлены по прежнему индексу и проверены обратной сверкой
(на неизменившихся страницах результат совпадает побайтово):

  title    — <title> без хвоста « — Механит» / « | Механит»
             (« | ГК «Механит»» не срезается)
  category — берётся из прежнего индекса по url: значения выверены вручную,
             автоматически их не вывести; для новых страниц — «Страница»
  url      — имя файла
  text     — meta description; если его нет — видимый текст страницы
  keywords — title + h1 + description + слова из url + видимый текст,
             обрезано до 1050 символов

Страницы, удалённые из репозитория, выпадают из индекса автоматически.
"""
import html as H
import json
import os
import re
import sys

KW_LIMIT = 1050
SUFFIX = re.compile(r'\s*[—|]\s*Механит\s*$')
TAGS = re.compile(r'<[^>]*>')
DROP = re.compile(r'<(script|style)\b[^>]*>.*?</\1>', re.S | re.I)
COMMENT = re.compile(r'<!--.*?-->', re.S)
INDEX = 'search-index.json'
# копия каталога в виде обычного скрипта: нужна, когда сайт открывают файлом
# с диска (file://) — там браузер запрещает fetch соседнего файла
INDEX_JS = 'search-index.js'


def flatten(x):
    return H.unescape(' '.join(TAGS.sub(' ', x).split()))


def visible(src):
    return flatten(COMMENT.sub(' ', DROP.sub(' ', src)))


def first(src, pattern):
    m = re.search(pattern, src, re.S | re.I)
    return flatten(m.group(1)) if m else ''


def meta_description(src):
    m = re.search(r'<meta[^>]*name="description"[^>]*>', src, re.I)
    if not m:
        return ''
    v = re.search(r'content="([^"]*)"', m.group(0), re.I)
    return H.unescape(v.group(1)).strip() if v else ''


def url_words(url):
    return ' '.join(w for w in re.split(r'[^0-9A-Za-z]+', url) if w and w != 'html')


def build(url, category):
    src = open(url, encoding='utf-8').read()
    title = SUFFIX.sub('', first(src, r'<title>(.*?)</title>'))
    h1 = first(src, r'<h1[^>]*>(.*?)</h1>')
    body = visible(src)
    desc = meta_description(src)
    keywords = ' '.join(x for x in (title, h1, desc, url_words(url), body) if x)
    return {
        'title': title,
        'category': category,
        'url': url,
        'text': (desc or body)[:KW_LIMIT],
        'keywords': keywords[:KW_LIMIT],
    }


def main():
    old = json.load(open(INDEX, encoding='utf-8')) if os.path.exists(INDEX) else []
    cats = {r['url']: r['category'] for r in old}
    order = [r['url'] for r in old]

    on_disk = sorted(f for f in os.listdir('.') if f.endswith('.html'))
    present = set(on_disk)
    urls = [u for u in order if u in present] + [u for u in on_disk if u not in cats]

    index = [build(u, cats.get(u, 'Страница')) for u in urls]

    gone = [u for u in order if u not in present]
    added = [u for u in on_disk if u not in cats]

    if '--check' in sys.argv:
        same = sum(1 for a, b in zip(old, index) if a == b)
        print('в индексе было %d, стало %d, записей без изменений %d' % (len(old), len(index), same))
    else:
        with open(INDEX, 'w', encoding='utf-8') as fh:
            json.dump(index, fh, ensure_ascii=False, separators=(',', ':'))
        payload = json.dumps(index, ensure_ascii=False, separators=(',', ':'))
        with open(INDEX_JS, 'w', encoding='utf-8') as fh:
            fh.write('/* Каталог страниц для поиска. Пересобирается tools/build-search-index.py\n'
                     '   вместе с search-index.json. Подключается только при открытии сайта\n'
                     '   файлом с диска (file://), где fetch соседнего файла запрещён. */\n')
            fh.write('window.MEHANIT_SEARCH_INDEX_DATA=' + payload + ';\n')
        print('search-index.json и search-index.js пересобраны: %d записей' % len(index))

    if gone:
        print('  выпали (страниц нет на диске): %d — %s' % (len(gone), ', '.join(gone[:8])))
    if added:
        print('  добавлены новые страницы: %d — %s' % (len(added), ', '.join(added[:8])))
        print('  проверьте у них колонку «category» — по умолчанию «Страница»')


main()
