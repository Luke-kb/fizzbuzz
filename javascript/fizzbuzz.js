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
  
  // var n = parseInt(numberInput);
  // evaluate(n);

  var fizzBuzz = [];
  
    for (var n = parseInt(numberInput); n >= 1; n--) {
      fizzBuzz.push(n);
    }
  
  fizzBuzz = fizzBuzz.map(evaluate);

  function PrintValue (value) {
    $(".numbers").append("<p>" + value + "</p>");
  }

  fizzBuzz.forEach(PrintValue);

});