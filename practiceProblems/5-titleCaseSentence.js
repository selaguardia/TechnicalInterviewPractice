//! Title case a sentence
function titleCase(str) {
  let words = str.toLowerCase().split(' ');
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
console.log(titleCase("I'm a little tea pot"))


//! Title case a sentence (2nd way)
function titleCase(str) {
  let titled = str.toLowerCase().split(' ').map(function(elem) {
    return elem[0].toUpperCase() + elem.slice(1);
  })
  return titled.join(' ')
}
console.log(titleCase("I'm a little tea pot"))