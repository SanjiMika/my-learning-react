/*
function bike() {
    console.log(this.name);
}

const name = "Ninja";
let obj1 = { name: "Pulsar", bike: bike };
let obj2 = { name: "Gixxer", bike: bike };

// To understand this keyword, only we need to know from where the function is called, does not matter how and where function is defined.

bike();           // "Ninja"
obj1.bike();      // "Pulsar"
obj2.bike();      // "Gixxer"
*/

/*
let obj1 = {
    name: "Pulsar",
    bike: function() {
        console.log(this.name);
    }
};
let obj2 = { name: "Gixxer", bike: obj1.bike };
var name = "Ninja";
let bike = obj1.bike;

export default function () {
    // bike();           // "Ninja"
    obj1.bike();      // "Pulsar"
    obj2.bike();      // "Gixxer"
};
*/
