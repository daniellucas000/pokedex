import { useEffect, useState, useCallback } from 'react';
import { CardPokemon } from './components/CardPokemon';

import { api } from '../../utils/axios';
import {
  HeaderContainer,
  HomeContainer,
  PokemonList,
  InputContainer,
} from './styles';

import { MagnifyingGlass } from 'phosphor-react';

interface PokemonProps {
  name: string;
  url: string;
}

interface PokemonProps {
  id: string;
  name: string;
}

export function Home() {
  const NUMBER_MAX_POKEMONS_API = 750;

  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState('');

  // Filtra os pokémons a partir da string digitada no input de busca
  const handleSearchPokemons = useCallback(async () => {
    const response = await api.get(`/pokemon?limit=${NUMBER_MAX_POKEMONS_API}`);

    setPokemonSearch(pokemonSearch.toLocaleLowerCase());
    // Valida nomes dos pokémons constam no valor da variável pokemonSearch
    const pokemonsSearch = response.data.results.filter(
      ({ name }: PokemonProps) => name.includes(pokemonSearch)
    );
    setPokemons(pokemonsSearch);
  }, [pokemonSearch]);

  // Carrega uma lista inicial de pokémons
  const handlePokemonsListDefault = useCallback(async () => {
    const response = await api.get('/pokemon');
    setPokemons(response.data.results);
  }, []);

  useEffect(() => {
    const isSearch = pokemonSearch.length >= 1;

    if (isSearch) handleSearchPokemons();
    else handlePokemonsListDefault();
  }, [pokemonSearch, handlePokemonsListDefault, handleSearchPokemons]);

  return (
    <HomeContainer>
      <HeaderContainer>
        <div>
          <h2>Select your Pokémon</h2>

          <InputContainer>
            <MagnifyingGlass size={18} weight="bold" />
            <input
              type="text"
              onChange={(e) => setPokemonSearch(e.target.value)}
              placeholder="Search name"
            />
          </InputContainer>
        </div>
      </HeaderContainer>

      <span>{pokemons.length} Pokémons</span>

      <PokemonList>
        {pokemons.map((pokemon) => (
          <CardPokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </PokemonList>
    </HomeContainer>
  );
}
