/*
    Crie uma função que recebe por parâmetro uma temperatura em celcius.
    Converta a temperatura de celcius para fahrenheit.
    Exiba a temperatura no console.

    A fórmula para converter de Celsius para Fahrenheit é:
    temperatura em Celsius vezes 9/5, mais 32.

*/

function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  convertToF(30);