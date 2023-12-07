<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import faitImg from '$lib/images/FAIT-logo-white.png';
	import { goto } from '$app/navigation';
	import { getAuth, signOut } from 'firebase/auth';
	import authStore from '../../stores/authStore';

    const auth = getAuth();

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('uid');
        goto('/login');
    };

</script>

<AppBar>
    <svelte:fragment slot="lead">
        <div class="fixed top-2 left-4 w-24 h-16">

            <img src={faitImg} class="w-full h-full" alt="FaitGPT" />
        </div> 

    </svelte:fragment>

    <svelte:fragment slot="trail">
        {#if $authStore.isLoggedIn}
            <p>{$authStore.email}</p>
            <button on:click={logout} class="btn btn-sm variant-ghost-surface">
                Log out
            </button>
        {:else}
            <!-- TODO: Possibly link this -->
            <p>About</p>
        {/if}
    </svelte:fragment>
</AppBar>