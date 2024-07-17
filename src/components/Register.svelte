<script>
    import { createEventDispatcher } from 'svelte';
    import axios from 'axios';
    import Loader from './Loader.svelte';
    import Error from './Error.svelte';
  
    let email = '';
    let password = '';
    let confirmPassword = '';
    let loading = false;
    let error = '';
  
    const dispatch = createEventDispatcher();
  
    async function register() {
      if (!email || !password || !confirmPassword) {
        error = 'All fields are required.';
        return;
      }
  
      if (password !== confirmPassword) {
        error = 'Passwords do not match.';
        return;
      }
  
      loading = true;
      error = '';
  
      try {
        await axios.post('/api/register', { email, password });
        dispatch('navigate', '');
      } catch (err) {
        error = 'Registration failed.';
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
  </style>
  
  <div class="container">
    {#if loading}
      <Loader />
    {:else}
      <h2>Register</h2>
      {#if error}
        <Error message={error} />
      {/if}
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password} />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" bind:value={confirmPassword} />
      </div>
      <div class="actions">
        <button on:click={register}>Register</button>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="link" on:click={() => dispatch('navigate', '')}>Back to Login</div>
      </div>
    {/if}
  </div>
  