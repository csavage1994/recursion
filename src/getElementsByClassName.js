// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  // your code here
  var matchedNodes = [];
  node = node || document.body;
  var multipleClasses = node.className.split(" ");
  if (multipleClasses.indexOf(className) >= 0) {
  // iterate thru all the nodes
    // check nodes for classname

      matchedNodes.push(node);
      console.log(matchedNodes);
  }

  //if node has children, iterate through children
  for (var i = 0; i < node.children.length; i++) {
    //create var for recursive call to getElementsByClassName(classname, currentNode)
    var temp = getElementsByClassName(className, node.children[i]);
    matchedNodes = matchedNodes.concat(temp);
  }
  
  return matchedNodes;
};
