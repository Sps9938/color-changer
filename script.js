const button=document.querySelectorAll('.buttons');
const body=document.querySelector('body');
console.log(button);
button.forEach((butn)=> {
    console.log(butn);
   butn.addEventListener('click',(e)=> {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'white'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'blue'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'yellow'){
        body.style.backgroundColor=e.target.id;
    }
    
   });
    
    
});