import { writable, get } from 'svelte/store';
import axios from 'axios';

export const pokemon = writable([]);
export const currentPokemon = writable(null);
export const loadingPokemon = writable(false);
export const searchQuery = writable('');
export const currentPage = writable(1);
export const totalPages = writable(1);

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

  console.log(result);
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

    console.log(result.data.data);
    currentPokemon.set(result.data.data);
    loadingPokemon.set(false);
  }
}