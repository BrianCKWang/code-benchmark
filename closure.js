var a = 10;

function outer(){
  var b = 20;
  console.log('does a exist? a is ', a);
  console.log('does a exist? b is ', b);

  function inner(){
    var c = 30;
    console.log('does a exist in inner? a is ', a);
    console.log('does a exist in inner? b is ', b);
    console.log('a + b is ', a+b);
    return c;
  }

  // console.log('is c available in outer? answer is ', c);

  return inner();
}

console.log('calling the outer function returns ', outer());