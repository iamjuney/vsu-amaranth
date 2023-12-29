<script lang="ts">
	import { smoothload } from '$lib/utils/actions';
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
	import type { Image } from '@sanity/types';

	let { portableText } = $props<{ portableText: CustomBlockComponentProps<{ asset?: Image }> }>();
</script>

{#if portableText.value.asset}
	<img src={urlFor(portableText.value.asset).url()} alt="" use:smoothload />
{/if}
