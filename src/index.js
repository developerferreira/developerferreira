function abrirProjeto(projeto) {
    if (projeto === 'userauth') {
        window.location.href = 'src/projects/userauth/index.html'
    } else {
        window.location.href = 'src/projects/insta_scraper/index.html'
    }
}