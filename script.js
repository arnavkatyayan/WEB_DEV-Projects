let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    
    if(e.target.innerHTML=='Result'){
      string =eval(string);
      document.getElementById('x').value=string;
    }
    else if(e.target.innerHTML=='Reset'){
      document.getElementById('x').value='';
    }
    else{
    string=string+e.target.innerHTML;
    document.getElementById('x').value=string;
    }
  })
})

function Reset(){
  document.getElementById('x').value='';
}