<script>
  import Routes from './Routes.svelte';
  import Pagination from './components/Pagination.svelte';
  import Test from './components/Test.svelte';
</script>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    background-color: #d53731;
  }

  :global(.img-responsive) {
    width: 100%;
    max-width: 600px;
  }

  :global(.row) {
    display: flex;
    flex-direction: row;
  }

  :global(.flex-center) {
    justify-content: center;
    align-items: center;
  }

  :global(.flex-left) {
    justify-content: center;
    align-items: flex-start;
  }

  :global(.flex-right) {
    justify-content: center;
    align-items: flex-end;
  }

  :global(.wrap) {
    flex-wrap: wrap;
  }

  :global(.between) {
    justify-content: space-between;
  }

  :global(.align-center) {
    align-items: center;
  }
</style>

<Routes />