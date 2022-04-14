import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image';
import PokemonStyled from '../../styles/PokemonStyled';

export interface pokemonProp {
  id: number,
  name: string,
  type: { name: string }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const maxPokemons: number = 251;
    const API: string = 'https://pokeapi.co/api/v2/pokemon';

    const res = await fetch(`${API}/?limit=${maxPokemons}`);
    const data = await res.json();

    const paths = data.results.map((_pokemon: any, index: number) => {
      return {
        params: { pokemonId: (index + 1).toString() },
      }
    })

    return {
      paths,
      fallback: false,
    }
  } catch (e) {
    console.error(e);
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return {
      props: { pokemon: data },
    }
  } catch (e) {
    console.log(e)
  }
}

export default function Pokemon({ pokemon }) {
  return (
    <PokemonStyled>
      {/* {console.log(pokemon)} */}
      <h1>{pokemon.name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className="types_container">
          {pokemon.types.map((item: pokemonProp, index: number) => (
            <span key={index} className={`type ${['type_' + item.type.name]}`}>{item.type.name}</span>
          ))}
        </div>
      </div>
      <div className="data_container">
        <div className="data_height">
          <h3>Altura:</h3>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className="data_weight">
          <h3>Peso:</h3>
          <p>{pokemon.weight / 10} Kg</p>
        </div>
      </div>
    </PokemonStyled>
  )
}