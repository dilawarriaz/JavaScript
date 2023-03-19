
let h1;
function domTesting(){
    console.log('js working....\.');    
    h1=document.querySelector('.head')
    console.log('check h1....',h1);
    if(h1){
        h1.classList.toggle('txt-color');
    }

}

