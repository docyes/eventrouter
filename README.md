Event Router
===========

A minimalistic DOM event routing system inspired by the Backbone event delegate pattern. Dependencies: zepto.js or jQuery

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

Root jQuery/Zepto Element:
```js
var eventRouter = new EventRouter({
    el: $('header'),
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
    el: document.querySelectorAll('header')[0],
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
    'click a': function() {},
    'click button': function() {},
    'focus input': function() {},
});
eventRouter.unroute();
```

Route Replacement:
```js
var eventRouter = new EventRouter();
eventRouter.route({
    'click a': function() {},
});
eventRouter.route({
    'click button': function() {},
    'focus input': function() {},
});
```
Routes as a Function:
```js
var eventRouter = new EventRouter();
eventRouter.route(function() {
    return {
        'click a': function() {},
        'click button': function() {},
        'focus input': function() {},
    };
});
```

