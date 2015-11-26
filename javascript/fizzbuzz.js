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

$(".numbers").append("<p>Below are the numbers...</p>");

 var fizzBuzz = [];
  
    for (var n = 1; n <= 100; n++) {
      fizzBuzz.push(n);
      //console.log(fizzBuzz);
    }
  
  //console.log(fizzBuzz);
  
  fizzBuzz = fizzBuzz.map(evaluate);
  //console.log(fizzBuzz);
  function PrintValue (value) {
    $(".numbers").append("<p>" + value + "</p>");
  }

  fizzBuzz.forEach(PrintValue);
  
});