<script lang="ts">
	import { createEventDispatcher } from "svelte";

    let currentMessage = '';
	const dispatch = createEventDispatcher();

	function sendMessage() {
		dispatch('addMessage', currentMessage);
		resetInput();
	}
	
	function resetInput() {
		console.log("RESETTING");
		currentMessage = '';
	}
    
</script>

<section class="border-t border-surface-500/30 p-4">

	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
		<button class="input-group-shim">+</button>
		<textarea
			bind:value={currentMessage}
			class="bg-transparent border-0 ring-0"
			name="prompt"
			id="prompt"
			placeholder="Write a message..."
			rows="1"
		/>
		<button class="variant-filled-primary" on:click={sendMessage}>Send</button>
	</div>
</section>