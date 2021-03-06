//accepts a selector and returns the first element that matches
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

//that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)

function nestedTarget() {
  return document.querySelector("#nested .target");
};

//increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {
  const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i=0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML,10) + n).toString();
  };
};

//pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)
function deepestChild() {
  const grandNode = document.getElementById('grand-node').querySelectorAll('div');
  return grandNode[grandNode.length-1]
};
