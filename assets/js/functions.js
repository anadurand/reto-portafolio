function Agents(properties){
      this.properties=properties;
      this.allResources=[];
      this.addResource=function(arrayElement){
        //console.log(arrayElement);
        this.allResources=arrayElement;
        // for(var i=0;i<arrayElement.length;i++){
        //   this.allResources[i]=arrayElement[i].outerText;
        // }
        console.log(this.allResources);
      };
      this.createAgents=function(idAgentSection){
        var space="&nbsp; | &nbsp;";

        this.properties.forEach(function(e,i){//creacion de nodos
          var articleAgent=document.createElement('article');
          articleAgent.className=e.type;//+" container";
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
              if(!event.toElement.matches('.specify')){
                tooltip.classList.remove('show');
              }
            }
            console.log(e);
          });

          var arrayResources=[], idElement=0;
          btnAddResource.onclick=function(e){
            var arrResource=inputTool.value.trim().split(",");
            if(inputTool.value.trim().length==0){
              alert("Debe ingresar algun recurso");
              inputTool.value="";
              return false;
            }else {
              //console.log(arrResource);
              arrResource.forEach(function(e,id){
                  var newResource=document.createElement('span');
                  var spanTexto=document.createElement('span');
                  var btnDelete=document.createElement('img');
                  newResource.id=idElement;//"recurso"+i+id+idElement;
                  newResource.className="resource";
                  spanTexto.innerHTML=e.trim();
                  btnDelete.className="btndelete";//'glyphicon glyphicon-remove-circle btnDelete';
                  btnDelete.src="assets/images/clear.png";
                  newResource.appendChild(spanTexto);
                  newResource.appendChild(btnDelete);
                  spanResources.appendChild(newResource);

                  //añade al array recursos los elementos de recurso creados
                  //arrayResources.push(e);
                  arrayResources.push(newResource)
                  // console.log(arrayResources);
                  idElement++;

                  /*Event click boton Delete*/
                  btnDelete.onclick=function(e){
                    var idPadre=e.target.parentNode.getAttribute('id');
                    console.log(idPadre);
                    spanResources.removeChild(newResource);
                    //-------arreglar
                    arrayResources.splice(idPadre,1);
                    console.log(arrayResources);
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
