import React from "react";
import ListItem from "./ListItem";

interface ListProps {
    items: { name: string }[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items?.map((item, index) => (
        <ListItem key={index} name={item.name} />
      ))}
    </ul>
  );
};

export default List;