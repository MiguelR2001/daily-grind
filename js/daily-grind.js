/*

    Here are the items we believe we need to produce for each day's coffee

    pic - image scr
    alt - the alt tag for the image
    color - color to match image
    desc - description of the coffee
    name - name of the coffee
    day - day of the week


*/

let myDate = new Date();

let today = myDate.getDay();

//today =3;

switch(today){

    case 0:
        today = "Sunday";
    break;

    case 1:
        today = "Monday";
    break;

    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
    break;

    case 4:
        today = "Thursday";
    break;

    case 5:
        today = "Friday";
    break;

    case 6:
        today = "Saturday";
    break;

    default:
        today = "Not sure what day it is!";
}

coffee = {
    name: "Bubble Tea",
    color: "pink",
    pic: "daily-grind\images\bubble-tea.jpg",
    alt: "A picture of a bubble tea",
    day: "Wednesday",
    desc: `I like me some bubble tea!`
}

//alert(today);
console.log(coffee);
