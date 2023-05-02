import * as Dialog from '@radix-ui/react-dialog';
import { Overlay, Content, CloseButton, Title } from './styles';

import { PokemonProps } from '../../pages/Home/components/CardPokemon/index';

import { X } from 'phosphor-react';

interface Pokemon {
  pokemon: PokemonProps;
}

export function Modal({ pokemon }: Pokemon) {
  const heightPokemon = pokemon.height / 10;
  const weightPokemon = pokemon.weight / 10;

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <div>
          <img src={pokemon.image} alt="" />
        </div>

        <div>
          <div>
            <Title>{pokemon.name}</Title>
            <span>#{pokemon.id}</span>
          </div>
          <span>Height: {heightPokemon}m</span>
          <span>Weight: {weightPokemon}kg</span>
        </div>

        <CloseButton>
          <X size={32} weight="bold" />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  );
}
