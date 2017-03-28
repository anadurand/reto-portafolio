function Agents(properties){
    this.properties=properties;
    //this.image=image;
    this.resources=[];
    this.createAgents=function(idAgentSection){
      var space="&nbsp; | &nbsp;";
      var arrayResources=this.resources;
      console.log(arrayResources);
      var idElement=0;
      this.properties.forEach(function(e,i){
        //creacion de nodos
        var articleAgent=document.createElement('article');
        articleAgent.className=e.type;
        var divImage=document.createElement('img');
        divImage.className="imgclass panel-body";
        divImage.setAttribute("src",'assets/images/pc.png');
        articleAgent.appendChild(divImage);

        var divElements=document.createElement('div');
        divElements.className="panel-body";
        var pProperties=document.createElement('p');
        pProperties.innerHTML="<b>"+e.domain+"</b>"+space+e.type+space+e.ip+space+e.directory;
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
        spanResources.innerHTML=space+"Resources: &nbsp;";
        divResources.appendChild(spanResources);
        divElements.appendChild(divResources);
        articleAgent.appendChild(divElements);

        if(e.type=="idle"){
          var spanDeny=document.createElement('span');
          spanDeny.className='deny';
          spanDeny.innerHTML="<i class='glyphicon glyphicon-ban-circle'></i> <u>Deny</u>";
          divElements.appendChild(spanDeny);
        }

    //Crea tooltip
        var divTool=document.createElement('div');
        divTool.id="tooltip"+i;
        divTool.innerHTML="<h6>(Separate multiple resources name with commas)</h6>";
        var pTool=document.createElement('p');
        var inputTool=document.createElement('input');
        inputTool.className="form-control";
        inputTool.id="idResource"+i;
        var btnAddResource=document.createElement('button');
        btnAddResource.className="btnTooltip";
        btnAddResource.innerHTML="Add resource";
        var btnClose=document.createElement('button');
        btnClose.className="btnTooltip";
        btnClose.innerHTML="Close";
        pTool.appendChild(inputTool);
        divTool.appendChild(pTool);
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
                var btnDelete=document.createElement('i');
                spanTexto.className='resource';
                btnDelete.className='glyphicon glyphicon-remove-circle btnDelete';

                //si usamos id de function este se reinicia en 0 x cada click
                //newResource.id="recurso"+id;
                newResource.id="recurso"+idElement;
                spanTexto.innerHTML=e;
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

}

if(typeof exports!=='undefined'){
  exports.Agents=Agents;
}
