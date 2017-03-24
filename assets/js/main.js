window.addEventListener('load',function(){
  var idSection=document.getElementById('section');
  var agents=[{domain:"bjstdmngbgr02.thoughtworks.com",type:"idle",ip:"192.168.1.2",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr03.thoughtworks.com",type:"building",ip:"192.168.1.3",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr04.thoughtworks.com",type:"building",ip:"192.168.1.4",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr05.thoughtworks.com",type:"idle",ip:"192.168.1.5",directory:"/var/lib/cruise-agent"}];

  var agente=new Agents(agents);
  agente.createAgents(idSection);
  //agente.addResource();
});

function Agents(properties){
    this.properties=properties;
    //this.image=image;
    this.resources=[];
    this.createAgents=function(idAgentSection){
      var separador="&nbsp; | &nbsp;";
      var arrayResources=this.resources;
      console.log(arrayResources);
      var idElement=0;
      this.properties.forEach(function(e,i){
        //creacion de nodos
        var articleAgent=document.createElement('article');
        articleAgent.className=e.type;
        var divImage=document.createElement('img');
        divImage.className="imgclass";
        divImage.setAttribute("src",'assets/images/pc.png');
        articleAgent.appendChild(divImage);

        var divElements=document.createElement('div');
        divElements.className="elements";
        var pProperties=document.createElement('p');
        pProperties.innerHTML="<b>"+e.domain+separador+e.type+separador+e.ip+separador+e.directory+"</b>";
        divElements.appendChild(pProperties);

        var divResources=document.createElement('div');
        divResources.id="containerTool";
        divResources.className="cssToolTip";
        divResources.innerHTML="<b> + </b>";
        var a=document.createElement('a');
        a.id="specify"+i;
        a.className="specify";
        a.innerHTML="Specify Resources";
        divResources.appendChild(a);

        var spanResources=document.createElement('span');
        spanResources.id="resources"+i;
        spanResources.innerHTML=separador+"Resources: &nbsp;";
        divResources.appendChild(spanResources);
        divElements.appendChild(divResources);
        articleAgent.appendChild(divElements);

    //Crea tooltip
        var divTool=document.createElement('div');
        divTool.id="tooltip"+i;
        var pTool=document.createElement('p');
        pTool.innerHTML="(Separete multiple resources name with commas)";
        var inputTool=document.createElement('input');
        inputTool.id="idResource"+i;
        var btnAddResource=document.createElement('button');
        btnAddResource.id="btnAdd"+i;
        btnAddResource.innerHTML="Add resource";
        var btnClose=document.createElement('button');
        btnClose.id="btnclose"+i;
        btnClose.innerHTML="Close";
        divTool.appendChild(pTool);
        divTool.appendChild(inputTool);
        divTool.appendChild(btnAddResource);
        divTool.appendChild(btnClose);
        divResources.appendChild(divTool);

        // event click enlace a,
        a.addEventListener('click',function(e){
          e.preventDefault();
          var tooltip=document.getElementById(divTool.id);
          tooltip.classList.toggle("show");
          inputTool.focus();
          window.onclick=function(event){
            if(!event.target.matches('.specify')){
              //var tool=
              if (tooltip.classList.contains('show')) {
                tooltip.classList.remove('show');
        			}
            }
          }
        });

        btnAddResource.onclick=function(e){
          var arrResource=inputTool.value.split(",");
          console.log(inputTool.value.length);
          console.log(arrResource);
          if(arrResource=="" || inputTool.value.length==0){
            alert("Debe ingresar algun recurso");
            return false;
          }else {
            arrResource.forEach(function(e,id){
                var newResource=document.createElement('span');
                var spanTexto=document.createElement('span');
                var btnDelete=document.createElement('button');
                //si usamos id de function este se reinicia en 0 x cada click
                //newResource.id="recurso"+id;
                newResource.id="recurso"+idElement;
                spanTexto.innerHTML="&emsp;"+e;
                btnDelete.innerHTML="x";
                newResource.appendChild(spanTexto);
                newResource.appendChild(btnDelete);
                spanResources.appendChild(newResource);

                //añade al array recursos los elementos de recurso creados
                arrayResources.push(newResource);
                idElement++;
                console.log(arrayResources+"--");
                console.log(idElement);

                btnDelete.onclick=function(e){
                  var idPadre=e.target.parentNode.getAttribute('id');
                  console.log(idPadre);
                  spanResources.removeChild(newResource);
                  arrayResources.splice(idPadre,1);
                  console.log(arrayResources+"**");
                }
                inputTool.value="";
                inputTool.focus();
            });
          }
        }
        btnClose.onclick=function(){
          //e.preventDefault();
          var tooltip=document.getElementById(divTool.id);
          tooltip.classList.toggle("show");
        }
        idAgentSection.appendChild(articleAgent);
      });
    }
    // this.addResource=function(element){
    //   // this.resources.push(element);
    //   // alert(this.resources+"new");
    // }
}


// if(typeof exports!=undefined){
//   exports.Portafolio=Portafolio;
// }
