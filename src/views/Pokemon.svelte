<script>
  import { onMount } from 'svelte';
  import Loader from '../components/Loader.svelte';
  import { fetchCard, currentPokemon, loadingPokemon } from '../state/pokemon';
  export let id = '';

  onMount(async () => {
    fetchCard(id);
  });

  function backToSearch() {
    window.history.back();
  }
</script>

<style>
  .back-btn {
    border: none;
    background-color: white;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
  }
</style>

{#if $loadingPokemon}
  <div class="row flex-center">
    <Loader />
  </div>
{/if}

{#if $currentPokemon && !$loadingPokemon}
  <div class="row flex-start">
    <button on:click={backToSearch} class="back-btn">Back To Search</button>
  </div>
  <div class="row flex-center">
    <img class="img-responsive" src={$currentPokemon.images.large} alt={$currentPokemon.name} />
  </div>
{/if}