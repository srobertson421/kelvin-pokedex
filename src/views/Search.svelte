<script>
  import SearchBar from '../components/SearchBar.svelte';
  import SearchResults from '../components/SearchResults.svelte';
  import Loader from '../components/Loader.svelte';
  import Pagination from '../components/Pagination.svelte';
  import { loadingPokemon } from '../state/pokemon';
</script>

{#if $loadingPokemon}
  <div class="row flex-center">
    <Loader />
  </div>
{:else}
  <SearchBar />
  <Pagination />
  <SearchResults />
  <Pagination />
{/if}