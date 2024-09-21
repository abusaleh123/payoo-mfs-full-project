document.getElementById('add-money-btn').addEventListener('click', function(){
   showElementById('add-money-form');
})

document.getElementById('add-money-last-btn').addEventListener('click', function(event){
   event.preventDefault();


   const accountNumber = getInputValueById('bank-account-input');
   const amountNumber = getInputValueById('add-money-input');
   const pinNumber = getInputValueById('pin-number-input');

   if(accountNumber === 123456 && pinNumber === 1234){
      const accountBalance = getInputValueByInnerText('account-balance');
      console.log(accountBalance);
      const newBalance = accountBalance + amountNumber;
      console.log('New Balance',newBalance);
      const balance = document.getElementById('account-balance').innerText = newBalance;
      console.log(balance);
      console.log('Add Money is processing please wait');
   }

   else{
      alert('Wrong Info please try again later')
   }
})