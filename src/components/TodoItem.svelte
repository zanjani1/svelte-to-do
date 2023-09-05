<script>
  import { TodoStore } from '../lib/store.js';
  let todo = {};
  const deleteTodo = () => TodoStore.deleteTodo(todo.id);
  const toggleTodo = () => TodoStore.toggleTodo(todo.id);
</script>

<div class="flex justify-between items-center p-2 bg-white shadow rounded-lg my-2">
  <div class="flex items-center">
    <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" bind:checked={todo.completed} on:change={toggleTodo} />
    <p class={todo.completed ? 'ml-2 line-through text-gray-300' : 'ml-2'}>{todo.title}</p>
  </div>
  <button class="text-red-500 hover:text-red-600" on:click={deleteTodo}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </button>
</div>

<style>
  .line-through {
    text-decoration: line-through;
  }
</style>