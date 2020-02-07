function add (...nums) {
	let total = 0;
	for (const n of nums) {
		total += n;
	}
	return total;
}

function subtract (...nums) {
	let total = nums[0];
	for (const n of nums) {
		total -= n;
	}
	total += nums[0]
	return total;
}

function sum (...nums) {
	let total = 0;
	for (const n of nums) {
		total += n;
	}
	return total;	
}

function multiply (...nums) {
	let total = 0;
	for (const n of nums) {
		if (nums[n] === 0) {
			return 0;
		}
		else {
			for (const n of nums) {
				total *= n;
			}
		}
	}
	return total;	
}

function power(...nums) {
	let total = 0;
	for (const n of nums) {
		total ^= n;
	}
	return total;	
}

function factorial(...nums) {
	let total = 0;
	for (const n of nums) {
		total += n;
	}
	return total;	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}