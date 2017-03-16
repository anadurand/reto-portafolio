window.addEventListener('load',function(){
  var agents=[{link:"bjstdmngbgr02.thoughtworks.com",tipo:"idle",ip:"192.168.1.2",directorio:"/var/lib/cruise-agent"},
              {link:"bjstdmngbgr03.thoughtworks.com",tipo:"building",ip:"192.168.1.3",directorio:"/var/lib/cruise-agent"},
              {link:"bjstdmngbgr04.thoughtworks.com",tipo:"building",ip:"192.168.1.4",directorio:"/var/lib/cruise-agent"},
              {link:"bjstdmngbgr05.thoughtworks.com",tipo:"idle",ip:"192.168.1.5",directorio:"/var/lib/cruise-agent"}];
  var separador=" | ";

  function Portafolio(){
    this.resource=[];
    this.addResource=function(element){
      this.resource.push(element);
    }
    this.removeResource=function(idPadre){
      this.resource.splice(idPadre,1);
    }
  }
  var rec=new Portafolio();
  var section=document.getElementById('section');
  var idSpan=0, idEnlace=0, idRecurso=0;

  function creaArticles(){

    agents.forEach(function(e){
      var article=document.createElement('article');
      article.setAttribute("class",e.tipo);
      var divImage=document.createElement('div');
      var divTexto=document.createElement('div');
      var p1=document.createElement('p');
      var b1=document.createElement('b');
      var divPadre=document.createElement('div');
      var b2=document.createElement('b');
      var a=document.createElement('a');
      divPadre.id="idPadreRecurso";
      a.setAttribute("href",'#');
      a.setAttribute("id",'specify'+idEnlace);
      a.setAttribute("class",'dropbtn');
      b1.innerHTML=e.link+separador+e.tipo+separador+e.ip+separador+e.directorio;
      p1.appendChild(b1);
      b2.innerHTML="+ ";
      divPadre.appendChild(b2);
      a.innerHTML="Specify Resources";
      divPadre.appendChild(a);
      divTexto.appendChild(p1);
      divTexto.appendChild(divPadre);
      //falta añadir imagen en article
      article.appendChild(divTexto);
      section.appendChild(article);
      idEnlace++;
    });
  }
  creaArticles();
  //var recurso=document.getElementsByClassName('recurso');


  function creaRecursos(idDivpadre){
    var spanPadre=document.createElement('span');
    spanPadre.setAttribute("id",'recurso'+idRecurso);
    spanPadre.setAttribute("class",'recurso');
    spanPadre.innerHTML=" | Resources: ";
    var texto=prompt("Ingrese un recurso");
    var arrRecurso=texto.split(",");
    arrRecurso.forEach(function(e,i){
      var spanHijo=document.createElement('span');
      spanHijo.setAttribute("id",idSpan);
      spanHijo.innerHTML= "  "+e;
      var btnElimina=document.createElement('button');
      btnElimina.innerHTML="X";
      spanHijo.appendChild(btnElimina);
      spanPadre.appendChild(spanHijo);
      idDivpadre.appendChild(spanPadre);
      idSpan++; idRecurso++;
      btnElimina.onclick=function(e){
        var idPadre=e.target.parentNode.getAttribute('id');
        spanPadre.removeChild(spanHijo);
        rec.removeResource(idPadre);
      }
      rec.addResource(spanHijo);
    });
  }

    var idDivpadre=document.getElementById('idPadreRecurso');
    document.getElementById('specify0').addEventListener('click',creaRecursos(idDivpadre));
    document.getElementById('specify1').addEventListener('click',creaRecursos(idDivpadre));
    document.getElementById('specify2').addEventListener('click',creaRecursos(idDivpadre));
    document.getElementById('specify3').addEventListener('click',creaRecursos(idDivpadre));


});
