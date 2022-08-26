let ax2 = 3
let bx = -15
let c = 12

let delta = ((bx*bx)-4*ax2*c)

if (delta < 0) {

let deltaNegativo = "Delta é negativo"
console.log(deltaNegativo)

} else {

let x1 = ((- bx + Math.sqrt(delta)) / (2 * ax2))
let x2 = ((- bx - Math.sqrt(delta)) / (2 * ax2))
let string = "Os resultados são: " + x1 + " e " + x2

console.log(string)

}
