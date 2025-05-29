<script lang="ts">
	import '../app.css';

	let { children, data } = $props();
</script>

{@render children()}
{#if data}
	<p>Test prop is passed: {JSON.stringify(data.test)}</p>
{/if}