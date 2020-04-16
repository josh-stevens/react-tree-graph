Original library docs are here -> https://github.com/jpb12/react-tree-graph
And here -> https://jpb12.github.io/react-tree-graph/

So I'll just document the modifications:
- Added a "rect" boolean prop which will replace the circle svg element with a rect
- Similarly added a "rectProps" prop which get passed to the rect

Upcoming changes:
- Svg shapes for expand/collapse buttons
- click events for expand/collapse

To publish, you need to be logged into the npm Artifactory on jfrog (`npm login`) and then type `npm publish`
