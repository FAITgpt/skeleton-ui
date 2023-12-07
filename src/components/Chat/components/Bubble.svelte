<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
    import faitImg from '$lib/images/FAIT-logo-white.png';
	import type { MessageInfo } from "../chat-utils";

    export let key: number;
    export let bubble: MessageInfo;

</script>

{#if bubble.host}

    <div class="grid grid-cols-[auto_1fr] gap-2">
        {#if bubble.name}
            <Avatar initials={bubble.name} width="w-12" />
        {/if}
        <div class="card p-4 variant-soft rounded-tl-none space-y-2">
            <header class="flex justify-between items-center">
                <p class="font-bold">{bubble.name}</p>
                <!-- <small class="opacity-50">{bubble.timestamp}</small> -->
            </header>
            <p>{bubble.message}</p>
        </div>
    </div>
					
{:else}

    <div class="grid grid-cols-[1fr_auto] gap-2">
        <div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
            <header class="flex justify-between items-center">
                <p class="font-bold">{bubble.name}</p>
                <!-- <small class="opacity-50">{bubble.timestamp}</small> -->
            </header>
            <p>{bubble.message}</p>
        </div>
        <Avatar src={faitImg} class="w-16 h-12 rounded-full" />
    </div>
					    
{/if}