function getAverage(scores){
    let total = 0;
    
    //loop through the array and sum all the scores
    for (let i = 0; i < scores.length; i++){
        total += scores[i];
    }

    // calculate avareage
    const average = total / AuthenticatorResponse.length;

    return average;
}

console.log(([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]))