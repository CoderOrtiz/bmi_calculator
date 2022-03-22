function bmiCalculator() {
    user = prompt("Whats your name?");
    friend = prompt("Whats your friend's name?");

    userMass = prompt("Whats your weight in pounds?");
    userHeight = prompt("Whats your height in inches?");

    friendMass = prompt("Whats your friend's weight in pounds?");
    friendHeight = prompt("Whats your friend's height in inches?");

    // Imperial BMI Calculation
    userBMI = (userMass / (userHeight ** 2)) * 703;
    friendBMI = (friendMass / (friendHeight ** 2)) * 703;

    if (userBMI > friendBMI) {
        document.querySelector("h3").textContent = `${user} has a higher BMI of ${Math.round(userBMI)}`;
    } else if (userBMI < friendBMI) {
        document.querySelector("h3").textContent = `${friend} has a higher BMI of ${Math.round(friendBMI)}`;
    } else {
        `You both have a BMI of ${Math.round(userBMI)}`;
    }
}




