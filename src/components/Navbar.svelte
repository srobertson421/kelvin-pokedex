<script>
  import { link } from 'svelte-routing';
</script>

<nav class="main-nav">
  <a use:link href="/">Search</a>
  <a use:link href="/favorites">Favorites</a>
</nav>

<style>
  .main-nav {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
  }

  .main-nav a {
    margin-right: 12px;
    padding: 8px;
    font-size: 16px;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }

  .main-nav a:visited {
    text-decoration: none;
    color: black;
  }
</style>