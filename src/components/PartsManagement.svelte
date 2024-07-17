<script>
    import PartForm from './PartForm.svelte';
    import PartList from './PartList.svelte';
    import Loader from './Loader.svelte';
    import Error from './Error.svelte';
    import axios from 'axios';
    import { onMount } from 'svelte';
    

    let parts = [];
    let partToEdit = null;
    let loading = true;
    let error = null;

    async function fetchParts() {
        try {
            const response = await axios.get('/api/parts');
            parts = response.data;
        } catch (err) {
            error = 'Failed to load parts';
        } finally {
            loading = false;
        }
    }

    onMount(fetchParts);

    async function savePart(part) {
        try {
            if (partToEdit) {
                await axios.put(`/api/parts/${partToEdit.id}`, part);
            } else {
                await axios.post('/api/parts', part);
            }
            partToEdit = null;
            fetchParts();
        } catch (err) {
            error = 'Failed to save part';
        }
    }

    async function deletePart(id) {
        try {
            await axios.delete(`/api/parts/${id}`);
            fetchParts();
        } catch (err) {
            error = 'Failed to delete part';
        }
    }

    function editPart(part) {
        partToEdit = part;
    }
</script>

{#if loading}
    <Loader />
{:else if error}
    <Error message={error} />
{:else}
    <div>
        <h1>Parts Management</h1>
        <PartForm {partToEdit} onSave={savePart} />
        <PartList {parts} onEdit={editPart} onDelete={deletePart} />
    </div>
{/if}
