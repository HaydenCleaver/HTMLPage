function colorAnswer(){
    
    let userColor = prompt("What's your favorite color?");
    console.log(userColor);
    
    while (userColor == ""){
        
        userColor = prompt("Invalid color! Please try again.");
    }

    document.body.style.backgroundColor = userColor;

    let fix = confirm("Did the color of the background change?")
};

function foodAnswer() {
    
    let userFood = prompt("What's your favorite food?");
    console.log(userFood);

    if (userFood == "rice" || userFood == "Rice"){
        document.write(" I love rice too! ");
    } else if (userFood == "brussel sprouts" || userFood =="Brussel Sprouts"){
        document.write(" Gross.");
    } else {
        document.write(userFood + " is great! But it's not as good as rice. ");
    }
};

function drinkAnswer(){
    
    let userDrink = prompt("How about a favorite drink?");

    if (userDrink == "Tea" || userDrink == "tea"){
    document.write("Hey, that's my number one drink too!");
    } else {
    document.write(userDrink + ", huh? Nice! I'm more of a tea kinda guy myself.");
    }

    document.write(" If you're curious, here are some of my regular meals and a few tips on how to make them better:");
};
