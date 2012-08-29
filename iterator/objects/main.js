// Examples inspired by Stoyan Stefanov and his
// amazing book JavaScript Patterns
// http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752

"use strict";

var iterator = (function() {
  var data = { foo: 'foo', bar: 'bar', baz: 'baz' },
      keys = Object.keys(data),
      index = 0,
      length = keys.length;

  return {
      next: function() {
          var element;
          if (!this.hasNext()) {
              return null;
          }
          element = data[keys[index]];
          index++;
          return element;
      },
      hasNext: function() {
          return index < length;
      },
      rewind: function() {
          index = 0;
          return data[keys[index]];
      },
      current: function() {
          return data[keys[index]];
      }
  };
  
}());