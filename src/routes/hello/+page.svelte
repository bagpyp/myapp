<!-- +page.svelte, not rendered on server, good for private/user-based content -->

<script lang="ts">
    
    // interface w/ page data from page.Server.ts
    import type { PageData } from './$types';

    export let data: PageData

    // import lifecycle hook
    import { onMount } from 'svelte';
    
    // create state
    let todo = null

    onMount(async () => {
        // update state?
        todo = await fetch('.../todos').then((res) => res.json())
    })
</script>


<h1>{data.text}</h1>