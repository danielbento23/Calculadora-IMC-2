 //criamos a função calcular
 function calcular(){
    //criamos as variavies que vão receber o valor dos elementos 
    var nalt = (document.getElementById('naltura'))
    var npes = (document.getElementById('npeso'))
    var res = document.getElementById('resul')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    //após isso criamos 2 variaveis que ão receber o valor Numerico das duas variaveis acima
    var alt = Number(nalt.value)
    var pes = Number(npes.value)
    var imc = pes/(alt*alt)
    if (imc < 18.5) {
        resul.innerText = `Seu imc é ${imc.toFixed(2)} você está abaixo do peso`
        img.setAttribute('src','naookay.png')
        } else if (imc >= 18.5 && imc < 25) {
            resul.innerText = `Seu imc é ${imc.toFixed(2)} você está no peso ideal`
            img.setAttribute('src','okay.png')
        } else if (imc >= 25 && imc < 30) {
                resul.innerText = `Seu imc é ${imc.toFixed(2)} você está com sobrepeso`
                img.setAttribute('src','naookay.png')
            } else if (imc >= 30 && imc < 35) {
                    resul.innerText = `Seu imc é ${imc.toFixed(2)} você está com obesidade classe 1`
                    img.setAttribute('src','ferrou.png')
                } else if (imc >= 35 && imc < 40) {
                        resul.innerText = `Seu imc é ${imc.toFixed(2)} você está com obesidade classe 2`
                        img.setAttribute('src','ferrou2.png')
                      } else if (imc > 40) {
                        resul.innerText = `Seu imc é ${imc.toFixed(2)} você está com obesidade classe 3`
                        img.setAttribute('src','ferrou3.png')
                      }
        resul.appendChild(img)
        
 }
