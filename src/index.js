function abrirProjeto(projeto) {
    if (projeto === 'userauth') {
        window.location.href = 'src/projects/userauth/index.html'
    } else if (projeto === 'insta_scraper') {
        window.location.href = 'src/projects/insta_scraper/index.html'
    } else {
        window.location.href = 'src/projects/todo_list/index.html'
    }
}