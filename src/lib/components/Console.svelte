<script>

import { onMount } from "svelte";

// tous les messages à diffuser dans ce module

onMount(() => {
  console.log(
    "%cBienvenue sur le PIFM",
    "font-family:monospace;font-size:14px;color:darkblue;"
  );
});

</script>
