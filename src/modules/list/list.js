export function createList(name) {
    return {
        name: name,
        todos: [],
        addTodo(todo) {
            this.todos.push(todo);
        },
        removeTodo(index) {
            this.todos.slice(index, 1);
        }
    }
}