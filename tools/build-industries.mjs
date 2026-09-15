/**
 * Пресборка раздела «Решения»: страницы отраслей получают готовую разметку в HTML,
 * чтобы контент и ссылки были видны без JavaScript.
 *
 * Запуск:  node tools/build-industries.mjs [--check]
 *   --check — ничего не записывать, только показать отчёт.
 *
 * Что делает:
 *   1. Берёт INDUSTRY_DATA из вызова renderIndustryPage(...) на каждой странице отрасли.
 *   2. Рендерит ту же разметку, что раньше рисовал industry-template.js, и кладёт её
 *      внутрь <div id="industryRoot">. Классы и структура — один в один.
 *   3. Добавляет H1, вводный абзац и блок «Оборудование для этих задач» со ссылками на
 *      подкатегории каталога, собранными со страниц деталей этой отрасли.
 *   4. На страницах деталей делает название отрасли ссылкой в тексте (кроме хлебных крошек).
 *
 * Скрипт идемпотентен: повторный запуск даёт тот же результат.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CHECK_ONLY = process.argv.includes('--check')

/** Короткая форма отрасли — только для H1 (чтобы на 390 px было не больше 4 строк). */
const H1_SHORT = {
  aerospace: 'авиации',
  'agro-road': 'сельхоз- и дорожной техники',
  automotive: 'автопрома',
  'fuel-energy': 'нефтегаза и энергетики',
  instrumentation: 'приборостроения',
  mining: 'горной добычи',
  rail: 'железных дорог',
  shipbuilding: 'судостроения',
  space: 'космоса',
}

/** Полная отрасль в родительном падеже — для title. */
const GENITIVE = {
  aerospace: 'авиационной промышленности',
  'agro-road': 'сельскохозяйственного и дорожно-строительного машиностроения',
  automotive: 'автомобильной промышленности',
  'fuel-energy': 'топливно-энергетического сектора',
  instrumentation: 'приборостроения',
  mining: 'горнорудной промышленности',
  rail: 'железнодорожного машиностроения',
  shipbuilding: 'судостроения',
  space: 'космической промышленности',
}

const ADV_ICONS = [
  '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h13M21 18h.01"></path><circle cx="16" cy="6" r="2"></circle><circle cx="8" cy="12" r="2"></circle><circle cx="17" cy="18" r="2"></circle>',
  '<circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"></circle>',
  '<path d="M4 12a8 8 0 0 1 14-5.3M20 4v4h-4"></path><path d="M20 12a8 8 0 0 1-14 5.3M4 20v-4h4"></path>',
  '<path d="M4 17l5-5 4 4 7-8"></path><path d="M14 8h6v6"></path>',
]

const DEFAULT_ADVANTAGES = [
  { title: 'Технологии под задачу', text: 'Разрабатываем маршрут обработки и подбираем оборудование под требования детали.' },
  { title: 'Стабильное качество', text: 'Гарантируем точность, повторяемость и соответствие стандартам отрасли.' },
  { title: 'Полный цикл поддержки', text: 'От подбора оборудования до ПНР, наладки и сервисного сопровождения.' },
  { title: 'Экономическая эффективность', text: 'Оптимизируем цикл обработки и снижаем себестоимость детали.' },
]

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8')
const exists = (p) => fs.existsSync(path.join(ROOT, p))

/** Данные отрасли из вызова renderIndustryPage(...). */
const readIndustry = (file) => {
  const m = read(file).match(/renderIndustryPage\((\{[\s\S]*\})\);/)
  return m ? JSON.parse(m[1]) : null
}

/** Подкатегории каталога, упомянутые на страницах деталей этой отрасли. */
const collectEquipment = (industry) => {
  const found = new Map()
  for (const part of industry.parts) {
    if (!part.solutionUrl || !exists(part.solutionUrl)) continue
    const html = read(part.solutionUrl)
    const chip = /<a class="det-equip-chip" href="([^"]+)"><b>([\s\S]*?)<\/b>/g
    let m
    while ((m = chip.exec(html))) {
      const href = m[1]
      const label = m[2].replace(/<[^>]+>/g, '').trim()
      if (href && label && !found.has(href)) found.set(href, label)
    }
  }
  // раздел каталога из самих данных отрасли — если его ещё нет в списке
  for (const part of industry.parts) {
    if (part.equipmentUrl && !found.has(part.equipmentUrl) && exists(part.equipmentUrl)) {
      const title = (read(part.equipmentUrl).match(/<title>([^<]*)<\/title>/) || [, ''])[1]
      found.set(part.equipmentUrl, title.split('—')[0].trim() || part.equipmentUrl)
    }
  }
  return [...found].map(([href, label]) => ({ href, label }))
}

