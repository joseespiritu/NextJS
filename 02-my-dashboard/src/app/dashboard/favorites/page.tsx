import { PokemonGrid } from '../../../pokemons/components/PokemonGrid';


export const metadata = {
 title: 'Favoritos',
 description: 'Descripción de página de 151 pokémons',
};

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Pokémons favoritos <small className="text-blue-500">Global State</small></span>

            <PokemonGrid pokemons={[]}/>
        </div>
    );
}