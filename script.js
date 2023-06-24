function calculate() {
    let altura = (document.getElementById('altura').value)/100;
    let peso = document.getElementById('peso').value;

    var imc = peso / altura ** 2;
    var text="";

    if(imc < 18.5){
        text=('voce esta magro demais')
    }else if(imc < 24.9){
        text=('voce esta com o peso normal')
    }else if(imc < 29.9){
        text=('voce esta com sobrepeso')
    }else if(imc < 39.9){
        text=('voce esta com obesidade')
    }else if(imc > 39.9){
        text=('voce esta com obesidade morbida')
    }
    document.getElementById("text_area").innerText=text;
}

