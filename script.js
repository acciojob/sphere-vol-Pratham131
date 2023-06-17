function volume_sphere() {
    //Write your code here
	const radius = document.getElementById("radius").value;
	const volume = (4/3) * Math.PI * Math.pow(radius, 3);

	document.getElementById("volume").value = volume
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
