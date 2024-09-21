function getInputValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getInputValueByInnerText (id){
    const inputValue  = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputValue);
    return inputNumber
}

function showElementById (id){
    document.getElementById('cash-out-form').classList.add('hidden');
   
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
   
    

    
   
}
