//❓❓ LAB QUESTION 3, 4, 5:
let myCat = {
    name: "Lucy",
    age: 4,
    speak: function(){
        console.log("🐈 Meow");
    }
}

let myDog = {
    name: "Stewart",
    age: 9,
    speak: function(){
        console.log("🐕 Woof!");
    }
}

let myFish = {
    name: "Bubbles",
    age: 1
}

//❓❓ LAB QUESTION 6, 7, 8:
function introduce (myPet) { 
 console.log("Speak," + myCat.name + myDog.name + myFish.name );
 myCat.speak();
 myDog.speak();
 myFish.speak();
 introduce(myCat);
 introduce (myDog);
 introduce (myFish);
}