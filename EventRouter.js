function EventRouter(options) {
    options || (options = {});
    this.id = EventRouter.uniqueId();
    if (options.$el) {
         this.$el = (Object.prototype.toString.call(obj) == '[object String]') ? $(options.$el) : options.$el;
    } else {
        this.$el = $('body');
    }
    this.$el = (options.$el) ? options.$el : $('body');
    this.context = options.context;
    if (options.routes) {
        this.route(options.routes);
    }
}
EventRouter.prototype = {
    splitter: /^(\S+)\s*(.*)$/,
    route: function(routes) {
        if (typeof routes === 'function') {
            routes = routes();
        }
        if (!routes) {
            return;
        }
        this.unroute();
        for (var key in routes) {
            var method = routes[key];
            if (typeof method !== 'function') {
                continue;
            }
            var match = key.match(this.splitter);
            var eventName = match[1];
            var selector = match[2];
            if (this.context) {
                method = EventRouter.bind(method, this.context);
            }
            eventName += '.EventRouter' + this.id;
            if (selector === '') {
                this.$el.on(eventName, method);
            } else {
                this.$el.on(eventName, selector, method);
            }
        }
    },
    unroute: function() {
        this.$el.off('.EventRouter' + this.id);
    }
};
EventRouter.idCounter = 0;
EventRouter.uniqueId = function() {
    return ++EventRouter.idCounter;
};
EventRouter.bind = function(func, context) {
    var nativeBind = Function.prototype.bind;
    var slice = Array.prototype.slice;
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
      return func.apply(context, args.concat(slice.call(arguments)));
    };
};
