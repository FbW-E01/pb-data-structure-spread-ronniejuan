// # Spread the Word

// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// * Once again create two arrays. Save all elements of both arrays to another variable. 

const euroCountries=["Portugal","Chipre","Malta"]
const asianCountries=["Palestina","Japan","Iran"]
const cloneme=[...euroCountries,... asianCountries]

console.log("task1",cloneme)


const arra1=["ron","bom","john"];
const arra2 =["rolling","can","yes"];
const clone =[...arra1, ...arra2];
console.log("task1.1",clone)



// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
 const asianCountriesCopy =[...asianCountries]
 asianCountries.push("Mongolia");
 console.log("task 2", asianCountries);
 


// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.


const numbers =[23,54,6453,77,575,3,9876]
const getLargestNumber =(x) =>Math.max(...x);
console.log("task 3.0", getLargestNumber(numbers));



const arrNum  = [1,3,5,76,98,108];
const biggestNum =Math.max(...arrNum);
console.log("Task3" ,biggestNum);

// function findnum (number){
// //    return  Math.max(number)
//    console.log("Task3",Math.max(...number))
// }
// findnum(arrNum)
// console.log("task3", findnum(34))




// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.

const arrNumb  = [1,3,5,76,98,108];
const biggestNumb =Math.min(... arrNum);
console.log("Task4" ,biggestNumb);





// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// const personita = {name: "John"}
// let personclone ={...personita}
// console.log(personclone)


 const person = {name: "John"}
 const job = {role: "Teacher"}

 let cloneperson = {...person}


 const finalobj = {...person, ...job}
 console.log("This is Final Object",finalobj);

 job.role = "musician"
 console.log("Task5" ,"We change the Job source",job)
 console.log("Task5.5" ,"this is the result of OBJ after Change the Job Source",finalobj)



// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
// * 5.3 Then change the values of the properties in the employee object.

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ??? false
// * isWhole(9, 2, 2, 5) ??? false

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!