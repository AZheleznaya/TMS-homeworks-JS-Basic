// Normal level
// Task 1

let x = 20
let y = 58
let z = 42

console.log(x+y+z)

// Task 2

let secondsInMinute = 60
let minutesInHour = 60
let hoursInDay = 24
let daysInYear = 365

let ageInSeconds = secondsInMinute * minutesInHour * hoursInDay * daysInYear

let myAgeInSeconds = ageInSeconds * 23
console.log(myAgeInSeconds)

// Task 3

let count = 42
let userName = '42'

// 1 option
let countAsString = String(count)
let userNameAsNumber = Number(userName)

console.log(countAsString, userNameAsNumber)

// 2 option
let countToString = "" + count
let userNameToNumber = +userName

console.log(countToString, userNameToNumber)

// Task 4

let a = 1
let b = 2
let c = "белых медведей"

let aAsString = String(a)
let bAsString = String(b)

console.log(aAsString + bAsString + " " + c)

// Task 5

let word1 = "доступ"
let word2 = "морпех"
let word3 = "наледь"
let word4 = "попрек"
let word5 = "рубило"

let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length

console.log(lengthWords)

// Task 6

let variableString = "Dog"
let variableBollean = true
let variableNumber = 2

console.log("`Variable: variableString have type: " + typeof(variableString) + "`")
console.log("`Variable: variableBollean have type: " + typeof(variableBollean) + "`")
console.log("`Variable: variableNumber have type: " + typeof(variableNumber) + "`")

// Task 7

let userNameRequest = prompt ("What your name?")
let userAgeRequest = +prompt ("How old are you?")

console.log(userNameRequest, userAgeRequest)

// Advanced level
// Task 1

let D = 4
let E = 3

D = D + E;
E = D - E;
D = D - E;

console.log(D, E)

// Task 2

let codeWord1 = "обернись"
let codeWord2 = "неужели"
let codeWord3 = "огурцы"
let codeWord4 = "липкие"
let codeWord5 = "?!"

let cipher = codeWord1.charAt(1) + codeWord2.charAt(1) + codeWord3.charAt(1) + codeWord4.charAt(1) + codeWord5.charAt(1)

console.log(cipher)