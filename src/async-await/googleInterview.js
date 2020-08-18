function printString(string, callback) {
  setTimeout(
    () => {
      console.log(string);
      callback();
    },
    200 // 1s
  );
}
function printAllWithCallback() {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
}
//printAllWithCallback();

function printStringPromise(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, 200);
  });
}
function printAllWithPromise() {
  printStringPromise("A")
    .then(() => {
      return printStringPromise("B");
    })
    .then(() => {
      return printStringPromise("C");
    });
}
//printAllWithPromise();

const printAllWithAwait = async () => {
  await printStringPromise("A");
  await printStringPromise("B");
  await printStringPromise("C");
};
//printAllWithAwait();


async function printAllAZ() {
  let arr = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));

  for (let i=0; i<arr.length; i++) {
    await printStringPromise(arr[i]);
    console.log(i);
  }
}
printAllAZ();
