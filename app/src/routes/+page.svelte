<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Welcome from '$lib/components/Welcome.svelte';
	import type { PageData } from './$types';

	let { data } = $props();
</script>

<section>
	<!-- {#if data.posts.length}
		{#each data.posts as post}
			<Card {post} />
		{/each}
	{:else}
		<Welcome />
	{/if} -->
</section>
