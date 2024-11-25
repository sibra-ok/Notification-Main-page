let mark=document.getElementById('mark');

mark.addEventListener('click',function(e){

document.querySelectorAll('.unread').forEach(element=>{
element.classList.remove('unread');
});

document.querySelectorAll('.call').forEach(element=>{
    element.classList.remove('red');
    })

let num=document.getElementById('number');
num.innerHTML='0';
console.log('clicked')

})