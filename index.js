function theBeatlesPlay(musicians,instruments){
  var arr=[];
  for (var i=0;i<musicians.length;i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return arr
}

function johnLennonFacts(facts){
  var l = facts.length
  var i = 0
  while (i < l) {
    facts[i]+="!!!"
    i++
  }
  return facts;
}

function iLoveTheBeatles(n){
var arr =[];
do{
  arr.push(`I love the Beatles!`);
  n++
} while (n<15);
  return arr;
}
