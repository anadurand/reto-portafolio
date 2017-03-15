window.addEventListener('load',function(){
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
  //var elementos=document.getElementById('elementos');
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
    var p1=document.createElement('p');
    var b1=document.createElement('b');
    var p2=document.createElement('p');
    var b2=document.createElement('b');
    var a=document.createElement('a');
    var span=document.createElement('span');
    span.setAttribute("id",'elementos');
    a.setAttribute("href",'#');
    a.setAttribute("id",'r1');
    a.setAttribute("class",'dropbtn');
    b1.innerHTML="bjstdmngbgr02.thoughtworks.com | "+tipo+ " | "+ip+" | "+direc;
    p1.appendChild(b1);
    b2.innerHTML="+ ";
    p2.appendChild(b2);
    a.innerHTML="Specify Resources";
    p2.appendChild(a);
    span.innerHTML=" | Resources: ";
    p2.appendChild(span);
    divTexto.appendChild(p1);
    divTexto.appendChild(p2);
    article.appendChild(divTexto);
    section.appendChild(article);
  }
  creaArticles();

  function creaToolTip(){
    var tool=document.createElement("div");
    var p=document.createElement("p");
    var inputResource=document.createElement("input");
    var btnAdd=document.createElement("button");
    var btnClose=document.createElement("button");
    tool.setAttribute("id",'myDropdown');
    tool.setAttribute("class",'dropdown-content');
    btnAdd.setAttribute("id",'btnAdd');
    btnClose.setAttribute("id",'btnClose');
    p.innerHTML="(Separete multiple resources name with commas)";
    btnAdd.innerHTML="Add resources";
    btnClose.innerHTML="Close";
    tool.appendChild(p);
    tool.appendChild(inputResource);
    tool.appendChild(btnAdd);
    tool.appendChild(btnClose);
    document.body.appendChild(tool);
  }

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
          var idPadre=e.target.parentNode.getAttribute('id');
            elementos.removeChild(span);
            rec.removeResource(idPadre);
            //document.body.appendChild(elementos);
        }
        rec.addResource(elementos);
    });

  }
  //aki tiene q ser en el evento click del boton btnAdd
  //-----Cambiar
  document.getElementById('r1').onclick=function(){
    // creaToolTip();
    // document.getElementById("myDropdown").classList.toggle("show");
    // window.onclick = function(event) {
    // 	if (!event.target.matches('.dropbtn')) {
    // 		var dropdowns = document.getElementsByClassName("dropdown-content");
    // 		var i;
    // 		for (i = 0; i < dropdowns.length; i++) {
    // 			var openDropdown = dropdowns[i];
    // 			if (openDropdown.classList.contains('show')) {
    // 				openDropdown.classList.remove('show');
    // 			}
    // 		}
    // 	}
    // }
    creaRecursos();
  }

  document.getElementById('btnAdd').onclick=function(e){
    //e.preventDefault();
    creaRecursos();
  }

});

// if (typeof exports != undefined) {
//   exports.Portafolio=Portafolio;
// }
