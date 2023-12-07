<script lang="ts">
	import '../app.postcss';
	import { app } from '$lib/firebase';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import authStore from '../stores/authStore';
	import Header from '../components/Header/Header.svelte';
	import { ChatOptions } from '../components/Chat/chat-utils';

	onMount(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				authStore.set({user: user, isLoggedIn: true, email: user.email || ""});
				goto(`/chat?chatWith=${ChatOptions.STOCKS}`)
			} else {
				authStore.set({user: undefined, isLoggedIn: false});
				goto('/login');
			}
		});
  });

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<Header />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
