import { useState } from 'react'
import styled from 'styled-components'
import showItem from './showItem'
const data = require('./data.json')

const categories = [
    'all',
    'appetizer',
    'snack',
    'soups & salads',
    'entree salads',
    'gardein',
    'pizzas',
    'prime burgers',
    'sandwiches',
    'steaks, seafood & house favorites',
    'desserts',
    'kids favorites',
    'street tacos',
    'responsible alcohol service',
    'beer',
    'house beers',
    'light',
    'crisp - refreshing',
    'ipa - hoppy',
    'wheat',
    'fruity - sour',
    'brown - stout',
    'strong - golden',
    'strong - dark',
    'cider',
    'cocktails',
    'zero proof',
    'white wine by the glass',
    'red wine by the glass',
    'wines by the bottle',
    'beer categories'
]

const menuContainer = styled.div`
  display: grid;
`
const border = styled.div`
  display: block;
  border: 3px solid black;
  width: 100;
`
function Menu() {
  const [item, setItem] = useState()
  const [category, setCategory] = useState()
  const [reverse, setReverse] = useState(false)

  const toggleReverse = () => setReverse((current) => !current)

  return (
    <>
      <menuContainer>
        {/* {data.map((x, i) => (
          <button onClick={(e) => setItem(x)} key={i}>
            {x.name}
          </button>
        ))} */}
        <border>
          {categories.map((cat, i) => (
            <button onClick={(e) => setCategory(cat.toLowerCase())} key={i}>
              {cat}
            </button>
          ))}
          <button onClick={toggleReverse}>Reverse</button>
        </border>
      </menuContainer>
      {/* <menuContainer>{showItem(null, item)}</menuContainer> */}
      <menuContainer>
        <div>Current category: {category ? category : 'ALL'}</div>
        {showItem(null, data, category, reverse)}
      </menuContainer>
    </>
  )
}

export default Menu