const renderCard = (part) => {
  const hasSolution = !!part.solutionUrl
  const titleHtml = hasSolution
    ? `<a class="ind-card-title-link" href="${esc(part.solutionUrl)}" data-role="solution">${esc(part.title)}</a>`
    : esc(part.title)
  const mediaHtml = part.image
    ? `<img src="${esc(part.image)}" alt="${esc(part.title)}" loading="lazy">`
    : '<span class="ind-card-placeholder"><span>Изображение детали</span><small>появится после подготовки визуала</small></span>'
  const solutionBtn = hasSolution
    ? `<a class="btn ind-btn-solution" href="${esc(part.solutionUrl)}" data-role="solution">Технологическое решение →</a>`
    : '<a class="btn ind-btn-solution" href="index.html#quiz" data-role="task">Обсудить задачу с технологом</a>'
  const equipmentBtn = part.equipmentUrl
    ? `<a class="btn ind-btn-equipment" href="${esc(part.equipmentUrl)}" data-role="equipment">Смотреть оборудование →</a>`
    : ''
  return (
    `<article class="ind-card" id="${esc(part.id)}">` +
      `<div class="ind-card-media2">${mediaHtml}</div>` +
      '<div class="ind-card-panel">' +
        `<h2 class="ind-card-title2">${titleHtml}</h2>` +
        `<div class="ind-card-task"><span class="ind-card-label ind-card-label--task">Технологическая задача</span><p>${esc(part.task)}</p></div>` +
        `<div class="ind-card-actions">${solutionBtn}${equipmentBtn}</div>` +
      '</div>' +
    '</article>'
  )
}

const renderCrumbs = (industry) =>
  '<nav class="ind-crumbs" aria-label="Хлебные крошки"><div class="wrap"><ol>' +
    '<li><a href="index.html">Главная</a></li>' +
    '<li><a href="solutions.html">Отраслевые решения</a></li>' +
    `<li aria-current="page">${esc(industry.title)}</li>` +
  '</ol></div></nav>'

