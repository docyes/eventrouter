Event Router
===========

A minimalistic DOM event routing system inspired by the Backbone event delegates pattern.

```js
var eventRouter = new EventRouter({
    $el: $('body')
});
eventRouter.route({
    "click a": function() {},
    "click button": function() {},
    "focus input": function() {},
});
```
