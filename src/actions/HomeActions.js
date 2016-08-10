/**
 * Created by x298017064010 on 16/8/8.
 */

const LOAD_TODOS = 'LOAD_TODOS';
const SELECT_TODO = 'SELECT_TODO';
const APPEND_TODO = 'APPEND_TODO';

var loadTodos = () => {
    return {
        type: LOAD_TODOS,
        data: 'LOAD_TODOS',
    }
}

var appendTodo = () => {
    return {
        type: APPEND_TODO,
        data: 'APPEND_TODO'
    }
}

var selectTodo = () => {
    return {
        type: SELECT_TODO,
        data: 'SELECT_TODO',
    }
}

module.exports = {
    loadTodos,
    appendTodo,
    selectTodo,
}