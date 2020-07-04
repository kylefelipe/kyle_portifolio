const habilidades = {
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

const social = {
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

const conteudos = {
  'Apostila Qgis 3x': {
    link: 'https://kylefelipe.gitlab.io/apostila_qgis_3/',
  },
  'Curso de Linux Bash & Shell': {
    link: 'https://kylefelipe.gitlab.io/bash_shell/',
  },
}

const palestras = {
  'Qualidade de Dados Espaciais e Python': {
    link: 'https://gitlab.com/kylefelipe/palestra_cbgeo_2019',
  }
}


function customElement(elmt, classes, text) {
  const siteElement = document.createElement(elmt);
  if (classes) classes.forEach(item => {siteElement.classList.add(item)});
  if (text) siteElement.append(text);
  return siteElement;
}

function createAnchor(classList, text, target, href) {
  const ancora = customElement('a', classList, text);
  if (target) ancora.setAttribute('target', target);
  if (href) ancora.setAttribute('href', href);
  return ancora;
}

function createHabilities() {
  const sect = document.getElementById('habilidades');
  Object.keys(habilidades).forEach( hab => {
    const classes = ['my-item', 'habilidade'];
    const item = customElement('li', classes, hab)
    const icon = customElement('i', habilidades[hab])
    item.prepend(icon);
    sect.appendChild(item);
  })
}

function createArtigosPalestras() {
  const sect = document.getElementById('artigos-palestras-conteudo');
  const contents = {...conteudos, ...palestras}
  Object.keys(contents).forEach(item => {
    const artPalestra = customElement('li', ['my-item']);
    const ancora = createAnchor(['external-links'], item, '_blank',
      contents[item].link);
    artPalestra.appendChild(ancora);
    sect.appendChild(artPalestra);
  })
}

function createFindMe() {
  const sect = document.getElementById('find-me');
  Object.keys(social).forEach(item => {
    const socialNetwork = customElement('li', ['my-item']);
    const ancora = createAnchor(['external-links'], item, '_blank', social[item].link);
    const icone = customElement('i', social[item].icone);
    ancora.prepend(icone);
    socialNetwork.appendChild(ancora);
    sect.appendChild(socialNetwork);
  });
}

window.onload = function () {
  createHabilities()
  createArtigosPalestras()
  createFindMe()
}



