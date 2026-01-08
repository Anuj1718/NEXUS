const restaurant = [];
const images = ["First","second","third","fourth","fifth","sixth","seventh",'Eigth',"nine","tenth"]
const rest_name = ["The Gourmet Haven",
  "Spice Symphony",
  "Urban Bites",
  "Farm to Table",
  "Ocean Delights",
  "Fusion Fiesta",
  "The Cozy Corner",
  "Sunset Grill",
  "The Green Plate",
  "Golden Wok",
  "Savory Street",
  "Pasta Paradise",
  "Burger Bliss",
  "Sushi Spot",
  "Mediterranean Magic",
  "The Rustic Table",
  "Bistro Bliss",
  "Street Eats",
  "The Chocolate Box",
  "Breakfast Club"];
  const foodTypes = [
    "Italian",
    "Chinese",
    "Mexican",
    "Indian",
    "Japanese",
    "Mediterranean",
    "Thai",
    "American",
    "French",
    "Korean"
  ];
  const delhiLocations = [
    "Connaught Place",
    "Chandni Chowk",
    "Hauz Khas Village",
    "Saket",
    "Karol Bagh",
    "Lajpat Nagar",
    "Rajouri Garden",
    "Khan Market",
    "Vasant Kunj",
    "Dwarka"
  ];

for(let i=0;i<100;i++){
    
    const obj = {};
    obj["image"] = images[Math.floor(Math.random()*10)]; // first to tenth
    obj["name"] = rest_name[Math.floor(Math.random()*20)]; // 20 names
    obj['rating'] = (Math.random() * 4 + 1).toFixed(1); // 1.0 to 5.0
    obj["food_type"] = foodTypes[Math.floor(Math.random()*10)]; // 10 types
    obj["Price_for_two"] = Math.floor(Math.random()*2401+100); // 100 to 2500
    obj["location"] =  delhiLocations[Math.floor(Math.random()*10)]; // 10 locations
    obj["Distance_from_Customer_house"] = (Math.random()*10+1).toFixed(1); // 1.0 to 10.0 km
    obj["offers"] = Math.floor(Math.random()*30); // 0 to 30 %
    obj["alcholol"] = Math.random() > 0.7; // 30% chance true
    obj["Restaurant_open_time"] = Math.floor(Math.random()*24); // 0 to 23 hours
    obj["Restaurant_close_time"] =  (obj["Restaurant_open_time"]+12)%24; // open + 12 hours


    restaurant.push(obj);
}

// console.log(restaurant);

//need to convert array into JSON format, why? reason: JSON is lightweight data-interchange format 

// Array convert into JSON (Homework);
//to do it
// JSON.stringify(restaurant);
// JSON.parse(restaurant);
const restaurantJSON = JSON.stringify(restaurant);
console.log(restaurantJSON);

//already we have JSON data in arrayDB.json file