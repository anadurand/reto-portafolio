window.addEventListener('load',function(){
  var agents=[{domain:"bjstdmngbgr02.thoughtworks.com",type:"idle",ip:"192.168.1.2",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr03.thoughtworks.com",type:"building",ip:"192.168.1.3",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr04.thoughtworks.com",type:"building",ip:"192.168.1.4",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr05.thoughtworks.com",type:"idle",ip:"192.168.1.5",directory:"/var/lib/cruise-agent"}];
  var separador="&nbsp &nbsp; | &nbsp";

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
      article.setAttribute("class",e.type);
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
      b1.innerHTML=e.domain+separador+e.type+separador+e.ip+separador+e.directory;
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

    var idDiv=document.getElementById('idPadreRecurso');
    document.getElementById('specify0').addEventListener('click',creaRecursos(idDiv));
    // document.getElementById('specify1').addEventListener('click',creaRecursos(idDivpadre));
    // document.getElementById('specify2').addEventListener('click',creaRecursos(idDivpadre));
    // document.getElementById('specify3').addEventListener('click',creaRecursos(idDivpadre));

});
