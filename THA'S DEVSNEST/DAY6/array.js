//araay assignment

//1

var is_array = function(input) {
    return Array.isArray(input);

};
    console.log(is_array('w3resource'));
    console.log(is_array([1,2,4,0]));
    
    //2

    var array_Clone = function(array) {
        return array.slice(0);
           };
       console.log(array_Clone([1, 2, 4, 0]));
       console.log(array_Clone([1, 2, [4, 0]]));

    //3

    var first =  function(array, n) {
        if (array == null) 
        return void 0;
      if (n == null) 
        return array[0];
      if (n < 0)
        return [];
      return array.slice(0, n);
    };
  
  console.log(first([7, 9, 0, -2]));
  console.log(first([],3));
  console.log(first([7, 9, 0, -2],3));
  console.log(first([7, 9, 0, -2],6));
  console.log(first([7, 9, 0, -2],-3));

  //4

  myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

//5

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostfreq = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mostfreq<m)
                {
                  mostfreq=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mostfreq +" times ) ") ;



  
  
    
    
