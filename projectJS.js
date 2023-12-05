// JS Code

// My Events
document.getElementById("generateButton").addEventListener('click', myWindow);
document.getElementById("clearButton").addEventListener('click', clearScreen);
document.getElementById("printButton").addEventListener('click', printPage);

// The Function to open the new window with the user input
function myWindow() {
    var visitorName = document.getElementById("name").value;
    var visitorGoal = document.getElementById("goal").value;

    // Check if any of the fields are empty
    if (visitorName === "" || visitorGoal === "") {
        alert("Please fill out all the form fields before generating the meal plan.");
        return;
    }

    var myText = "<html>\n<head>\n<title>Meal Plan:</title>\n</head>\n<body>\n";
    myText += "Hello " + visitorName + ", here is your meal plan!<br>";
    myText += "Plan: " + visitorGoal + "<br><br>";
    myText += "</body>\n</html>";

    var flyWindow = window.open('about:blank', 'myPop', 'width=400,height=200,left=200,top=200');
    flyWindow.document.write(myText);
}

// My functions to clear the words or print the website

function clearScreen() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("goal").value = "";
}

function printPage() {
    window.print();
}
