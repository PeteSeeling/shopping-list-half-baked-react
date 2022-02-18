import { buyItem } from './services/fetch-utils';
import React from 'react';

export default function ListItem({ fetchItems, item }) {
  async function handleClick() {
    // buy the item (in supabase)
    await buyItem(item.id);
    // refetch the updated items array by calling the function passed in through props
    await fetchItems();
    
  }

//  () => {} is javascript for "do nothing". It's an arrow function that doesn't nothing at all.
  return (
    // on click, if it's already been bought, do nothing; otherwise, call the handleClick function
    
      // on click, if it's already been bought, do nothing; otherwise, call the handleClick function
    <div
      onClick={item.has_been_bought ? () => {} : handleClick } className={` ${item.has_been_bought ? 'bought' : ''}`}>
      <div>{item.name} {item.quantity} 
    
       
       
   
      
        {/* show the quantity and name here */}
      </div>   
    </div>
  );
}
