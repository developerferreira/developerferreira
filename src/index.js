function abrirProjeto(projeto) {
    if (projeto === 'userauth') {
        window.location.href = 'src/projects/userauth/index.html'
    } else if (projeto === 'uphere') {
        window.location.href = 'src/projects/uphere/index.html'
    } else {
        window.location.href = 'src/projects/todo_list/index.html'
    }
}