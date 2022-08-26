const lado1 = document.getElementById("lado1");
const lado2 = document.getElementById("lado2");
const lado3 = document.getElementById("lado3");
const tipotriangulo = document.getElementById("tipo");
const btn = document.querySelector("#calcular")
const medida1 = document.getElementById("medida1")
const medida2 = document.getElementById("medida2")
const medida3 = document.getElementById("medida3")

// Identificar não preenchimento de campo

lado1.onblur = () => {
		if (lado1.value == "") {
    		medida1.style = "color: #ff0000";
    } else {
    		medida1.style = "color: #000000";
    }
}

lado2.onblur = () => {
		if (lado2.value == "") {
    		medida2.style = "color: #ff0000";
    } else {
    		medida2.style = "color: #000000";
    }
}

lado3.onblur = () => {
		if (lado3.value == "") {
    		medida3.style = "color: #ff0000";
    } else {
    		medida3.style = "color: #000000";
    }
}

// Cálculo

btn.onclick = () => {
	if (lado1.value == ""){
  	lado1.focus();
  }else if (lado2.value == "") {
    	lado2.focus();
  } else if (lado3.value == ""){
    	lado3.focus();
  } else {
  if (lado1.value == lado2.value == lado3.value) {  
tipo.value = "Equilátero" }

else if (lado1.value != lado2.value && lado2.value != lado3.value && lado1.value != lado3.value) {
  tipo.value = "Escaleno" }

else {
 tipo.value = "Isósceles"
  }
}
}
