document.getElementById('cash-out-btn').addEventListener('click', function(){
    showElementById('cash-out-form');
 })


 document.getElementById('cash-out-last-btn').addEventListener('click',function(event){
    event.preventDefault();
    

    const agentNumber = getInputValueById('agent-number-input');
    const amountNumber = getInputValueById('cash-out-input');
    const pinNumber = getInputValueById('cash-out-pin');

   if(pinNumber === 1234 && agentNumber === 12587){
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