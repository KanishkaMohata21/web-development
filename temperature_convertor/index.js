document.addEventListener("DOMContentLoaded", function() {
    let celciusInput = document.querySelector('.celcius input');
    let fahrenheitInput = document.querySelector('.fahrenheit input');
    let kelvinInput = document.querySelector('.kelvin input');
    let submit = document.getElementById('submit');
    let clear = document.getElementById('clear');

    function celciusToOtherconvertor(celsius) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = parseFloat(celsius) + 273.15;
        fahrenheitInput.value = fahrenheit.toFixed(2); 
        kelvinInput.value = kelvin.toFixed(2);
    }

    function fahrenheiToOtherConvertor(fahrenheit) {
        const celsius = (fahrenheit - 32) * 5/9;
        const kelvin = (fahrenheit - 32) * 5/9 + 273.15;
        celciusInput.value = celsius.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2); 
    }

    function kelvinToOtherConvertor(kelvin) {
        const celsius = kelvin - 273.15;
        const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
        celciusInput.value = celsius.toFixed(2); 
        fahrenheitInput.value = fahrenheit.toFixed(2); 
    }

    submit.addEventListener('click', function() {
        if (celciusInput.value != "") {
            celciusToOtherconvertor(celciusInput.value);
        }
        else if(fahrenheitInput.value != ""){
            fahrenheiToOtherConvertor(fahrenheitInput.value);
        }
        else if(kelvinInput.value != ""){
            kelvinToOtherConvertor(kelvinInput.value);
        }
    });

    clear.addEventListener('click',()=>{
        celciusInput.value = "";
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    });
});
