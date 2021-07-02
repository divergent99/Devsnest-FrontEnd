/*
 Q.1 Write a JavaScript function to check whether an `input` is an array or not
 Test Data :
 console.log(is_array('w3resource'));
 console.log(is_array([1, 2, 4, 0]));
 false
 True
*/
 var check_Array = function(input) {
    if (toString.call(input) == "[object Array]")
      return true;
    return false;   
      };
  console.log(check_Array('w3resource'));
  console.log(check_Array([1, 2, 4, 0]));

 /*Q.2 Write a JavaScript function to clone an array
 Test Data :
 console.log(array_Clone([1, 2, 4, 0]));
 console.log(array_Clone([1, 2, [4, 0]]));
 [1, 2, 4, 0]
 [1, 2, [4, 0]]
*/
 

 var Clone_array = function(arr) {
    return arr.slice(0);
       };
   console.log(Clone_array([1, 2, 4, 0]));
   console.log(Clone_array([1, 2, [4, 0]]));
   

  /*
  Q.3 Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
  Test Data :
  console.log(first([7, 9, 0, -2]));
  console.log(first([],3));
  console.log(first([7, 9, 0, -2],3));
  console.log(first([7, 9, 0, -2],6));
  console.log(first([7, 9, 0, -2],-3));
  Expected Output :
  7
  []
  [7, 9, 0]
  [7, 9, 0, -2]
  []
  */
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

/* 
Q.4 Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
 
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

/*
Q.5 Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/
var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var freq = 1;
var m = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (mf<m)
                {
                  freq=m; 
                  item = arr[i];
                }
        }
        m=0;
}
console.log(item + " ( " + freq +" times ) ") ;
