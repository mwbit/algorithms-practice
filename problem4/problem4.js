function solution(X, Y, D) {
    let distance = Y - X
    if ((distance % D) === 0){
        return distance / D
    }else{
        return (parseInt(distance / D) + 1)
    }
}