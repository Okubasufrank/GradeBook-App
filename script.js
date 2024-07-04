function getAverage(scores){
    let total = 0;
    
    //loop through the array and sum all the scores
    for (let i = 0; i < scores.length; i++){
        total += scores[i];
    }

    // calculate avareage
    const average = total / scores.length;

    return average;
}

function getGrade(score){
    let grade;

    if (score === 100){
        grade = 'A++'
    }else if(score >= 90 && score < 100){
        grade = 'A';
    }    


}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));