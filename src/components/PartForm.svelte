<script>
    import { createEventDispatcher } from 'svelte';
  
    export let part = { id: null, name: '', description: '', quantity: 0 };
    export let mode = 'add'; // 'add' or 'edit'
  
    const dispatch = createEventDispatcher();
  
    function handleSubmit() {
      dispatch('submit', part);
    }
  
    function handleCancel() {
      dispatch('cancel');
    }
  </script>
  
  <style>
    .form-group {
      margin-bottom: 1rem;
    }
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    .form-group input, .form-group textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .actions {
      text-align: center;
    }
    .actions button {
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      border: none;
      border-radius: 4px;
      background-color: #3498db;
      color: #fff;
      cursor: pointer;
    }
    .actions button:hover {
      background-color: #2980b9;
    }
  </style>
  
  <div>
    <h3>{mode === 'add' ? 'Add Part' : 'Edit Part'}</h3>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" bind:value={part.name} />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea id="description" bind:value={part.description}></textarea>
    </div>
    <div class="form-group">
      <label for="quantity">Quantity</label>
      <input type="number" id="quantity" bind:value={part.quantity} />
    </div>
    <div class="actions">
      <button on:click={handleSubmit}>{mode === 'add' ? 'Add Part' : 'Save Changes'}</button>
      <button on:click={handleCancel}>Cancel</button>
    </div>
  </div>
  