function abrirProjeto(projeto) {
    switch (projeto) {
        case 'userauth':
            window.location.href = 'src/projects/userauth/index.html'
            break;
        case 'uphere':
            window.location.href = 'src/projects/uphere/index.html'
            break;
        case 'todo_list':
            window.location.href = 'src/projects/todo_list/index.html'
        default:
            window.location.href = 'src/projects/biblioteca/index.html'
            break;
    }
}