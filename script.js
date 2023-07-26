const radius = document.getElementById("radius");
const output = document.getElementById("volume")

function volume_sphere() {
    //Write your code here
	const radi = parseInt(radius.value)

  if (isNaN(radi) || radi <= 0) {
    // alert("Please enter a valid positive number for the radius.");
    return false;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radi, 3);
  output.textContent = volume;
	return false;

   
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
