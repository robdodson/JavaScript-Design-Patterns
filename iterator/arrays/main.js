// Examples inspired by Stoyan Stefanov and his
// amazing book JavaScript Patterns
// http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752

"use strict";

var iterator = (function() {

  var index = 0,
      data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      length = data.length;

  return {
      next: function() {
          var element;
          if (!this.hasNext()) {
              return null;
          }
          element = data[index];
          index += 3;
          return element;
      },
      hasNext: function() {
          return index < length;
      },
      rewind: function() {
          index = 0;
          return data[index];
      },
      current: function() {
          return data[index];
      }
  };

}());