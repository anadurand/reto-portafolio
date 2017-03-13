window.addEventListener('load',function(){
  function Portafolio(){
    this.resource=[];
    this.addResource=function(element){
      resource.push(element);
    }
    this.removeResource=function(){

    }
  }

  document.getElementById('r1').onclick=function(){
    var recurso=prompt("Ingrese un recurso");
    var button=document.createElement('button');
    button.innerHTML="X";
    var elementos=document.getElementById('elementos');
    elementos.innerHTML= recurso;
    elementos.appendChild(button);
  }
});

// if (typeof exports != undefined) {
//   exports.Portafolio=Portafolio;
// }
