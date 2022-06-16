export default function changeBackground() {
  const { pathname } = window.location
  const bodyBackground = document.querySelector('body')

  if (pathname === "/") {
    bodyBackground.style.background = "url('./images/background1.png')"
    bodyBackground.style.backgroundRepeat = "no-repeat"
    bodyBackground.style.backgroundSize = "cover"
    bodyBackground.style.height = "100vh"
    bodyBackground.style.width = "100vw"
    bodyBackground.style.margin = "0 auto"
    bodyBackground.style.backgroundColor = "#010507"
  } else if (pathname === "/universe") {
    bodyBackground.style.background = "url('./images/background2.png')"
    bodyBackground.style.backgroundRepeat = "no-repeat"
    bodyBackground.style.backgroundSize = "cover"
    bodyBackground.style.height = "100vh"
    bodyBackground.style.width = "100vw"
    bodyBackground.style.margin = "0 auto"
    bodyBackground.style.backgroundColor = "#010507"
  } else if (pathname === "/explorer") {
    bodyBackground.style.background = "url('./images/background3.png')"
    bodyBackground.style.backgroundRepeat = "no-repeat"
    bodyBackground.style.backgroundSize = "cover"
    bodyBackground.style.height = "100vh"
    bodyBackground.style.width = "100vw"
    bodyBackground.style.margin = "0 auto"
    bodyBackground.style.backgroundColor = "#010507"
  }

}