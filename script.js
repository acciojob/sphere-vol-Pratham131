function volume_sphere() {
    //Write your code here
	const radius = document.getElementById("radius").value;

	// Check if the radius is a valid number
    if (isNaN(radius)) {
        alert("Please enter a valid number for the radius.");
        return;
    }
	
	let volume = (4/3) * Math.PI * Math.pow(radius, 3);

	document.getElementById("volume").value = volume.toFixed(2);

	// var radius = parseFloat(document.getElementById("radius").value);

    
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
