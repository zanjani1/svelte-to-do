<script>
  import { navigate } from 'svelte-routing';
</script>

<main>
  <h1 class="text-4xl font-bold mb-4">Welcome to the Todo App</h1>
  <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={() => navigate('/todo')}
  >
    Go to Todo List
  </button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>