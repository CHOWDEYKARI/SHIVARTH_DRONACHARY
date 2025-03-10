class Phone{
    info(){
        console.log("I have an Apple Mobile");
    }
}
class pro extends Phone{
    features(){
        console.log("It is 13 pro max");
    }
}
class Dog extends pro{
    pet(){
        console.log("ABC is a owner of white Husky")
    }
}

let Apple = new pro();
Apple.info();
Apple.features();
let pet1 = new Dog();
pet1.pet();