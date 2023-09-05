<script>
  import { TodoStore } from '../lib/store.js';
  let title = '';

  function addTodo() {
    if (title.trim().length) {
      TodoStore.addTodo(title);
      title = '';
    }
  }
</script>

<div class="flex justify-center p-6">
  <input 
    class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
    type="text" 
    bind:value={title} 
    placeholder="What needs to be done?" 
    on:keydown={(e) => e.key === 'Enter' && addTodo()} 
  />
  <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={addTodo}
  >
    Add
  </button>
</div>