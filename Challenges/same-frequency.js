//write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits
//example 182, 281 => True

function sameFrequency(num1, num2) {
    let number1 = num1.toString()
    let number2 = num2.toString()
    if(number1.length !== number2.length){
        return false
    }
    
    let counter = {}

    for (const num of number1) {
        counter[num] = (counter[num] || 0) + 1
    }

    for(const num of number2) {
        if(!counter[num]) return false
        counter[num] --
    }
    return true
}

sameFrequency(87200001, 28700001) //True