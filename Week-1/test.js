var current = 'def';
function test(func){
  initLog(func.toString().split('\n')[0])
  assertEqual('Horizontal 1 3x3',func([1,1,1,0,0,0,0,0,0]),1);
  assertEqual('Vertical 3x3',func([0,0,1,0,0,1,0,0,1]),1);
  assertEqual('Diagonal 1 3x3',func([0,0,1,0,1,0,1,0,0]),1);
  assertEqual('Diagonal 2 3x3',func([1,0,0,0,1,0,0,0,1]),1);
  assertEqual('Diagonal 3 3x3',func([1,0,0,0,-1,0,0,0,1]),0);
  assertEqual('Horizontal 2 3x3',func([1,0,0,-1,-1,-1,0,0,1]),-1);
  assertEqual('Stalemate 3x3',func([-1, 1,-1
                                  ,  1, 1,-1,
                                    -1,-1, 1]),0);
  assertEqual('Horizontal 2x2',func([1,1,0,-1]),1);
  assertEqual('Vertical 2x2',func([1,0,1,-1]),1);
  assertEqual('Vertical 4x4',func([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]),1);
  assertEqual('Horizontal 4x4',func([1,0,0,0,-1,-1,-1,-1,1,0,0,0,1,0,0,0]),-1);
}
function assertEqual(name,val,value){
  if(val!==value)
    log(name,"Returned "+ val +"; expected "+value);
}
var logstring = ""
var logs={};
function log(key,str,obj){
  logs[obj||current][key] = str;
}
function initLog(obj){
  current = obj;
  logs[current]={};
}
function testSuite(arr){
  var score = [];
  for(var i = 0; i < arr.length; i++){
    var start = window.performance.now();
    for(var k = 0; k < 100;k++){
      test(arr[i]);
    }
    var end = window.performance.now();
    score[i] = end-start;
  }
  return score;
}