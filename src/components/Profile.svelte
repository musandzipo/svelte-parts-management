<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
    import Loader from './Loader.svelte';
    import Error from './Error.svelte';

    let profile = {};
    let loading = true;
    let error = null;

    onMount(async () => {
        try {
            const response = await axios.get('/api/profile');
            profile = response.data;
        } catch (err) {
            error = 'Failed to load profile';
        } finally {
            loading = false;
        }
    });

    async function saveProfile() {
        try {
            await axios.put('/api/profile', profile);
        } catch (err) {
            error = 'Failed to save profile';
        }
    }
</script>

{#if loading}
    <Loader />
{:else if error}
    <Error message={error} />
{:else}
    <div>
        <h1>Profile</h1>
        <label>
            First Name:
            <input type="text" bind:value={profile.firstName} />
        </label>
        <label>
            Last Name:
            <input type="text" bind:value={profile.lastName} />
        </label>
        <button on:click={saveProfile}>Save</button>
    </div>
{/if}
