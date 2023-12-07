<script lang="ts">
	import authStore from "../../stores/authStore";
	import { contacts, type Contact, type MessageInfo } from "./chat-utils";
	import Contacts from "./components/Contacts.svelte";
	import Feed from "./components/Feed.svelte";
	import Input from "./components/Input.svelte";

    export let messages: MessageInfo[] | null;

    let messageFeed: Feed;      // TODO: Use this to scroll to bottom
    let selectedContact: Contact = contacts[0]

    /**
     * Adds message to the user's feed, will also need to call our fetch endpoint to get AI response
     * @param event
     */
    function addUserMessage(event: CustomEvent<string>): void {
        // TODO: Call user message 
        const currentMessage = event.detail;
        const newMessage: MessageInfo = {
            id: messages.length,
            host: true,
            name: $authStore.email ?? '',
            timestamp: new Date(),
            message: currentMessage,
            color: 'variant-soft-primary'
        };
        messages = [...messages, newMessage];
        messageFeed.scrollToBottom();
    }

</script>
<div class="px-10 w-full mx-auto items-center">

<div class="mx-auto ">

    <section class="card">
        <div class="chat w-full h-full grid grid-cols-1 lg:grid-cols-[25%_1fr]">
            <!-- TODO: Add the side bar with three different chat options (documents, macro, stocks) -->
            <Contacts bind:selectedContact />
            
            {#if messages === null}
                <div class="px-10 py-10">
                    <p>{selectedContact.name} Chat Coming Soon...</p>
                </div>

            {:else}
                <div class="grid grid-row-[1fr_auto] flex-grow">
                    <Feed messageFeed={messages} bind:this={messageFeed} />
                    <Input on:addMessage={addUserMessage} />
                </div>
            {/if}

        </div>
    </section>
</div>

</div>