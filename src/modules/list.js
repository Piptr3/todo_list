export function createList() {
    return {
        todos: [],
        addTodo(todo) {
            this.todos.push(todo);
        },
        removeTodo(index) {
            this.todos.slice(index, 1);
        }
    }
}