const renderJsonLd = (industry) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://mehanit.ru/' },
      { '@type': 'ListItem', position: 2, name: 'Отраслевые решения', item: 'https://mehanit.ru/solutions.html' },
      { '@type': 'ListItem', position: 3, name: industry.title },
    ],
  }
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`
}

/** H1 — короткая форма; полное название отрасли остаётся в лиде и в title. */
const headline = (industry) => {
  const short = H1_SHORT[industry.slug]
  return short ? `Металлообработка для ${short}` : industry.title
}

/** Заголовок вкладки — с полным названием отрасли. */
const pageTitleFor = (industry) => {
  const genitive = GENITIVE[industry.slug]
  const base = genitive ? `Металлообработка для ${genitive}` : industry.title
  return `${base}: детали, технологии, оборудование | Механит`
}

const renderHero = (industry) => {
  const intro = industry.intro
    ? `<p class="ind-intro">${esc(industry.intro)}</p>`
    : '<!-- TODO: интро -->'
  return (
    '<section class="ind-hero"><div class="wrap"><div class="ind-hero-top">' +
      '<div>' +
        `<h1 class="ind-title"><span class="title-row"><span class="title-dash"></span><span class="title-text">${esc(headline(industry))}</span></span></h1>` +
        `<p class="ind-intro">${esc(industry.title)}: детали, технологии, оборудование</p>` +
      '</div>' +
      intro +
    '</div></div></section>'
  )
}

const renderParts = (industry) =>
  '<section class="ind-grid-section"><div class="wrap"><div class="ind-grid">' +
    industry.parts.map(renderCard).join('') +
  '</div></div></section>'

const renderEquipment = (equipment) => {
  if (!equipment.length) return ''
  return (
    '<section class="ind-equipment"><div class="wrap">' +
      '<h2 class="ind-equipment-title">Оборудование для этих задач</h2>' +
      '<ul class="ind-equipment-list">' +
      equipment.map((e) => `<li><a href="${esc(e.href)}">${esc(e.label)}</a></li>`).join('') +
      '</ul>' +
    '</div></section>'
  )
}

const renderAdvantages = (list) =>
  '<section class="ind-advantages"><h2 class="sr-only">Как мы работаем по отрасли</h2><div class="ind-adv-grid">' +
  list.map((item, i) =>
    `<div class="ind-adv-item"><div class="ind-adv-icon"><svg viewBox="0 0 24 24">${ADV_ICONS[i % ADV_ICONS.length]}</svg></div>` +
    `<h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></div>`).join('') +
  '</div></section>'

const buildIndustry = (file) => {
  const industry = readIndustry(file)
  if (!industry) return null
  const equipment = collectEquipment(industry)
  const inner =
    renderCrumbs(industry) +
    renderJsonLd(industry) +
    renderHero(industry) +
    renderParts(industry) +
    renderEquipment(equipment) +
    renderAdvantages(industry.advantages || DEFAULT_ADVANTAGES)

  let src = read(file)
  src = src.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(pageTitleFor(industry))}</title>`)
  const container = /(<div id="industryRoot">)[\s\S]*?(<\/div>\s*<\/main>)/
  if (!container.test(src)) throw new Error(`не найден контейнер #industryRoot в ${file}`)
  const out = src.replace(container, (_, open, close) => `${open}\n${inner}\n${close}`)
  // повторный прогон даёт тот же результат — это нормально, файл просто не переписываем
  if (!CHECK_ONLY && out !== read(file)) fs.writeFileSync(path.join(ROOT, file), out, 'utf8')

  const links = (inner.match(/<a [^>]*href="solution-[a-z]+-[^"]+"/g) || []).length
  const text = inner.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  return { file, title: industry.title, h1: /<h1[^>]*>/.test(inner), partLinks: links, chars: text.length, equipment: equipment.length }
}

/** На странице детали название отрасли в подзаголовке делаем ссылкой. */
const linkIndustryOnDetail = (file, industryTitle, industryUrl) => {
  const src = read(file)
  if (src.includes(`<div class="det-eyebrow"><a href="${industryUrl}"`)) return false
  const out = src.replace(
    new RegExp(`(<div class="det-eyebrow">)(${industryTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`),
    (_, open, name) => `${open}<a href="${industryUrl}">${name}</a>`,
  )
  if (out === src) return false
  if (!CHECK_ONLY) fs.writeFileSync(path.join(ROOT, file), out, 'utf8')
  return true
}

const main = () => {
  const files = fs.readdirSync(ROOT).filter((f) => /^solution-[a-z]+\.html$/.test(f)).sort()
  const rows = []
  let detailsLinked = 0

  for (const file of files) {
    const industry = readIndustry(file)
    if (!industry) continue
    for (const part of industry.parts) {
      if (part.solutionUrl && exists(part.solutionUrl)) {
        if (linkIndustryOnDetail(part.solutionUrl, industry.title, file)) detailsLinked += 1
      }
    }
    rows.push(buildIndustry(file))
  }

  console.log(CHECK_ONLY ? '── проверка, файлы не изменялись ──' : '── сборка выполнена ──')
  console.log('')
  console.log('страница                 H1   ссылок на детали   текста, символов   оборудование')
  for (const r of rows) {
    console.log(
      `${r.file.padEnd(24)} ${(r.h1 ? 'есть' : 'НЕТ ').padEnd(4)} ${String(r.partLinks).padStart(10)}` +
      `${String(r.chars).padStart(19)}${String(r.equipment).padStart(15)}`,
    )
  }
  console.log('')
  console.log(`страниц отраслей: ${rows.length}; ссылок на отрасль добавлено на страницах деталей: ${detailsLinked}`)
}

main()
