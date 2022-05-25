let userFood = prompt("What's your favorite food?");
console.log(userFood);

if (userFood == "Rice"){
    document.write(" Hey, I love rice too!");
} else if (userFood == "Brussel Sprouts") {
    document.write(" Gross.");
} else {
    document.write(userFood + " is great! But it's not as good as rice.\n");
}

let userDrink = prompt("How about a favorite drink?");

if (userDrink == "Water"){
    document.write(" Hey, that's my number one drink too!");
} else {
    document.write("Nice! I'm more of a water kinda guy myself.");
}

document.write(" Well, here are some of my regular meals:");