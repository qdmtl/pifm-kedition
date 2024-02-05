<script>
// voir NOTES.md pour documentation en soutien au dev

import { onDestroy, onMount, setContext } from "svelte";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

let pifm;
let mapElement;

/** 
 * Base Layer
 * Photos aériennes
 */
const baseLayer = L.tileLayer("https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  attribution: "Map data &copy; QDMTL. Imagery: &copy; Google, &copy; Archives de Montréal.",
  maxZoom: 20,
  tileSize: 256
});

onMount(() => {

  pifm = L.map(mapElement, {
    center: [45.51823567357893, -73.55085910368373],
    zoom: 18, // https://github.com/Leaflet/Leaflet/issues/3575
    minZoom: 15,
    zoomDelta: 0.5,
    zoomSnap: 0.5,
    zoomControl: false,
    layers: [
      baseLayer,
//      faubourgLayer,
//      geoJSON
    ]
  });
});

onDestroy(() => {
  pifm?.remove();
  pifm = undefined;
});

setContext("map", {
  getMap: () => pifm // bien ça ici?
});

</script>

<div id="pifm" bind:this={mapElement}>
  {#if pifm}
    <slot />
  {/if}
</div>

<style>
  #pifm {
    height: 100%;
  }
</style>