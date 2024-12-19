import React from "react";
import ListItem from "./ListItem";
import style from "./List.module.css"; 

interface ListProps {
    items: { name: string }[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
      <ul className={style.gridCard}>
      {items?.map((item, index) => (
        <ListItem key={index} name={item.name} />
      ))}
    </ul>
  );
};

export default List;