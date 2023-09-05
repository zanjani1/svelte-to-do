<script>
  import { onMount } from 'svelte';
  import { TodoStore } from '../lib/store.js';
  import TodoItem from './TodoItem.svelte';

  let todos = [];

  onMount(async () => {
    todos = TodoStore.getTodos();
  });
</script>

<style>
  .todo-list {
    list-style: none;
    padding: 0;
  }
</style>

<ul class="todo-list">
  {#each todos as todo (todo.id)}
    <TodoItem {todo} />
  {/each}
</ul>