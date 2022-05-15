<script>
  import { searchCards, searchQuery } from '../state/pokemon';
</script>

<style>
  .search-container {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .card-search {
    border-radius: 15px;
    padding: 10px;
    border: none;
    font-size: 24px;
    text-align: center;
  }

  .search-btn {
    margin-top: 10px;
    border: none;
    padding: 10px;
    font-size: 24px;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
  }
</style>

<form class="search-container" on:submit|preventDefault={searchCards}>
  <div class="row flex-center">
    <input
      type="text"
      class="card-search"
      bind:value={$searchQuery}
      placeholder="Enter pokemon name"
    />
  </div>
  <div class="row flex-center">
    <button class="search-btn" type="submit">Search</button>
  </div>
</form>