```svelte
<script>
  import { onMount } from 'svelte';
  import { TodoStore } from '../lib/store.js';
  import TodoList from '../components/TodoList.svelte';
  import AddTodo from '../components/AddTodo.svelte';

  let todos = [];

  onMount(async () => {
    todos = TodoStore.getTodos();
  });
</script>

<div class="container mx-auto p-4">
  <h1 class="text-4xl mb-4">Todo List</h1>
  <AddTodo />
  <TodoList {todos} />
</div>
```