habilidades = {
  'linux': ['my-icon', 'fab', 'fa-linux'],
  'Python': ['my-icon', 'fab', 'fa-python'],
  'JavaScript': ['my-icon', 'fab', 'fa-js-square'],
  'Shell Script': ['my-icon', 'fas', 'fa-terminal'],
  'CSS': ['my-icon', 'fab', 'fa-css3-alt'],
  'HTML': ['my-icon', 'fas', 'fa-code'],
  'SQL': ['my-icon', 'fas', 'fa-database'],
  'PostgreSQL':['my-icon', 'fas', 'fa-database'],
  'PostgisSQL': ['my-icon', 'fas', 'fa-database'],
  'SQLite': ['my-icon', 'fas', 'fa-database'],
  'Spatialite': ['my-icon', 'fas', 'fa-database'],
  'Geoprocessamento': ['my-icon', 'fas', 'fa-globe-americas'],
  'Qgis': ['my-icon', 'fas', 'fa-globe-americas'],
  'Git': ['my-icon', 'fab', 'fa-git-alt'],
  'Gitlab': ['my-icon', 'fab', 'fa-gitlab'],
  'Github':['my-icon', 'fab', 'fa-github'],
}

social = {
  'Gitlab': {
              'link': 'https://www.gitlab.com/kylefelipe',
              'icone': ['my-icon', 'fab', 'fa-gitlab']
            },
  'Github': {
              'link': 'https://www.github.com/kylefelipe',
              'icone': ['my-icon', 'fab', 'fa-github']
            },
  'Twitter': {'link': 'https://www.twitter.com/kylefelipe',
              'icone': ['my-icon', 'fab', 'fa-twitter']
            },
  'Instagram': {
                'link': 'https://www.instagram.com/kylefelipe',
                'icone': ['my-icon', 'fab', 'fa-instagram']
              },
  'Youtube': {
    'link': 'https://www.youtube.com/thinkfreegeo',
    'icone': ['my-icon', 'fab', 'fa-youtube']
  },
  'Whatsapp': {
    'link': 'https://api.whatsapp.com/send?phone=5531993084962&text=Oi, te encontrei pelo seu portifólio',
    'icone': ['my-icon', 'fab', 'fa-whatsapp']
  },
  'ThinkFree (Whatsap)': {
    'link': 'https://chat.whatsapp.com/E3HeXxP70bqFv8ybfbbV0W',
    'icone': ['my-icon', 'fab', 'fa-whatsapp'],
  },
  'Telegram': {
    'link': 'https://t.me/Kyle_Felipe',
    'icone': ['my-icon', 'fab', 'fa-telegram-plane'],
  },
  'ThinkFree (Telegram)': {
    'link': 'https://t.me/thinkfreeqgis',
    'icone': ['my-icon', 'fab', 'fa-telegram-plane'],
  },
}
conteudos = {}

function createElement(elmt, classes, text) {
  const element = document.createElement(elmt);
  for (let cls = 0; cls < classes.length; cls += 1){
    element.classList.add(classes[cls]);
  }
  element.append(text);
  return element;
}

function createHabilities() {
  const sect = document.getElementById('habilidades');
  for (const hab in habilidades) {
    const classes = ['my-item', 'habilidade'];
    const item = createElement('li', classes, hab)
    const icon = createElement('i', habilidades[hab], '')
    item.prepend(icon);
    sect.appendChild(item);
  }
}

function createFindMe() {
  const sect = document.getElementById('find-me');
  for (const rede in social ) {
    const item = createElement('li', ['my-item'], '');
    const ancora = document.createElement('a');
    ancora.setAttribute('target', '_blank');
    ancora.setAttribute('href', social[rede].link);
    ancora.append(rede);
    const icone = createElement('i', social[rede].icone,'')
    ancora.prepend(icone);
    item.appendChild(ancora);
    sect.appendChild(item)
  }
  
}

window.onload = function () {
  createHabilities()
  createFindMe()
}
