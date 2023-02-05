import React from "react";
import Item from "./Item";
import {useState} from "react";

function ShoppingList({ items }) {

const[selectedCategory, setSelectedCategory] = useState('All')

 function handleChange (event){

  setSelectedCategory(event.target.value)
 }
 
const newItems = items.filter(item=>
  item.category === selectedCategory ||  'All' === selectedCategory)
 



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange= {handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
          /* {((
          {newItems} */
         ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
