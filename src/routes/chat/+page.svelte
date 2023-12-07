<script lang="ts">
	import Chat from "../../components/Chat/Chat.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

  </script>
<div class="flex flex-col pt-10 h-full">

	<Chat messages={data.messages} />
  
</div>