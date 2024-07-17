<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
    import Loader from './Loader.svelte';
    import Error from './Error.svelte';

    let parts = [];
    let loading = true;
    let error = null;

    onMount(async () => {
        try {
            const response = await axios.get('/api/parts');
            parts = response.data;
        } catch (err) {
            error = 'Failed to load parts';
        } finally {
            loading = false;
        }
    });
</script>

{#if loading}
    <Loader />
{:else if error}
    <Error message={error} />
{:else}
    <div>
        <h1>Dashboard</h1>
        <ul>
            {#each parts as part}
                <li>{part.name} - {part.quantity}</li>
            {/each}
        </ul>
    </div>
{/if}
