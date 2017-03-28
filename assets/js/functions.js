function Agents(properties){
    this.properties=properties;
    this.allResources=[];
    this.addResource=function(arrayElement){
      console.log(arrayElement);
      for(var i=0;i<classElement.length;i++){
        this.allResources[i]=arrayElement[i].outerText;
      }
      console.log(this.allResources);
    };
    this.createAgents=function(idAgentSection){
      var space="&nbsp; | &nbsp;";

      this.properties.forEach(function(e,i){//creacion de nodos
        var articleAgent=document.createElement('article');
        articleAgent.className=e.type;//+" container";
        var divImage=document.createElement('img');
        divImage.className="imgclass";
        divImage.setAttribute("src",'assets/images/pc.png');
        articleAgent.appendChild(divImage);

        var divElements=document.createElement('div');
        divElements.className="elements";
        var pProperties=document.createElement('p');
        pProperties.innerHTML="<b>"+e.domain+space+e.type+space+e.ip+space+e.directory+"</b>";
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
          spanDeny.innerHTML="<img src='assets/images/block.png'><span style='text-decoration: underline'>Deny</span>";
          articleAgent.appendChild(spanDeny);
        }

    //Crea tooltip
        var divTool=document.createElement('div');
        divTool.id="tooltip"+i;
        divTool.className="container";
        divTool.innerHTML="<p>(Separate multiple resources name with commas)</p>";
        var pTool=document.createElement('p');
        var inputTool=document.createElement('input');
        inputTool.id="idResource"+i;
        var btnAddResource=document.createElement('button');
        btnAddResource.id="btn"+i;
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
            if(!event.toElement.matches('.specify')){
              tooltip.classList.remove('show');
            }
          }
          console.log(e);
        });

        var arrIdResorces=[], idElement=0;
        btnAddResource.onclick=function(e){
          if(inputTool.value.trim().length==0){
            alert("Debe ingresar algun recurso");
            return false;
          }else {
            var arrInput=inputTool.value.trim().split(",");
            arrInput.forEach(function(e,id){
                var newResource=document.createElement('span');
                var spanTexto=document.createElement('span');
                var btnDelete=document.createElement('img');
                btnDelete.className='btndelete';
                //si usamos id de function este se reinicia en 0 x cada click
                newResource.id=idElement;//"recurso"+i+id+idElement;
                newResource.className="resource";
                spanTexto.innerHTML=e;
                btnDelete.src='assets/images/clear.png';
                newResource.appendChild(spanTexto);
                newResource.appendChild(btnDelete);
                spanResources.appendChild(newResource);

                //añade al array recursos los elementos de recurso creados
                //arrayResources.push(newResource);
                arrIdResorces.push(idElement);
                idElement++;

                /*Event click boton Delete*/
                btnDelete.onclick=function(e){
                  var idPadre=e.target.parentNode.getAttribute('id');
                  spanResources.removeChild(newResource);
                  //-------arreglar
                  //newArr.splice(idPadre,1);
                  //arrayResources.splice(idPadre,1);
                //  console.log(newArr);
                }
                inputTool.value="";
                inputTool.focus();

            });//fin forEach btnAddResource
          }
        }//fin inclick btnAddResource

        /*Event click boton Close*/
        btnClose.onclick=function(){
          var tooltip=document.getElementById(divTool.id);
          tooltip.classList.remove("show");
        }

        /*Fragment*/
        var frag = document.createDocumentFragment();
        frag.appendChild(articleAgent);
        idAgentSection.appendChild(frag);
      });
    };
}

if(typeof exports!=='undefined'){
  exports.Agents=Agents;
}
