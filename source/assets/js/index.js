const iptSide1 = document.getElementById("side1")
const iptSide2 = document.getElementById("side2")
const iptSide3 = document.getElementById("side3")
const formSides = document.getElementById("form-sides")
const lawCos = document.getElementById("law-cos")
const divRes = document.getElementById("result")
const radToDeg = 180 / Math.PI;

formSides.addEventListener("submit", function(e){
    e.preventDefault() // Evitando que o Formulário seja enviado

    side1 = parseInt(iptSide1.value) // Pegando os valores
    side2 = parseInt(iptSide2.value) // e transformando em
    side3 = parseInt(iptSide3.value) // números inteiros

    if (!side1 || !side2 || !side3){ 
        // São válidos?
        divRes.style.display = "flex"
        divRes.style.backgroundColor = "#ff8686" // Cor do Fundo -> Aviso Negativo
        divRes.style.color = "red" // Cor da Fonte -> Aviso Negativo
        divRes.innerHTML = "Os valores devem ser numéricos!"
    
    } else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side3 + side2 <= side1){
        // É uma restrição?
        divRes.style.display = "flex"
        divRes.style.backgroundColor = "#ff8686" // Cor do Fundo -> Aviso Negativo
        divRes.style.color = "red" // Cor da Fonte -> Aviso Negativo
        divRes.innerHTML = "Restrição: A medida de qualquer um dos lados não pode ser menor ou igual do que a soma dos outros dois lados"
    
    } else if (side1 <= 0 || side2 <= 0 || side3 <= 0){
        // São menores ou iguais a zero?
        divRes.style.display = "flex"
        divRes.style.backgroundColor = "#ff8686" // Cor do Fundo -> Aviso Negativo
        divRes.style.color = "red" // Cor da Fonte -> Aviso Negativo
        divRes.innerHTML = "Os valores devem ser maiores do que 0"
    
    } else if (side1 !== side2 && side2 !== side3){
        // É escaleno?
        divRes.style.display = "flex"
        divRes.style.backgroundColor = "var(--second-color)" // Cor do Fundo -> Aviso Positivo
        divRes.style.color = "var(--primary-color)" // Cor da Fonte -> Aviso Positivo
        divRes.innerHTML = "Classificação: Triângulo Escaleno"
        lawCos.innerHTML = `<p>cos(A) = ${Math.acos((side2**2 + side3**2 - side1**2) / (2 * side2 * side3)) * radToDeg}°</p>
        <p>cos(B) = ${Math.acos((side1**2 + side3**2 - side2**2) / (2 * side1 * side3)) * radToDeg}°</p>
        <p>cos(C) = ${Math.acos((side1**2 + side2**2 - side3**2) / (2 * side1 * side2)) * radToDeg}°</p>`
    
    } else if (side1 == side2 && side2 == side3){
        // É equilátero?
        divRes.style.display = "flex"
        divRes.style.backgroundColor = "var(--second-color)" // Cor do Fundo -> Aviso Positivo
        divRes.style.color = "var(--primary-color)" // Cor da Fonte -> Aviso Positivo
        divRes.innerHTML = "Classificação: Triângulo Equilátero"
        lawCos.innerHTML = `<p>cos(A) = ${Math.acos((side2**2 + side3**2 - side1**2) / (2 * side2 * side3)) * radToDeg}°</p>
        <p>cos(B) = ${Math.acos((side1**2 + side3**2 - side2**2) / (2 * side1 * side3)) * radToDeg}°</p>
        <p>cos(C) = ${Math.acos((side1**2 + side2**2 - side3**2) / (2 * side1 * side2)) * radToDeg}°</p>`
    
    } else {
        // É isósceles?
        divRes.style.display = "flex"
        divRes.style.backgroundColor = "var(--second-color)" // Cor do Fundo -> Aviso Positivo
        divRes.style.color = "var(--primary-color)" // Cor da Fonte -> Aviso Positivo
        divRes.innerHTML = "Classificação: Triângulo Isósceles"
        lawCos.innerHTML = `<p>cos(A) = ${Math.acos((side2**2 + side3**2 - side1**2) / (2 * side2 * side3)) * radToDeg}°</p>
        <p>cos(B) = ${Math.acos((side1**2 + side3**2 - side2**2) / (2 * side1 * side3)) * radToDeg}°</p>
        <p>cos(C) = ${Math.acos((side1**2 + side2**2 - side3**2) / (2 * side1 * side2)) * radToDeg}°</p>`
    }
})