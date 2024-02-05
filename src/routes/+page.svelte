<script>
  import Information from '$lib/components/Information.svelte';
  import Leaflet from '$lib/components/Leaflet.svelte';
  import Console from '$lib/components/Console.svelte';
</script>

<Information />

<main>
  <Leaflet>
    <Console />
  </Leaflet>
</main>

<style>
  main {
    height: calc(100vh - 40px);
  }
</style>