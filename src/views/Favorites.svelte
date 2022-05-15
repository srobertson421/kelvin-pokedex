<script>
  import { link } from 'svelte-routing';
  import { favorites } from '../state/pokemon';
  import FavoriteButton from '../components/FavoriteButton.svelte';
</script>

<div class="row flex-center">
  <h1 class="title">Favorites</h1>
</div>
<div class="row flex-start wrap">
  {#each $favorites as poke}
    <a class="card-result between align-center" use:link href={`/pokemon/${poke.id}`}>
      <div class="row flex-center">
        <img src={poke.images.small} alt={`${poke.name}-${poke.id}`} />
      </div>
      <div class="row">
        <h2 style="text-transform: capitalize;">{ poke.name }</h2>
      </div>
      <div class="row">
        <h4>Set: { poke.set.name }</h4>
      </div>
      <div class="row">
        <FavoriteButton pokemon={poke} favorited={!!$favorites.find(fav => fav.id === poke.id)} />
      </div>
    </a>
  {/each}
</div>

<style>
  .card-result {
    display: flex;
    flex-direction: column;
    flex: 1 1 150px;
    color: white;
    text-decoration: none;
    background-color: rgba(50, 50, 50, 0.6);
    padding: 10px;
    margin: 5px;
  }

  .card-result:visited {
    text-decoration: none;
    color: white;
  }
</style>