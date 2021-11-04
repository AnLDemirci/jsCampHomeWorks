function findPrime(...numbers) {
    let check;
    for (let i = 0; i < numbers.length; i++) {
        check=true;
        for (let j = 2; j <= numbers[i]/2; j++) {
            if(numbers[i]%j == 0){
                console.log(numbers[i] + " sayısı asal değildir.")
                check=false
                break
            }
        }
        if(check==true){
            console.log(numbers[i] + " sayısı asaldır.")
        }
    }
}

findPrime(10,20,9,7,6,104,101,97,21,23,2,3)

console.log("----------------------------------------Finish----------------------------------------")

function friendNumbers(...numbers) {
    let total=0
    let [num1,num2] = numbers
    for (let i = 1; i <= num1/2; i++) {
        if(num1%i==0){
            total+=i;
        }
    }
    if(total!=num2){
        console.log(num1 + " ve "+num2 + " sayıları arkadaş sayılar değildir.")
    }
    else {
        total=0
        for (let i = 1; i <= num2/2; i++) {
            if(num2%i==0){
                total+=i;
            }
        }
        if(total==num1){
            console.log(num1 + " ve "+num2 + " sayıları arkadaş sayılardır.")
        }
        else{
            console.log(num1 + " ve "+num2 + " sayıları arkadaş sayılar değildir.")
        }
    }
}

friendNumbers(220,284)
friendNumbers(221,285)
console.log("----------------------------------------Finish----------------------------------------")

function perfectNumber(num) {
    let total=0
    for (let i = 1; i <= num/2; i++) {
        if(num%i==0){
            total+=i
        }
    }
    if(total==num){
        console.log(num+" sayısı mükemmel sayıdır.")
    }
}

function perfectNumberController() {
    for (let i = 1; i < 1000; i++) {
        perfectNumber(i)
    }
}
perfectNumberController()
console.log("----------------------------------------Finish----------------------------------------")

function isPrime(...numbers) {
    let check;
    for (let i = 0; i < numbers.length; i++) {
        check=true;
        for (let j = 2; j <= numbers[i]/2; j++) {
            if(numbers[i]%j == 0){
                check=false
                break
            }
        }
        if(check==true){
            console.log(numbers[i] + " sayısı asaldır.")
        }
    }
}

function isPrimeController() {
    for (let i = 2; i < 1000; i++) {
        isPrime(i)
    }
}
isPrimeController()
console.log("----------------------------------------Finish----------------------------------------")
