"use strict";

function Sale(price) {
    this.price = price || 100;
}

Sale.prototype.getPrice = function() {
    return this.price;
};

Sale.prototype.setPrice = function(price) {
    this.price = price;
};

function usd(fn, context) {
    var price = fn.call(context);
    return "$" + price;
}

function decorate(dec, fn, context) {
    return function() {
        return dec.call(context, fn, context);
    };
}

var sale = new Sale(50);

// Decorate our getPrice method. We'll just add
// some extra dollar signs to the output.
sale.getPrice = decorate(usd, sale.getPrice, sale);
sale.getPrice = decorate(usd, sale.getPrice, sale);
sale.getPrice = decorate(usd, sale.getPrice, sale);
console.log(sale.getPrice()); // output: $$$50

// Test to make sure other methods can still
// access the price in the correct context
sale.setPrice(100);
console.log(sale.getPrice()); // output: $$$100