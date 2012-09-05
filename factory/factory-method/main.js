"use strict";

// Polyfill -- Only necessary for browsers which don't support Object.create. Check this ES5 compatibility table:
// http://kangax.github.com/es5-compat-table/
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}


// Credit to Yehuda Katz for `fromPrototype` function
// http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
var fromPrototype = function(prototype, object) {
    var newObject = Object.create(prototype);
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            newObject[prop] = object[prop];
        }
    }
  return newObject;
};

// Define the Pizza product
var Pizza = {
    description: 'Plain Generic Pizza'
};

// And the basic PizzaStore
var PizzaStore = {
    createPizza: function(type) {
        if (type == 'cheese') {
            return fromPrototype(Pizza, {
                description: 'Cheesy, Generic Pizza'
            });
        } else if (type == 'veggie') {
            return fromPrototype(Pizza, {
                description: 'Veggie, Generic Pizza'
            });
        }
    }
};

var ChicagoPizzaStore = fromPrototype(PizzaStore, {
    createPizza: function(type) {
        if (type == 'cheese') {
            return fromPrototype(Pizza, {
                description: 'Cheesy, Deep-dish Chicago Pizza'
            });
        } else if (type == 'veggie') {
            return fromPrototype(Pizza, {
                description: 'Veggie, Deep-dish Chicago Pizza'
            });
        }
    }
});

var CaliforniaPizzaStore = fromPrototype(PizzaStore, {
    createPizza: function(type) {
        if (type == 'cheese') {
            return fromPrototype(Pizza, {
                description: 'Cheesy, Tasty California Pizza'
            });
        } else if (type == 'veggie') {
            return fromPrototype(Pizza, {
                description: 'Veggie, Tasty California Pizza'
            });
        }
    }
});

// Elsewhere in our app...
var chicagoStore = Object.create(ChicagoPizzaStore);
var pizza = chicagoStore.createPizza('veggie');
console.log(pizza.description); // returns 'Veggie, Deep-dish Chicago Pizza'