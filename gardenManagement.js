const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

if (temperature >80) {
    console.log("watering on");
} else {
    console.log("watering off");
}

if (timeOfDay === "evening" || timeOfDay === "night") {
    console.log("lights on");
} else {
    console.log("lights off");
}

while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture);
}

if (soilMoisture=== 40) {
    console.log(soilMoisture);
}

