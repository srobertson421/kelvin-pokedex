<script>
  import { Router, Route } from 'svelte-routing';

  import Search from './views/Search.svelte';
  import Pokemon from './views/Pokemon.svelte';

  export let url = '';
</script>

<Router url={url}>
  <Route path="/">
    <Search />
  </Route>
  <Route path="/pokemon/:id" let:params>
    <Pokemon id={params.id} />
  </Route>
</Router>