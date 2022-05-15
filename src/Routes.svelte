<script>
  import { Router, Route } from 'svelte-routing';
  import Navbar from './components/Navbar.svelte';

  import Search from './views/Search.svelte';
  import Pokemon from './views/Pokemon.svelte';
  import Favorites from './views/Favorites.svelte';

  export let url = '';
</script>

<Router url={url}>
  <Navbar />
  <Route path="/">
    <Search />
  </Route>
  <Route path="/pokemon/:id" let:params>
    <Pokemon id={params.id} />
  </Route>
  <Route path="/favorites">
    <Favorites />
  </Route>
</Router>