function abrirProjeto(projeto) {
    if (projeto === 'ccombos') {
        window.location.href = 'src/projects/ccombos/index.html'
    } else {
        window.location.href = 'src/projects/insta_scraper/index.html'
    }
}

let dark__mode = localStorage.getItem('darkmode')
const theme__switch = document.querySelector('.theme__switch')

const enableDarkmode = () => {
    document.body.classList.add('dark__mode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('dark__mode')
    localStorage.setItem('darkmode', null)
}

if(dark__mode === "active") enableDarkmode()

theme__switch.addEventListener("click", () => {
    dark__mode = localStorage.getItem('darkmode')
    dark__mode !== "active" ? enableDarkmode() : disableDarkmode()
})