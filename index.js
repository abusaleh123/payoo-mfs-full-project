document.getElementById('Login-btn').addEventListener('click', function(event){
    event.preventDefault();
   

    const phoneNumber = getInputValueById('phone-number');
    const pinNumber = getInputValueById('pin-number');

    if(phoneNumber === 14789 && pinNumber === 1234){
      console.log('Processing', pinNumber);
      window.location.href = 'home.html'
    }
    else{
        alert('wrong info please try again')
    }
})