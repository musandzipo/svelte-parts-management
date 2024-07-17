<script>
    import { createEventDispatcher } from 'svelte';
    import axios from 'axios';
    import Loader from './Loader.svelte';
    import Error from './Error.svelte';
  
    let email = '';
    let password = '';
    let loading = false;
    let error = '';
  
    const dispatch = createEventDispatcher();
  
    async function login() {
      if (!email || !password) {
        error = 'Email and password are required.';
        return;
      }
  
      loading = true;
      error = '';
  
      try {
        // Replace with your actual API endpoint
        const response = await axios.post('/api/login', { email, password });
        dispatch('loginSuccess', response.data);
      } catch (err) {
        error = 'Login failed. Please check your credentials.';
      } finally {
        loading = false;
      }
    }
  
    function navigateToRegister() {
      dispatch('navigate', '/register');
    }
  
    function navigateToForgotPassword() {
      dispatch('navigate', '/forgot-password');
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
      margin: 0.5rem;
      display: inline-block;
    }
  </style>
  
  <div class="container">
    {#if loading}
      <Loader />
    {:else}
      <h2>Login</h2>
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
      <div class="actions">
        <button on:click={login}>Login</button>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="link" on:click={navigateToRegister}>Register</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="link" on:click={navigateToForgotPassword}>Forgot Password?</div>
      </div>
    {/if}
  </div>
  