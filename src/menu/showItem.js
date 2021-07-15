import { FlashcardComponent } from 'react-flashcard'
import shuffle from '../helpers/shuffle'

function showItem(e, x, category, reverse) {
  if (!x) return null
  let data1
  shuffle(x)

  if (category && category !== 'all') {
    if (reverse) {
      data1 = x.filter((d) => d.category === category).map((d) => ({ front: { text: d.description }, back: { text: d.name } }))
    } else {
      data1 = x.filter((d) => d.category === category).map((d) => ({ front: { text: d.name }, back: { text: d.description } }))
    }
  } else {
    if (reverse) {
      data1 = x.map((d) => ({ front: { text: d.description }, back: { text: d.name } }))
    } else {
      data1 = x.map((d) => ({ front: { text: d.name }, back: { text: d.description } }))
    }
  }

  // const data = [
  //   {
  //     front: {
  //       text: x.name,
  //     },
  //     back: {
  //       text: x.description,
  //     },
  //   },
  // ]
  return <FlashcardComponent dataSource={data1}></FlashcardComponent>
}

export default showItem
