function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar-light.png")
  }
}

const img = document.querySelector("#profile img")
const html = document.documentElement

if (html.classList.contains("light")) {
  img.setAttribute("src", "./assets/avatar-light.png")
} else {
  img.setAttribute("src", "./assets/avatar.png")
}
