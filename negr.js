let body = document.querySelector('body')

let color = prompt('rang kiriting')

body.style.backgroundColor = color
body.style.textAlign = 'center'
body.style.marginTop = '250px'

let title = document.createElement('h1')

title.innerHTML = prompt('ism kiriting')

let textColor = prompt('tekst rangini kiriting')

title.style.color = textColor   

body.appendChild(title)