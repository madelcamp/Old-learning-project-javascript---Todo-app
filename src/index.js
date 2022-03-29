import { renderTodos } from './views.js'
import { setFilters } from './filters.js'
import { createTodo, loadTodos } from './todos.js'

renderTodos()

document.querySelector('#search-text').oninput = e => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
}

document.querySelector('#new-todo').onsubmit = e => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.text.value = ''
    }
}

document.querySelector('#hide-completed').onchange = e => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
}


window.onstorage = e => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
}