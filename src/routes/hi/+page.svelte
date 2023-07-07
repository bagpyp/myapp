<script lang="ts">

    // page data store
    import { page } from '$app/stores';

    // interface w/ page data from page.Server.ts
    import type { PageData } from './$types';

    export let data: PageData

</script>


<h1>{data.text}</h1>
<h2>{$page.data.text}</h2>