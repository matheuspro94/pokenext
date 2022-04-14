import { GetStaticProps } from 'next';
import Image from 'next/image';

import HomeStyled from '../styles/HomeStyled';
import Card from '../components/Card';

export interface pokemon {
  id: number,
  name: string,
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const maxPokemons: number = 251;
    const API: string = 'https://pokeapi.co/api/v2/pokemon';

    const res = await fetch(`${API}/?limit=${maxPokemons}`);
    const data = await res.json();

    data.results.map((item: pokemon, index: number) => {
      item.id = index + 1
    });

    return {
      props: {
        pokemons: data.results
      }
    }
  } catch (e) {
    console.error(e);
  }
}

export default function Home({ pokemons }) {
  return (
    <HomeStyled>
      <div className="title_container">
        <h1 className="title">Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt="pokeball"/>
      </div>
      <div className="card_container">
        {pokemons.map((pokemon: pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </HomeStyled>
  )
}
