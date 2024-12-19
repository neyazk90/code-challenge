
interface ListItemProps {
  name: string;
}
  
const ListItem: React.FC<ListItemProps> = ({ name }) => {
  return <li>{name}</li>;
};
  
export default ListItem;
  