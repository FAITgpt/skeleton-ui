<script lang="ts">
	import type { MessageInfo } from "../chat-utils";
	import Bubble from "./Bubble.svelte";

    export let messageFeed: MessageInfo[];

    // export function scrollToBottom() {
    //     console.log("Scroll down");
    //     scrollTo({ top: this.scrollHeight, behavior });
    // }

</script>


<section class="w-full lg:max-h-[575px] sm:max-h-[300px] p-4 overflow-y-auto space-y-4">
	{#each messageFeed as bubble, i}
		<Bubble bubble={bubble} key={i} />
	{/each}
</section>