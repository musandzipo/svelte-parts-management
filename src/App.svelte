<script>
    import { Router, Route, Link } from 'svelte-routing';
    import Login from './components/Login.svelte';
    import Register from './components/Register.svelte';
    import ForgotPassword from './components/ForgotPassword.svelte';
    import Dashboard from './components/Dashboard.svelte'; // Placeholder for the dashboard
    import PartsManagement from './components/PartsManagement.svelte'; // Placeholder for parts management
    import Profile from './components/Profile.svelte'; // Placeholder for profile
  
    let isLoggedIn = false;
    let userData = null;
  
    function handleLoginSuccess(event) {
      isLoggedIn = true;
      userData = event.detail;
      window.location.href = '#/dashboard';
    }
  
    function handleNavigate(event) {
      window.location.href = `#${event.detail}`;
    }
  
    function handleLogout() {
      isLoggedIn = false;
      userData = null;
      window.location.href = '#/';
    }
  </script>
  
  <style>
    nav ul {
      display: flex;
      list-style: none;
      padding: 0;
    }
    nav ul li {
      margin-right: 1rem;
    }
  </style>
  
  {#if isLoggedIn}
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/parts">Parts Management</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><button on:click={handleLogout}>Sign Out</button></li>
      </ul>
    </nav>
  {/if}
  
  <Router>
    {#if !isLoggedIn}
      <Route path="/" let:params>
        <Login on:loginSuccess={handleLoginSuccess} on:navigate={handleNavigate} />
      </Route>
      <Route path="/register" let:params>
        <Register on:navigate={handleNavigate} />
      </Route>
      <Route path="/forgot-password" let:params>
        <ForgotPassword on:navigate={handleNavigate} />
      </Route>
    {:else}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/parts" component={PartsManagement} />
      <Route path="/profile" component={Profile} />
    {/if}
  </Router>
  