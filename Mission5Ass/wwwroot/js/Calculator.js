$(document).ready(function () {
    $("#calculateButton").click(function () {
        // Get the number of hours entered by the user
        var hours = $("#hours").val();

        // Validate that the input is a positive number
        if (hours <= 0 || isNaN(hours)) {
            $("#hoursError").show();
            $("#total").val("");
            return;
        } else {
            $("#hoursError").hide();
        }

        // Define the charge per hour
        var chargePerHour = 499; // $499 per hour

        // Calculate the total cost
        var total = hours * chargePerHour;

        // Display the total cost in the output box
        $("#total").val("$" + total.toFixed(2));
    });
});
