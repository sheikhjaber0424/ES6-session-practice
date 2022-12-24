
//Concise method

// example:1
let obj={
    first_name : 'ab',
    last_name : 'cd',
    
    func(){
        return this.first_name + " "+this.last_name;
    }
}

console.log(obj.func())


// example:2

let house = "matikata";
let location = "Dhaka";

let obj2={
    house,
    location,
    
    func(){
        return this.house + " "+this.location;
    }
}

console.log(obj2.func())


// example:3

let v1 = 1;
let v2 = 2;

let obj3={
    
    
    func(){
       console.log(v1);
       console.log(v2);
    }
}
obj3.func();



