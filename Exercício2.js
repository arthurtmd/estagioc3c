const ax2 = document.getElementById("ax2");
const bx = document.getElementById("bx");
const c = document.getElementById("c");
const x1 = document.getElementById("x1");
const x2 = document.getElementById("x2");
const btn = document.querySelector("#calcular")
const campoax2 = document.getElementById("campoax2")
const campobx = document.getElementById("campobx")
const campox = document.getElementById("campox")

// Identificar não preenchimento de campo

ax2.onblur = () => {
		if (ax2.value == "" || ax2.value == "0") {
    		campoax2.style = "color: #ff0000";
    } else {
    		campoax2.style = "color: #000000";
    }
}

bx.onblur = () => {
		if (bx.value == "") {
    		campobx.style = "color: #ff0000";
    } else {
    		campobx.style = "color: #000000";
    }
}

c.onblur = () => {
		if (c.value == "") {
    		campoc.style = "color: #ff0000";
    } else {
    		campoc.style = "color: #000000";
    }
}

// Cálculo

btn.onclick = () => {
	if (ax2.value == "" || ax2.value == "0"){
  	ax2.focus();
  }else if (bx.value == "") {
    	bx.focus();
  } else if (c.value == ""){
    	c.focus();
  } else {
  
  const delta = (bx.value*bx.value)-4*ax2.value*c.value;
  
  if (delta < 0) {  
x1.value = "Delta é negativo!";
x2.value = ""; 

}
else {
  x1.value = (-bx.value + Math.sqrt(delta)) / (2*ax2.value);
  x2.value = (-bx.value - Math.sqrt(delta)) / (2*ax2.value);
}

}
}
