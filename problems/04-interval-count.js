/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in 
milliseconds, and an amount. The function should set an interval with 
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/
function intervalCount(callback, delay, amount) {
  let count = 0; // Initialize a count variable to keep track of callback executions
  
  const intervalId = setInterval(() => {
    callback(); // Execute the callback
    
    count++; // Increment the count
    
    // Check if the callback has been executed 'amount' number of times
    if (count === amount) {
      clearInterval(intervalId); // Clear the interval if the count reaches 'amount'
    }
  }, delay);
}



intervalCount(function() {
  console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}