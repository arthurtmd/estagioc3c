const nota = document.getElementById("nota");
const notaFinal = document.getElementById("notaFinal");
const result = document.getElementById("result");
const btn = document.querySelector("#verif")
const campoNota = document.getElementById("campoax2")

// Cálculo

btn.onclick = () => {
	if (nota.value == ""){
  	nota.focus();
  
  } else {
  
   if (nota.value < 38){
   result.value = "Reprovado!";
   notaFinal.value = nota.value
   
  } else {
    
  notaFinal.value = Math.round(nota.value / 5) * 5
  result.value = "Aprovado!"
  
 }
 }
 }
