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
  <button disabled={$currentPage === 1} on:click={() => previousPage($currentPage)}>Previous Page</button>
  <div>Page { $currentPage } / { $totalPages }</div>
  <button disabled={$currentPage === $totalPages} on:click={() => nextPage($currentPage)}>Next Page</button>
</div>

<style>
  .pagination-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
</style>