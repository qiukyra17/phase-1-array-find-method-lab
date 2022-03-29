// code your solution here
// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//   ]

// function superbowlWin(record){
//     for(const element of record){
//         if (element.result === "W"){
//             return element.year;
//         }
//     }
// }

function superbowlWin(record){
    // let win = record.find(elem => elem.result === "W")
    let theWin = record.find(record => record.result ==="W");
    if (theWin) {return theWin.year;}
}