 function shouldAlertOwner(durationInWarehouse, temperature) {
	const CRITICAL_TEMPERATURE = 30; // °C
	const SECONDARY_TEMPERATURE = 25; // °C
	const CRITICAL_DURATION = 7; // Days

	return (
		(temperature > CRITICAL_TEMPERATURE &&
			durationInWarehouse > CRITICAL_DURATION) || (CRITICAL_DURATION < durationInWarehouse &&
		temperature > SECONDARY_TEMPERATURE)
	);

}

// Sample Tests

console.log(shouldAlertOwner(5, 26)); // Expected Output: false
console.log(shouldAlertOwner(8, 26)); // Expected Output: true
console.log(shouldAlertOwner(8, 32)); // Expected Output: true
