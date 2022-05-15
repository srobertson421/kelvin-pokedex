<script>
  import { totalPages, currentPage, searchCards } from '../state/pokemon';

  function previousPage(pageNum) {
    currentPage.set(pageNum - 1);
    searchCards();
  }

  function nextPage(pageNum) {
    currentPage.set(pageNum + 1);
    searchCards();
  }
</script>

<div class="pagination-container">
  <button class="pagination-button" disabled={$currentPage === 1} on:click={() => previousPage($currentPage)}>Previous Page</button>
  <p class="pagination-display">Page { $currentPage } / { $totalPages }</p>
  <button class="pagination-button" disabled={$currentPage === $totalPages} on:click={() => nextPage($currentPage)}>Next Page</button>
</div>

<style>
  .pagination-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .pagination-display {
    color: white;
    font-size: 24px;
    margin-right: 16px;
    margin-left: 16px;
  }

  .pagination-button {
    margin-top: 10px;
    border: none;
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
  }
</style>