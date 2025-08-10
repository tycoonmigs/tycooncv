function calculateAllocation() {
    let amount = document.getElementById("amountInput").value;
    let errorMessage = document.getElementById("errorMessage");

    // Check if input is empty or not a number
    if (amount === "" || isNaN(amount)) {
        errorMessage.textContent = "Please enter a valid number.";
        clearBoxes();
        return;
    } else {
        errorMessage.textContent = ""; // Clear error message
    }

    amount = parseFloat(amount); // Convert to number

    // Calculate Allocations
    document.getElementById("health").textContent = "₱" + (amount * 0.25).toFixed(2);
    document.getElementById("daily").textContent = "₱" + (amount * 0.25).toFixed(2);
    document.getElementById("future").textContent = "₱" + (amount * 0.10).toFixed(2);
    document.getElementById("luxury").textContent = "₱" + (amount * 0.20).toFixed(2);
    document.getElementById("emergency").textContent = "₱" + (amount * 0.15).toFixed(2);
    document.getElementById("investment").textContent = "₱" + (amount * 0.05).toFixed(2);
}

// Clear all boxes if there's an error
function clearBoxes() {
    document.getElementById("health").textContent = "";
    document.getElementById("daily").textContent = "";
    document.getElementById("future").textContent = "";
    document.getElementById("luxury").textContent = "";
    document.getElementById("emergency").textContent = "";
    document.getElementById("investment").textContent = "";
}
