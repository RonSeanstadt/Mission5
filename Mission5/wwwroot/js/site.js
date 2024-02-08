// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Function for the calculateTotal button, that calculates and outputs the total based off the hours and rate
$("#btnCalcTotal").click(function () {
    var hoursInput = $("#hours").val();
    var hourlyRateInput = $("#hourlyRate").val();

    var hours = parseFloat(hoursInput);
    var hourlyRate = parseFloat(hourlyRateInput);

    // Validation to ensure positive number for hours
    if (isNaN(hours) || hours < 0) {
        alert("Please enter a valid positive number for the hours.");
        return;
    }

    // Calculate total
    var total = hours * hourlyRate;

    // Display total
    $("#total").val(total.toFixed(2));
})
