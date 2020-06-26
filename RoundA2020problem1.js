const fs= require('fs');

const input = fs.readFileSync('./input.txt','utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
  })

let inputArray = input.split('\r\n')

let caseNumber = 0

const solveHouse = function(money,houseArr) {
    let numHouses = 0
    let i=0

    money = parseInt(money)
    console.log(money,houseArr)
    while (money >= houseArr[i]) {
        numHouses++
        money -= houseArr[i]
        i++
        
    }
    return numHouses
}

for (let i=2;i<inputArray.length;i+=2) {
    let dinero = inputArray[i-1].split(' ')[1]
    let houseArray = inputArray[i].split(' ')
    houseArray.sort(function(a,b) {return a-b})
    caseNumber ++ 

    
    console.log(`Case #${caseNumber}: ${solveHouse(dinero,houseArray)}`)
    
}