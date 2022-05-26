function doYouBest() {
    return new Promise((resolve, reject) => {
        let a = 1 + 2;
        if (a == 2) resolve("Success")
        else reject("Fail");
    });
}

doYouBest().then((msj) => {
    console.log("Hey this is message " + msj);
}).catch((msj) => {
    console.log("Hey this is messsage " + msj);
})


const oneVideoSave = new Promise((resolve, reject) => {
    resolve("One video is saved")
})

const towVideoSave = new Promise((resolve, reject) => {
    resolve("Tow videos are saved")
})

const threeVideoSave = new Promise((resolve, reject) => {
    resolve("Three videos are saved")
})

Promise.all([oneVideoSave, towVideoSave, threeVideoSave]).then((msj) => {
    console.log(msj)
}).catch((msj) => {
    console.log((msj) => {
        console.log(msj);
    })
});


Promise.race([oneVideoSave, towVideoSave, threeVideoSave]).then((msj) => {
    console.log(msj)
}).catch((msj) => {
    console.log((msj) => {
        console.log(msj);
    })
});


// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a == 2) resolve("Success")
//     else reject("Fail");
// })

// p.then((msj) => {
//     console.log("Hey this is message " + msj);
// }).catch((msj) => {
//     console.log("Hey this is messsage " + msj);
// })