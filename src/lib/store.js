import { writable } from 'svelte/store';

let id = 0;

function createTodoStore() {
    const { subscribe, update } = writable([]);

    return {
        subscribe,
        addTodo: (title) => update(todos => {
            return [...todos, { id: id++, title, completed: false }];
        }),
        toggleTodo: (id) => update(todos => {
            return todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        }),
        deleteTodo: (id) => update(todos => {
            return todos.filter(todo => todo.id !== id);
        })
    };
}

export const TodoStore = createTodoStore();