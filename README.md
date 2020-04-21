Original library docs are here -> https://github.com/jpb12/react-tree-graph
And here -> https://jpb12.github.io/react-tree-graph/

So I'll just document the modifications:
- Added a "rect" boolean prop which will replace the circle svg element with a rect
- Similarly added a "rectProps" prop which get passed to the rect
- Added "collapsible" to the tree, which then causes individual nodes to check for "collapsed"
  and draw a + or - circle (only if the node has children). If collapsed is true, it doesn't render
  children for that node (because the getChildren method checks for collapsed as well).

To publish, you need to be logged into the npm Artifactory on jfrog (`npm login`) and then type `npm publish`
