let subscribeButton = document.querySelector('.subscribe__button') 
let subscribeIm = document.querySelector('.check') 
let subscribeImage = document.querySelector('.subscribe__image') 
subscribeButton.addEventListener('click', function(){ 
    let subscribeInput = document.querySelector('.subscribe__input') 
    let subscribeInputValue = subscribeInput.value  
    if(subscribeInputValue !== ''){ 
       
        subscribeIm.classList.add('new') 
        subscribeImage.style.display = 'none' 
    } 
    
})