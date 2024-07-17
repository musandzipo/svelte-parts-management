<script>
    import { Link } from 'svelte-routing';
</script>

<nav>
    <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/parts">Parts Management</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><button on:click="{() => {isLoggedIn = false}}">Sign Out</button></li>
    </ul>
</nav>
