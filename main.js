const H1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.getElementById('pid')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const pResult = document.getElementById('result')


console.log({
    H1,
    p,
    parrafito,
    pid,
    input1,
})

console.log(input1.value)

btn.addEventListener('click', appenClick)

H1.innerHTML = 'Dracula <br> Light Year'
console.log(H1.getAttribute('pantalla'))
H1.setAttribute('class', 'Samsung')

H1.classList.add('morado')
// input.value = 'oh yeah'
// input.placeholder = 'escriba pues'

const img =  document.createElement('img')
img.setAttribute('src', './pexels-pixabay-159211.jpg' )
console.log(img)

pid.append(img)

function appenClick() {
   const sumainput = input1.value + input2.value;
   pResult.innerText = 'resultado ' + sumainput;
}





