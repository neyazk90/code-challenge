import React from "react";
import ListItem from "./ListItem";
import style from "./List.module.css"; 
import { useSelector } from "react-redux";

interface iPokemonItem {
    name: string;
    url: string;
  }
  
  interface iPokemonState {
    pokemon: iPokemonItem[];
  }
  
  interface iState {
    pokemonList: iPokemonState;
  }

const List: React.FC = () => {
    const pokemon = useSelector((state:iState) => state.pokemonList.pokemon);
    if (!pokemon) {
        return;
    }
  return (
      <ul className={style.gridCard}>
      {pokemon?.map((item:any, index) => (
        <ListItem key={index} name={item.name} />
      ))}
    </ul>
  );
};

export default List;