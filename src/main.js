import './style.css'

function createElement(tagName, attributes, children) {
  const el = document.createElement(tagName)
  for (const [name, value] of Object.entries(attributes)) {
    if (name === 'style') {
      for (const [styleName, styleValue] of Object.entries(value)) {
        el.style.setPropertyValue(styleName, styleValue)
      }
    } else if (name === 'data') {
      for (const [dataName, dataValue] of Object.entries(value)) {
        el.dataset[dataName] = dataValue
      }
    } else if (name.startsWith('on') && typeof value === 'function') {
      el.addEventListener(name.slice(2), value)
    } else {
      el.setAttribute(name, value)
    }
  }

  if (Array.isArray(children)) {
    for (const child of children) {
      if (typeof child === 'string') {
        el.appendChild(new Text(child))
      } else {
        el.appendChild(child)
      }
    }
  } else if (['number', 'boolean', 'string'].includes(typeof children)) {
    el.textContent = children
  }

  return el
}

const app = document.getElementById('app')
const days = createElement('div', {
  className: 'days'
})

for (let i = 1; i <= 31; i++) {
  const name = i.toString().padStart(2, '0')
  const day = createElement('div', {
    className: 'day'
  }, [
    createElement('a', {
      className: 'link',
      href: `/${name}.html`
    }, name)
  ])
  days.appendChild(day)
}
app.appendChild(days)
