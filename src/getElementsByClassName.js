// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  // your code here
  var matchedNodes = [];
  var node = node || document.body;
  // iterate thru all the nodes
  for (var i = 0; i < className.children.length; i++) {
    
    // check nodes for classname
    if(node.className === className){
      matchedNodes.push(node);
    }
    //if node has children, iterate through children
      //create var for recursive call to getElementsByClassName(classname, currentNode)
      //push results into matchedNodes
  }
  
  
  return matchedNodes;
};
