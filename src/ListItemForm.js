import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createListItem } from './services/fetch-utils';

export default function ListItemForm({ fetchItems }) {
  // you'll need to track the name and quantity in state
  const [listItem, setListItem] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    
    // make a new list item in supabase using the form values stored in state
    await createListItem({ name, quantity });
    history.push('/shopping_list_items');
   

    fetchItems([]);
    // refetch the items using the handler functionpassed down as a prop
    fetchItems();
    setName('');
    setQuantity(0);
    
    // clear the name and quantity in state to refresh the form
  }

  return (
    <div className='new-item-form-container'>
      {/* on submit, call the handleSubmit function */}
      <form onSubmit={handleSubmit}>
          I need . . . 
        <label>
            Quantity
          {/* on change, update the quantity in state */}
          <input onChange={e => setQuantity(e.target.value)}value={quantity}
            // this should be a controlled input, soi set the value based on state
            required 
            type="number" 
            name="quantity"
            
          />
        </label>
        <label>
            Name
          {/* on change, update the name in state */}
          <input onChange={e => setName(e.target.value)}value={name}
            // this should be a controlled input, soi set the value based on state 
            required 
            name="name" />
        </label>
        <button>Add item</button>
      </form>
    </div>
  );
}
