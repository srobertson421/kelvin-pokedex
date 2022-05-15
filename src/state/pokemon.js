import { writable, get } from 'svelte/store';
import axios from 'axios';

export const pokemon = writable([]);
export const currentPokemon = writable(null);
export const loadingPokemon = writable(false);
export const searchQuery = writable('');
export const currentPage = writable(1);
export const totalPages = writable(1);
export const favorites = writable([]);

export async function searchCards(e) {
  loadingPokemon.set(true);
  const result = await axios({
    headers: {
      'X-Api-Key': '0f7bc36a-a80e-423a-acf4-7a76f67b9497'
    },
    method: 'get',
    url: 'https://api.pokemontcg.io/v2/cards',
    params: {
      q: `name:${get(searchQuery)}*`,
      page: get(currentPage)
    }
  });

  console.log(result.data.data);

  currentPage.set(result.data.page);
  totalPages.set(Math.ceil(result.data.totalCount / result.data.count));
  pokemon.set(result.data.data);
  loadingPokemon.set(false);
}

export async function fetchCard(id) {
  const existingPokemon = get(pokemon).find(poke => poke.id === id);

  if(existingPokemon) {
    currentPokemon.set(existingPokemon);
  } else {
    loadingPokemon.set(true);
    const result = await axios({
      headers: {
        'X-Api-Key': '0f7bc36a-a80e-423a-acf4-7a76f67b9497'
      },
      method: 'get',
      url: `https://api.pokemontcg.io/v2/cards/${id}`,
    });

    currentPokemon.set(result.data.data);
    loadingPokemon.set(false);
  }
}

export async function fetchFavorites() {
  const result = await axios({
    headers: {
      'X-Master-Key': '$2b$10$HdySGIU8zEJ8UuoqLpEdz.a2AKXY/UeCXTpfta4McRDtUWop1YHWa'
    },
    method: 'get',
    url: 'https://api.jsonbin.io/v3/b/62815f6c38be29676106611f'
  });

  console.log(result.data.record);

  favorites.set(result.data.record.favorites);
}

export async function addFavorite(newFavorite) {
  const tmpFavs = [...get(favorites), newFavorite];
  favorites.set(tmpFavs);
  await saveFavorites();
}

export async function removeFavorite(favoriteToRemove) {
  const favs = get(favorites);
  const favoriteIndex = favs.findIndex(fav => fav.id === favoriteToRemove.id);
  const tmpFavs = [ ...favs.slice(0, favoriteIndex), ...favs.slice(favoriteIndex + 1) ];
  console.log(tmpFavs);
  favorites.set(tmpFavs);
  await saveFavorites();
}

export async function saveFavorites() {
  const result = await axios({
    headers: {
      'X-Master-Key': '$2b$10$HdySGIU8zEJ8UuoqLpEdz.a2AKXY/UeCXTpfta4McRDtUWop1YHWa',
      'Content-Type': 'application/json'
    },
    method: 'put',
    url: 'https://api.jsonbin.io/v3/b/62815f6c38be29676106611f',
    data: { favorites: get(favorites) }
  });

  favorites.set(result.data.record.favorites);
}