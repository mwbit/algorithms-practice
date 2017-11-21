function solution(num) {

    let number = num
    let counter = 0
    let max = 0
    let digit =0
    while(number > 0) {
        digit = number % 2;

        if(digit === 1) {
            if(counter > max) {
                max = counter
            }
            counter = 0
        } else if(counter >= 0) {
            counter++
        }

        number = parseInt(number / 2)
    }
    return max
}

console.log(solution(1041))
