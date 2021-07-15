function shuffle(arr) {
  var currentIdx = arr.length,
    randomIdx

  // while there remain elements to shuffle...
  while (0 !== currentIdx) {
    // pick a remaining element...
    randomIdx = Math.floor(Math.random() * currentIdx)
    currentIdx--

    // and swap it with the current element.
    ;[arr[currentIdx], arr[randomIdx]] = [arr[randomIdx], arr[currentIdx]]
  }

  return arr
}

export default shuffle
