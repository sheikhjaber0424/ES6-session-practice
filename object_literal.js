
//object literal

// example:1
function create(name, status) {
    return {
        name,
        status
    };
}

console.log(create('A','B'))



// example:2
let name = 'Computer',
    status = 'On';

let machine = {
   name,
   status
};

console.log(machine)

