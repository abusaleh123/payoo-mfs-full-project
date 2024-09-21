document.getElementById('transfer-money-btn').addEventListener('click', function(){
    showElementById('transfer-money-form');
})


document.getElementById('transfer-money-last-btn').addEventListener('click',function(event){
    event.preventDefault();
    

    const userNumber = getInputValueById('user-account-input');
    const amountNumber = getInputValueById('transfer-money-input');
    const pinNumber = getInputValueById('transfer-money-pin');

   if(pinNumber === 1234 && userNumber === 12587){
        const accountBalance = getInputValueByInnerText('account-balance');
        console.log('Account Balance',accountBalance);
        const newBalance = accountBalance - amountNumber;
        const balance = document.getElementById('account-balance').innerText = newBalance;
        console.log('New Balance',balance);

        console.log('your cash out is processing please wait');
   }
   else{
    alert('wrong info correct this info')
   }
   
 })