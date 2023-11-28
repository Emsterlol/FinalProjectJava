function generateMealPlan() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;

    // Validate email code
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Generate meal plan HTML NOT FINISHED
    const mealPlanHTML = `
        <h2>Weekly Meal Plan for ${name}</h2>
        <p>Email: ${email}</p>
        <p>Goal for the Week: ${goal}</p>
    `;

    const newWindow = window.open();
    newWindow.document.write(mealPlanHTML);
}
// Clear form code
function clearMealPlan() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('goal').value = '';
}

function isValidEmail(email) {
    // Email validation code
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}