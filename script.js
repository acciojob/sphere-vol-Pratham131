function volume_sphere() {
    //Write your code here
	const radius = document.getElementById("radius").value;

    // if (isNaN(radius)) {
    //     alert("Please enter a valid number for the radius.");
    //     return;
    // }
	
	let volumeOfSphere = (4/3) * Math.PI * Math.pow(radius, 3);

	document.getElementById("volume").value = volumeOfSphere
		// .toFixed(2);
   
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
