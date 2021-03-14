function feetToMile (feet){
    var mile=feet/5280;
    return mile;
}
var input=5280;
var result=feetToMile(input)
console.log(result);



function woodCalculator([chair,table,bed]){
    var feet1=1*chair;
    var feet2=3*table;
    var feet3=5*bed;
    var sum=feet1+feet2+feet3;
return sum;

}
var input=[2,2,2];
var total=woodCalculator(input);
console.log(total);




function brickCalculator(floor){
    
        if( floor<=10){
           var brick=  floor*15*1000;

        }
        else if( floor<=20){
            var brick=(10*15+(floor-10)*12)*1000;

        }
        else{
            var brick=  (10*15+10*12+(floor-20)*10)*1000;
        }
        return brick;
    
}
var input=20;
var result=brickCalculator(input);
console.log(result);






    function tinyFriend(nam){

    
    var min=nam[0];
    for(var i=0;i<nam.length;i++){
        var element=nam[i];
      if( nam[i].length<nam[0].length){
          
          min=element;}
       
    }
    return min;
}
         
     var input=['mou','arisha'];
     var result=tinyFriend(input);
     console.log(result);
      



    
    

