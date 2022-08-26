let notaAluno = 40

if (Number.isInteger(notaAluno / 5)) {
  console.log("Aprovado! Nota: " + notaAluno)
} else {
  
  if (notaAluno < 38){
    console.log("Reprovado! Nota: " + notaAluno)
  } else {
    let notaArredondada = Math.round(notaAluno / 5) * 5
    console.log("Aprovado! Nota: " + notaArredondada)
    
  }
  
}
