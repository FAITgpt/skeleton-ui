<script lang="ts">
	import { Avatar, ListBox, ListBoxItem } from "@skeletonlabs/skeleton";

	import { contacts, type Contact } from "../chat-utils";
	import { goto } from "$app/navigation";
    export let selectedContact: Contact;

    if (!selectedContact) {
        selectedContact = contacts[0];
    }

        // Function to handle contact selection and update the URL
    function handleContactSelection(contact: Contact) {
        selectedContact = contact;

        // Use goto to update the URL with the selected contact's name as a query parameter
        goto(`?chatWith=${encodeURIComponent(contact.name)}`, { replaceState: true });
    }


</script>

    <!-- Header -->
    <!-- <header class="border-b border-surface-500/30 p-4">
        <input class="input" type="search" placeholder="Search..." />
    </header> -->

<div class="p-4 space-y-4 overflow-y-auto">
    <small class="opacity-50">Chat</small>
    <ListBox active="variant-filled-primary">
        {#each contacts as contact}
            <ListBoxItem bind:group={selectedContact} name="people" value={contact} on:click={() => handleContactSelection(contact)}>
                <svelte:fragment slot="lead">
                    <Avatar src={contact.imageSource} width="w-8" />
                </svelte:fragment>
                {contact.name}
            </ListBoxItem>
        {/each}
    </ListBox>
</div>

