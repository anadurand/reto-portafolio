window.addEventListener('load',function(){
  function Portafolio(){
    this.resource=[];
    this.addResource=function(element){
      this.resource.push(element);
    }
    this.removeResource=function(ePadre,eHijo){
      //element.parentNode.removeChild(element);
      ePadre.removeChild(eHijo);
    }
  }
  var rec=new Portafolio();
  var elementos=document.getElementById('elementos');
  var idSpan=0,idBtn=0, arr=[];

  function creaRecursos(){
    var texto=prompt("Ingrese un recurso");
    var arrRecurso=texto.split(",");
    arrRecurso.forEach(function(e){
        var span=document.createElement('span');
        span.setAttribute("id",idSpan);
        span.innerHTML= "  "+e;
        var btnElimina=document.createElement('button');
        btnElimina.innerHTML="X";
        span.appendChild(btnElimina);
        elementos.appendChild(span);
        idSpan++;
        btnElimina.onclick=function(e){
            elementos.removeChild(span);
        }
    });
  }
  document.getElementById('r1').onclick=function(e){
    creaRecursos();
  }
});

// if (typeof exports != undefined) {
//   exports.Portafolio=Portafolio;
// }
