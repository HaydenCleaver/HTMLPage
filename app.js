let userColor = prompt("What's your favorite color?");
    console.log(userColor);

if (userColor !==""){
    document.body.style.backgroundColor = userColor;
    }
    
let userFood = prompt("What's your favorite food?");
console.log(userFood);

if (userFood == "rice" || "Rice"){
    document.write(" I love rice too! ");
} else if (userFood == "brussel sprouts" || "Brussel Sprouts") {
    document.write(" Gross.");
} else {
    document.write(userFood + " is great! But it's not as good as rice.\n");
}

let userDrink = prompt("How about a favorite drink?");

if (userDrink == "Tea" || "tea"){
    document.write("Hey, that's my number one drink too!");
} else {
    document.write(userDrink + ", nice! I'm more of a tea kinda guy myself.");
}

document.write(" Well, here are some of my regular meals:");

