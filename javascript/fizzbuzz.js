function evaluate(n) {
  
    if ((n % 5 === 0) && (n % 3 === 0)) { 
      return 'FizzBuzz';
    }
    else if (n % 3 === 0) {
      return 'Fizz';
    }
    else if (n % 5 === 0) { 
      return 'Buzz';
    }
    return n;
};


$(document).ready(function() {

  var numberInput = prompt("Enter a number", ""); 

  var fizzBuzz = [];
  
    for (n = parseInt(numberInput, 10); n >= 1; n--) {
      fizzBuzz.unshift(n);
    }
  
  fizzBuzz = fizzBuzz.map(evaluate);

  function PrintValue (value) {
    $(".numbers").append("<p>" + value + "</p>");
  }

  fizzBuzz.forEach(PrintValue);

});