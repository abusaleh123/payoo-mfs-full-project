document.getElementById('Login-btn').addEventListener('click', function(event){
    event.preventDefault();
   

    const phoneNumber = getInputValueById('phone-number');
    const pinNumber = getInputValueById('pin-number');

    if(pinNumber === 1234){
      console.log('Processing', pinNumber);
      window.location.href = 'home.html'
    }
    else{
        alert('wrong info')
    }
})