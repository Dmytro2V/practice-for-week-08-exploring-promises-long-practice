/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
console.log('----------phase1-----------');
function num1() {
    return 1;
}
async function num2() {
    return 2;
}
console.log('num1', num1());
console.log('num2', num2());
num2().then(result => console.log(result));

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here
async function waiting() {
    const value = await num2()
    console.log('----------phase2-----------');
    console.log('waiting', value);
}
waiting();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here

async function waitForMyPromise() {
    
    const promise = new Promise((resolve) =>{
        setTimeout(() => {
            resolve('done!!!')
        }, 1000)
    });
    const result = await promise;
    console.log('----------phase3-----------');
    console.log('my promise is', result);    
}
waitForMyPromise();


/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here

new Promise((resolve) => {    
    setTimeout(() => {
        resolve('done!');
    }, 1500)
    
}).then(r => {
        console.log('----------phase4-----------');
        console.log('then my other promise is', r)
    });
/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async function testWait() {
    
    await wait(2000)
    console.log('----------phase5-----------');
    console.log('waited 2 s');
})(); // test immediate exec



/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
const tryRandomPromise = (random) => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve(`random = ${Math.round(random * 1000)/100} - success!!!`);
    } else {
        reject(`random = ${Math.round(random * 1000)/100} - error`);
    }
});
wait(2000).then(() => console.log('----------phase6-----------'));
for (let i = 1; i < 10; i++) {
    const random = Math.random();
    wait(2000 + random * 1000)
        .then(() => tryRandomPromise(random))
        .then(result => console.log('random try #', i, result))
        .catch(error => console.error('random try #', i, error));
}

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
wait(3000).then(() => console.log('----------phase7-----------'));

const tryTryAgain = async(i) => {
    const random = Math.random();

    await wait(3000 + random * 1000);
    try {
        const result = await tryRandomPromise(random);
        console.log('random again #', i, result);
    } catch (error) {
        console.error('random again #', i, error);
    }
}

for (let i = 1; i < 10; i++) {
    tryTryAgain(i);
}
/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
(async () => {
    await wait(4000);
    console.log('----------phase8-----------');
    console.log('END OF PROGRAM');
    })()
