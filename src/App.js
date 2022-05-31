import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const categoriesArray = [
    'all',
    ...new Set(
      items.map((meal) => {
        return meal.category;
      })
    ),
  ];
  const [categories, setCategories] = useState(categoriesArray);

  const filterItems = (category) => {
    if (category === 'all') setMenuItems(items);
    else {
      const newItems = items.filter((meal) => meal.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>

        <Categories filterItems={filterItems} categories={categories} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
