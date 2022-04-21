
// Write a JavaScript program to compute the sum and product of an array of integers. 
let numbers = [1, 2, 3, 4, 5],
    sum = 0,
    product = 1,
    i=0 ;
for (i = 0; i < numbers.length; i++) 
   {
    sum     = sum+numbers[i];
    product = product* numbers[i];
    }
console.log('Sum :'+ sum + ' Product :' + product);




// Write a JavaScript program to find duplicate values in a JavaScript array.
function findDuplicate(arr) {
    const result = arr.filter((value, index, array) =>array.indexOf(value) !== index);
    return result;
}

console.log(findDuplicate([ -2, 2, -2, 5, 4, 5]))



// Write a JavaScript function to merge two arrays and removes all duplicates elements
function mergenduplicate(arr1, arr2){
    let merge = [...arr1, ...arr2];
   
      let duplicate = [...new Set(merge)];
   
        console.log(duplicate);
    }
   
    const array1 = [7,4,3,7];
    const array2 = [7,2,0,1,4]
    mergenduplicate (array1, array2);



    // Write a JavaScript function to find an array contains a specific element.
    let contains=(arr, element) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                return true;
            }
        }
        return false;
    }
    arr = [2, 5, 9, 6,"sushmi"];
    console.log(contains(arr, "sushmi"));



    // 7) Javascript print candidates with age only above 18(Create array of Objects of your choice containing atleast 20 candidates)

    let eligible=[
        {name:'sam',age:18},
        {name:'sundar',age:15},
        { name:'joe',age:21},
        {name:'ben',age:19},
        {name:'richie',age:25},
        {name:'sujo',age:14},
        {name:'sharon',age:28},
        {name:'ziva',age:26},
        {name:'shyilla',age:27},
        {name:'jayden',age:11},
        {name:'jemmi',age:19},
    ]
        let newall=eligible.filter((vote)=>{
        return vote.age >= 18;        })
        console.log(newall)



        // 8) Given a string reverse each word in a string.
        let reverse=(str)=>{
            {

                return str.split('') .reverse(''). join('') ;
            }
            }
            
            console.log(reverse("Welcome to this Javascript Guide"));



            // 9)  JavaScript Program to Append an Object to An Array.
            function pushobj(arr ,obj){
                arr.push(obj);
                console.log(arr);
            }
            let array=[1,2,3];
            let object={name:Sushmi, hometown:nilgiris};
            pushobj(array,object);



            // ) For a given 3 digit number, find whether it is armstrong number or not. An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. Return "Yes" if it is a armstrong number else return "No".


            let amstrong=0;
            const number=370;
            let temp=number;
            while(temp>0){
                let remainder=temp%10;
                amstrong = amstrong + remainder * remainder*remainder;
                temp=parseInt(temp/10);
            }
            if(amstrong == number)
            {
                console.log('Yes');
            }
            else{
                console.log('No');
            }



            let a = [5,3,6, 7],
              count = 10,
             missing = []

            for (let i = 1; i <= count; i++) {
            if (a.indexOf(i) === -1) {
              missing.push(i)
         }
      }
             console.log(missing)


    //  1) Write a program to find, given number is prime number or not

            let test_prime=(number)=>
             {
                 for(let i = 2; i < number; i++)
                 {
                   if(number % i === 0)
                   {
                     return 'not a prime number';
                   }
                 }
                 return 'prime number';  
               }
             console.log(test_prime(23));


    //  2) JavaScript Program to Convert the First Letter of a String into UpperCase

             const str = 'john';
             const newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
             console.log( newStr);


             
     //  4) Write a program to find, given string is a palindrome or not.
        
                let checkPalindrome=(string)=> {

                let len = string.length;

                  for (let i = 0; i < len / 2; i++) {
                  if (string[i] !== string[len - 1 - i]) {
                      
                   return 'Its not a palindrome';
                }
              }
                   return 'Its a palindrome';
             }
               console.log(checkPalindrome('madam'));

            //    ) Given an array Arr of size N, print second largest element from an array.

               function print2largest(arr, arr_size) {
                let i;
                let largest = second = -2454635434;
           
                // There should be atleast two elements
                if (arr_size < 2) {
                   console.log(" Invalid Input ");
                    return;
                }
           
                // finding the largest element
                for (i = 0;i<arr_size;i++){
                    if (arr[i]>largest){
                        largest = arr[i];
                    }
                }
                 for (i = 0 ;i<arr_size;i++){
                    if (arr[i]>second && arr[i]<largest){
                        second = arr[i];
                    }
                }
          
                if (second == -2454635434){
                     
               /* console.log("There is no second largest element<br>");
                }
                else{ */
               console.log("The second largest element is " + second);
                        return;
                    }
                    }
            let arr= [ 12, 35, 1, 10, 34, 1 ];
            let n = arr.length;
            print2largest(arr, n);