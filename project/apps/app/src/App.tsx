import { useEffect } from 'react';
import  List  from './ui/List'
import { useDispatch } from 'react-redux';
import { addItem } from './store/slices/pokemonListSlice';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const dispatch = useDispatch();
  // const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        // setPokemon(data.results);
        dispatch(addItem(data.results));
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();
  }, []);
/*
Further optimizations

  [0] I can create a api service for (get, post, ...) reuest and in constant file base URL should be added.
  [1] For further optimization we can create a separate custom hooks for fetching api calls, 
  [2] I can implement here pagination with infinte scrolling.
  [3] when fetching network requests I can show loader.
*/



  return (
  <>
    <h1>Pokemon list:</h1>
    <List />
  </>
  )
}

export default App
