function tossCoin() {
  let randomNumber = Math.random()
  // console.log(`${randomNumber} Random`);
  return randomNumber > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//       let headsCount = 0;
//       let attempts = 0;
//       while(headsCount < 5) {
//           attempts++;
//           let result = tossCoin();
//           console.log(`${result} was flipped`);
//           if(result === "heads") {
//               headsCount++;
//           } else {
//               headsCount = 0;
//           }
//       }
//       return `It took ${attempts} tries to flip five "heads"`;
//   }
//   console.log( fiveHeadsSync() );
//   console.log( "This is run after the fiveHeadsSync function completes" );

function fiveHeads() {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    let maxAttempts = 100;
    while (headsCount < 5 && attempts <= 100) {
      attempts++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    if (headsCount === 5 && attempts <= 100) {
      resolve(`It took ${attempts} tries to flip five "heads"1`)
    }
    else {
      reject(`Attempts have exceeded ${maxAttempts} flips.`)
    }
  });
}
fiveHeads()
  .then(res => console.log(res))
  .catch(err => console.log(err));
console.log("When does this run now?");
