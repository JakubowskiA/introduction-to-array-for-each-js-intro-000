// Add your doToElementsInArray() function here:
function doToElementsInArray(array) {
  array.forEach(function callback() {
    return `Mmmm, ${callback}!!!`;
  });
}
doToElementsInArray(array);

// Add your changeCompletely() function here:
function changeCompletely(arr) {
  arr.forEach(arr => {
    arr = 'poop';
  });
}
