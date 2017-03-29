window.addEventListener('load',function(){
  var idSection=document.getElementById('section');
  var agents=[{domain:"bjstdmngbgr02.thoughtworks.com",type:"idle",ip:"192.168.1.2",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr03.thoughtworks.com",type:"building",ip:"192.168.1.3",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr04.thoughtworks.com",type:"building",ip:"192.168.1.4",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr05.thoughtworks.com",type:"idle",ip:"192.168.1.5",directory:"/var/lib/cruise-agent"}];

  var arr=[];
  var agent=new Agents(agents);
  agent.createAgents(idSection);

  var classResource=document.getElementsByClassName('resource');
  var btn=document.getElementsByClassName('btndelete');

  document.getElementById('pp').onclick=function(){
    for(var i=0;i<classResource.length;i++){
      arr[i]=classResource[i].outerText;
    }
    agent.addResource(arr);

  }
    // for(var j=0;j<btn.length;j++){
    //   btn[j].onclick=function(){
    //     arr.splice(j,1);
    //     console.log(arr);
    //   }
    // }
});
