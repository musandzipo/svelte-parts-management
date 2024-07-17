<script>
    import { createEventDispatcher } from 'svelte';
    import axios from 'axios';
    import Loader from './Loader.svelte';
    import Error from './Error.svelte';
  
    let email = '';
    let loading = false;
    let error = '';
    let message = '';
  
    const dispatch = createEventDispatcher();
  
    async function resetPassword() {
      if (!email) {
        error = 'Email is required.';
        return;
      }
  
      loading = true;
      error = '';
  
      try {
        const response = await axios.post('/api/forgot-password', { email });
        message = response.data.message;
      } catch (err) {
        error = 'Failed to send reset email.';
      } finally {
        loading = false;
      }
    }
  </script>
  
  <style>
    .container {
      max-width: 400px;
      margin: auto;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    .form-group input {
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
    .link {
      color: #3498db;
      cursor: pointer;
    }
    .message {
      color: green;
      text-align: center;
      margin: 1rem 0;
    }
  </style>
  
  <div class="container">
    {#if loading}
      <Loader />
    {:else}
      <h2>Forgot Password</h2>
      {#if error}
        <Error message={error} />
      {/if}
      {#if message}
        <div class="message">{message}</div>
      {/if}
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} />
      </div>
      <div class="actions">
        <button on:click={resetPassword}>Reset Password</button>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="link" on:click={() => dispatch('navigate', '')}>Back to Login</div>
      </div>
    {/if}
  </div>
  