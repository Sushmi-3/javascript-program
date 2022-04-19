
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

    let eligible=[{
        name:'sam',age:18
        },
        {
        name:'sundar',age:15
        },
        {
        name:'joe',age:21
        },
        {
        name:'ben',age:19
        },
        {
        name:'richie',age:25
        },
        {
        name:'sujo',age:14
        },]
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





