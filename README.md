Event Router
===========

A minimalistic DOM event routing system inspired by the Backbone event delegates pattern.

Basic Usage:
```js
var eventRouter = new EventRouter({
    routes {
        'click a': function() {},
        'click button': function() {},
        'focus input': function() {},
    }
});
```

Root DOM Element:
```js
var eventRouter = new EventRouter({
    $el: $('header'),
    routes {
        'click a': function() {},
        'click button': function() {},
        'focus input': function() {},
    }
});
```

Context Scoped Callback:
```js
var eventRouter = new EventRouter({
    context: this,
    routes {
        'click a': function() {},
        'click button': function() {},
        'focus input': function() {},
    }
});
```

Route/Unroute:
```js
var eventRouter = new EventRouter();
eventRouter.route({
    "click a": function() {},
    "click button": function() {},
    "focus input": function() {},
});
eventRouter.unroute();
```

Route Replacement:
```js
var eventRouter = new EventRouter();
eventRouter.route({
    "click a": function() {},
});
eventRouter.route({
    "click button": function() {},
    "focus input": function() {},
});
```
