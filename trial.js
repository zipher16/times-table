document.getElementById("submitButton").addEventListener("click", function () {
	const numberInput = document.getElementById("numberInput").value;
	const resultDisplay = document.getElementById("timesTableResult");

	// Validate the input
	if (isNaN(numberInput) || numberInput === "") {
		alert("Please enter a valid number.");
	} else {
		// Clear previous results
		resultDisplay.innerHTML = "";

		// Generate the times table and display it
		for (let i = 1; i <= 10; i++) {
			resultDisplay.innerHTML += `${numberInput} * ${i} = ${
				numberInput * i
			}<br>`;
		}
	}
});
