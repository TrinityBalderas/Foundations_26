function tossCoin() {
    //a ? b : c
    //return Math.random() > 0.5 ? "heads" : "tails";
    if (Math.random() > 0.5) {
        return "heads"
    } else {
        return "tails"
    }
}

function fiveHeadsASync() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while ( headsCount < 5) {
            attempts++
            let result = tossCoin()
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount === 5) {
                //output is resolve
                resolve(`yay lucky you it took ${attempts} tries`)
            }
            if (attempts > 5) {
                reject(`coin was flipped more than ${attempts - 1} times without 5 heads`)
            }
        }
    })
}

console.log("hello lukas");
fiveHeadsASync().then( (response) => {
    console.log(response);
}).catch( (error) => {
    console.log(error);
})
console.log("goodbye lukas");

console.log( "This is run after the fiveHeadsSync function completes" );

