function convert() {
    const numberInput = document.getElementById("number-input").value;
    const conversionType = document.getElementById("select3-1").value;
    let result;
    let basis;
    let regex = /^[A-Za-z]+$/;
    let regex2 = /^[0-1]+$/;
    let regex3 = /^[0-7]+$/;
    let regex4 = /^[0-9]+[A-Fa-f]+$/;
    let regex5 = /^[0-9]+$/;


    switch (conversionType) {
        case "binary-to-decimal":
            if(regex2.test(numberInput)){
                result = parseInt(numberInput, 2);
                basis = '10';
            }else{
                window.alert(`angka yang di inputkan hanya 1 dan 0`);
                const element = document.getElementById("output");
                element.remove();
            }
            break;
        case "decimal-to-binary":
            if(regex.test(numberInput)){
                result = Number(numberInput).toString(2);
                basis = '2';
            }else{
                window.alert(`Hanya angka yang di inputkan`);
                const element = document.getElementById("output");
                element.remove();
            }
            break;
        case "binary-to-hex":
            if(regex2.test(numberInput)){
                const decimalEquivalent = parseInt(numberInput, 2);
                result = decimalEquivalent.toString(16).toUpperCase();
                basis = '16';
            }else{
                window.alert(`angka yang di inputkan hanya 1 dan 0`);
                const element = document.getElementById("output");
                element.remove();
            }
            break;
        case "hex-to-binary":
            if(regex4.test(numberInput) || regex5.test(numberInput)){
                const decimalEquivalent2 = parseInt(numberInput, 16);
                result = decimalEquivalent2.toString(2);
                basis = '2';
            }else{
                window.alert(`angka yang di inputkan hanya 1 - 9 dan huruf A - F`);
                const element = document.getElementById("output");
                element.remove();
            }
            
            break;
        case "hex-to-octal":
            if(regex4.test(numberInput) || regex5.test(numberInput)){
                const decimalEquivalent4 = parseInt(numberInput, 16);
                result = decimalEquivalent4.toString(8);
                basis = '8';
            }else{
                window.alert(`angka yang di inputkan hanya 1 - 9 dan huruf A - F`);
                const element = document.getElementById("output");
                element.remove();
            }
            
            break;
        case "decimal-to-hex":
            if(regex.test(numberInput)){
                result = Number(numberInput).toString(16).toUpperCase();
                basis = '16';
            }else{
                window.alert(`Hanya angka yang di inputkan`);
                const element = document.getElementById("output");
                element.remove();
            }
            break;
        case "hex-to-decimal":
            if(regex4.test(numberInput) || regex5.test(numberInput)){
                result = parseInt(numberInput, 16);
                basis = '10';
            }else{
                window.alert(`angka yang di inputkan hanya 1 - 9 dan huruf A - F`);
                const element = document.getElementById("output");
                element.remove();
            }
            
            break;
        case "decimal-to-octal":
            if(regex.test(numberInput)){
                result = Number(numberInput).toString(8);
                basis = '8';
            }else{
                window.alert(`Hanya angka yang di inputkan`);
                const element = document.getElementById("output");
                element.remove();
            }
            break;
        case "binary-to-octal":
            if(regex2.test(numberInput)){
                const decimalEquivalent3 = parseInt(numberInput, 2);
                result = decimalEquivalent3.toString(8);
                basis = '8';
            }else{
                window.alert(`angka yang di inputkan hanya 1 dan 0`);
                const element = document.getElementById("output");
                element.remove();
            }
            break;
        case "octal-to-binary":
            if(regex3.test(numberInput)){
                const decimalEquivalent5 = parseInt(numberInput, 8);
                result = decimalEquivalent5.toString(2);
                basis = '2';
            }else{
                window.alert(`angka yang di inputkan hanya 1 - 7`);
                const element = document.getElementById("output");
                element.remove();
            }
            break;
        case "octal-to-hex":
            if(regex3.test(numberInput)){
                const decimalEquivalent6 = parseInt(numberInput, 8);
                result = decimalEquivalent6.toString(16).toUpperCase();
                basis = '16';
            }else{
                window.alert(`angka yang di inputkan hanya 1 - 7`);
                const element = document.getElementById("output");
                element.remove();
            }
            break;
        case "octal-to-decimal":
            if(regex3.test(numberInput)){
                result = parseInt(numberInput, 8);
                basis = '10';
            }else{
                window.alert(`angka yang di inputkan hanya 1 - 7`);
                const element = document.getElementById("output");
                element.remove();
            }
            break;
        default:
            result = "Invalid Conversion Type";
            break;
    }

    document.getElementById("output").innerHTML = `Hasil Konversinya ialah: ${result} <sub>${basis}</sub>`;
}


function reset(){
    location.reload();
return false;
}



function ConvertionSelect(convert, selectId) {
    var select3 = document.getElementById(selectId);

    // Kosongkan select2
    select3.innerHTML = '';

    if (convert === 'decimal') {
      var decimalVarians = ['decimal-to-binary', 'decimal-to-octal', 'decimal-to-hex'];
      convertionOptions(select3, decimalVarians);
    } else if (convert === 'biner') {
      var binerVarians = ['binary-to-decimal', 'binary-to-octal', 'binary-to-hex'];
      convertionOptions(select3, binerVarians);
    } else if (convert === 'octal') {
      var octalVarians = ['octal-to-decimal', 'octal-to-binary', 'octal-to-hex'];
      convertionOptions(select3, octalVarians);
    }else if (convert === 'hex') {
      var hexVarians = ['hex-to-decimal', 'hex-to-binary', 'hex-to-octal'];
      convertionOptions(select3, hexVarians);
    }
  }

  function convertionOptions(selectElement, optionsArray) {
    optionsArray.forEach(function(option) {
      var optionElement = document.createElement('option');
      optionElement.textContent = option;
      optionElement.value = option;
      selectElement.appendChild(optionElement);
    });
  }