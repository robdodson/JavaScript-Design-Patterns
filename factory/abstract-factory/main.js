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


// Define our `Ingredients` base object
var Ingredients = {
    createDough: function() {
        return 'generic dough';
    },
    createSauce: function() {
        return 'generic sauce';
    },
    createCrust: function() {
        return 'generic crust';
    }
};

// Extend `Ingredients` with concrete implementations
Ingredients.createChicagoStyle = function() {
    return fromPrototype(Ingredients, {
        createDough: function() {
            return 'thick, heavy dough';
        },
        createSauce: function() {
            return 'rich marinara';
        },
        createCrust: function() {
            return 'deep-dish';
        }
    });
};

Ingredients.createCaliforniaStyle = function() {
    return fromPrototype(Ingredients, {
        createDough: function() {
            return 'light, fluffy dough';
        },
        createSauce: function() {
            return 'tangy red sauce';
        },
        createCrust: function() {
            return 'thin and crispy';
        }
    });
};

// Try it out!
var californiaIngredients = Ingredients.createCaliforniaStyle();
console.log(californiaIngredients.createCrust()); // returns 'thin and crispy';