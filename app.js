function convert() {
    const numberInput = document.getElementById("number-input").value;
    const conversionType = document.getElementById("conversion-type").value;
    let result;
    let basis;

    switch (conversionType) {
        case "binary-to-decimal":
            result = parseInt(numberInput, 2);
            basis = '10';
            break;
        case "decimal-to-binary":
            result = Number(numberInput).toString(2);
            basis = '2';
            break;
        case "binary-to-hex":
            const decimalEquivalent = parseInt(numberInput, 2);
            result = decimalEquivalent.toString(16).toUpperCase();
            basis = '16';
            break;
        case "hex-to-binary":
            const decimalEquivalent2 = parseInt(numberInput, 16);
            result = decimalEquivalent2.toString(2);
            basis = '2';
            break;
        case "hex-to-octal":
            const decimalEquivalent4 = parseInt(numberInput, 16);
            result = decimalEquivalent4.toString(8);
            basis = '8';
            break;
        case "decimal-to-hex":
            result = Number(numberInput).toString(16).toUpperCase();
            basis = '16';
            break;
        case "hex-to-decimal":
            result = parseInt(numberInput, 16);
            basis = '10';
            break;
        case "decimal-to-octal":
            result = Number(numberInput).toString(8);
            basis = '8';
            break;
        case "binary-to-octal":
            const decimalEquivalent3 = parseInt(numberInput, 2);
            result = decimalEquivalent3.toString(8);
            basis = '8';
            break;
        case "octal-to-binary":
            const decimalEquivalent5 = parseInt(numberInput, 8);
            result = decimalEquivalent5.toString(2);
            basis = '2';
            break;
        case "octal-to-hex":
            const decimalEquivalent6 = parseInt(numberInput, 8);
            result = decimalEquivalent6.toString(16).toUpperCase();
            basis = '16';
            break;
        case "octal-to-decimal":
            result = parseInt(numberInput, 8);
            basis = '10';
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