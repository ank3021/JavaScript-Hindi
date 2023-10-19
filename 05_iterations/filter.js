//filter is a function that takes an array and a function as arguments.
//The function used in filter method is called predicate function and consists of boolean condition.
//It is used to iterate over the array elements and returns the array consisting the elements for which the function evaluates to true.
//It returns a new array.


let arr = [1,2,3,4,5,6,7,8,9,10];

let odd = arr.filter( (element) => {
    if (element % 2 != 0)
    {
        return element;
    }
});
console.log(odd);


let even = arr.filter( (element) => element % 2 == 0); //Since, no curly braces are present, so implicit return is used.
console.log(even);


//practice

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const fiction = books.filter( (element) => element.genre === 'Fiction'); //Implicit return
console.log(fiction);


const non_fiction = books.filter( (element) => {
    if (element.genre === 'Non-Fiction')
    {
        return element; //Explicit return
    }
});
console.log(non_fiction);


const myfav = books.filter( (element) => element.genre === 'History' && element.edition === 2007);
console.log(myfav);

