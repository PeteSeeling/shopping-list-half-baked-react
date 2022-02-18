import { buyItem } from './services/fetch-utils';

export default function ListItem({ fetchItems, listItem }) {
  async function handleClick() {
    // buy the item (in supabase)
    await buyItem(listItem.id);
    // refetch the updated items array by calling the function passed in through props
    await fetchItems();
  }

//  () => {} is javascript for "do nothing". It's an arrow function that doesn't nothing at all.
  return (
    // on click, if it's already been bought, do nothing; otherwise, call the handleClick function
    
      // on click, if it's already been bought, do nothing; otherwise, call the handleClick function
    <div className='list-item'
      onClick={listItem.bought ? <p className='bought'>bought</p> : { handleClick }}>
      <p>{listItem.name} {listItem.quantity}
        {/* show the quantity and name here */}
      </p>   
    </div>
  );
}
