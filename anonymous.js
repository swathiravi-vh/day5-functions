let arrayNumber = [1 , 2 , 3, 4, 5]
//1.print odd number in an array
let result = (function(arrayNumber){
    return (arrayNumber.filter((item) =>{
        return item %2!==0
    }))
})(arrayNumber);

console.log("print all the odd numbers in an array:" +result)

//2.Convert all the strings to title caps in a string array
let string =['swathi', 'is', 'a', 'smart', 'developer']

let resultString = (function (string) {

    return (string.map((item) => {

        return item.toUpperCase()

    }))
})(string);

console.log("All upper case string in an array: " + resultString)

//3.Sum of all numbers in an array
 let resultSum = (function(arrayNumber){
    return (arrayNumber.reduce((currentTotal,item) =>{
        return currentTotal+item
    },0))
})(arrayNumber);
console.log("sum of all numbers in an array:" +resultSum)

//4.Return all the prime numbers in an array
let resultPrime = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }

        return true

    }))
})(arrayNumber);

console.log("Prime numbers in an array: " + resultPrime)

//5.Return all the palindromes in an array

let resultPallindromeArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        let temp = item + ""

        if ((temp.split('').reverse().join('')) === item + "")
            return true

        return false

    }))
})(arrayNumber);

console.log("Pallindrome numbers in an array: " + resultPallindromeArray)

//6.Return median of two sorted arrays of same size
let ar1 = [1, 2, 3, 4, 5, 8, 10]
let ar2 = [8, 9, 10, 12, 16]

let resultMedian = function (ar1, ar2) {

    let result = []

    let lenAr1 = ar1.length

    let lenAr2 = ar2.length

    if (lenAr1 % 2 === 0) {

        console.log("Median of array 1: " + ar1[lenAr1 / 2])

    } else {

        console.log("Median of array 1: " + ar1[(lenAr1 + 1) / 2])
    }

    if (lenAr2 % 2 === 0) {

        console.log("Median of array 2: " + ar2[lenAr2 / 2])

    } else {

        console.log("Median of array 2: " + ar2[(lenAr2 + 1) / 2])
    }

    return
}(ar1, ar2)

//7.Remove duplicates from an array
let arrayWithDup = [22, 22, 11, 10, 11, 56, 10, 1, 2, 6, 7, 56, 3, 9]

let resultArrayNoDup = ((arrayWithDup, index) => {

    return [...new Set(arrayWithDup)]

})(arrayWithDup)

console.log("Array without Duplicates " + resultArrayNoDup)

//8.Rotate an array by k times and return the rotated array

let arrforrotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotation, 3)

console.log("Array roatated k times: " + resultArrayShifted)


