//accepts a selector and returns the first element that matches
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

//that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)

function nestedTarget() {
  return document.querySelector(#nested.target)
};
