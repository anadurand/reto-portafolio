window.addEventListener('load',function(){
  function Portafolio(){
    this.resource=[];
    this.addResource=function(element){
      this.resource.push(element);
    }
    this.removeResource=function(ePadre,eHijo){
      this.resource.splice(this.resource.indexOf(ePadre),1);
      //ePadre.removeChild(eHijo);
    }
  }
  var rec=new Portafolio();
  var elementos=document.getElementById('elementos');
  var section=document.getElementById('section');
  var idSpan=0,idBtn=0, arr=[];

  function creaArticles(){
    var tipo="idle";
    var ip="192.168.1.2";
    var direc="/var/lib/cruise-agent";
    var article=document.createElement('article');
    article.setAttribute("class",'idle');
    var divImage=document.createElement('div');
    var divTexto=document.createElement('div');
    var p=document.createElement('p');
    var b=document.createElement('b');
    b.innerHTML="bjstdmngbgr02.thoughtworks.com | "+tipo+ " | "+ip+" | "+direc;
    p.appendChild(b);
    divTexto.appendChild(p);
    article.appendChild(divTexto);
    section.appendChild(article);
  }
creaArticles();
  function creaRecursos(){
    var texto=prompt("Ingrese un recurso");
    var arrRecurso=texto.split(",");
    arrRecurso.forEach(function(e){
        var span=document.createElement('span');
        span.setAttribute("id","sp"+idSpan);
        span.innerHTML= "  "+e;
        var btnElimina=document.createElement('button');
        btnElimina.innerHTML="X";
        span.appendChild(btnElimina);
        elementos.appendChild(span);
        idSpan++;
        btnElimina.onclick=function(e){
            elementos.removeChild(span);
            alert(rec.resource);
        }
        //lert(rec.resource);
        rec.addResource(elementos);
    });
  }
  document.getElementById('r1').onclick=function(){
    //alert("aki");
    creaRecursos();
  }
});

// if (typeof exports != undefined) {
//   exports.Portafolio=Portafolio;
// }
