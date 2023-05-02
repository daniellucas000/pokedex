import { useEffect, useState } from 'react';
import { api } from '../../../../utils/axios';
import { CardContainer } from './styles';

import * as Dialog from '@radix-ui/react-dialog';
import { Modal } from '../../../../components/Modal';

interface NameProps {
  name: string;
}

interface PokemonTypesProps {
  name: string;
  color: string;
}

export interface PokemonProps {
  id: string;
  name: string;
  height: number;
  weight: number;
  type: PokemonTypesProps[];
  image: string;
}

export function CardPokemon({ name }: NameProps) {
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    api.get(`/pokemon/${name}`).then((response) => {
      const { id, name, height, weight, types, sprites } = response.data;

      setPokemon({
        id,
        name,
        height,
        weight,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type: types.map((pokemonType: any) => {
          const typeName = pokemonType.type.name;
          return {
            name: typeName,
          };
        }),
        image: sprites.other.dream_world.front_default,
      });
    });
  }, [name]);

  if (pokemon === null) {
    return <></>;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CardContainer>
          <img src={pokemon.image} alt="" />

          <div>
            <span>#{pokemon.id}</span>
            <div>
              <strong>{pokemon.name}</strong>
              {/* <img src="" alt="" /> type - icon */}
            </div>
          </div>
        </CardContainer>
      </Dialog.Trigger>

      <Modal pokemon={pokemon} />
    </Dialog.Root>
  );
}
