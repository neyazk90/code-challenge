import { useDispatch } from "react-redux";
import { removeItem } from "../store/slices/pokemonListSlice";

interface iListItemProps {
  name: string;
}

const ListItem: React.FC<iListItemProps> = ({ name }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem(name));
  };

  return (
    <>
      <li>
        {name}
        <button onClick={handleRemove} className="mt-20px"> Remove </button>
      </li>
    </>
  );
};

export default ListItem;
