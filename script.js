function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se tiver light toggleMode, adicionar a  imagem light
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // se tiver sem light toggleMode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-light.png")
  }

  // essa condicional pode ser usada dessa forma também

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // substituir a imagem
}
