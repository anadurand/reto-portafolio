window.addEventListener('load',function(){
  var idSection=document.getElementById('section');
  var agents=[{domain:"bjstdmngbgr02.thoughtworks.com",type:"idle",ip:"192.168.1.2",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr03.thoughtworks.com",type:"building",ip:"192.168.1.3",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr04.thoughtworks.com",type:"building",ip:"192.168.1.4",directory:"/var/lib/cruise-agent"},
              {domain:"bjstdmngbgr05.thoughtworks.com",type:"idle",ip:"192.168.1.5",directory:"/var/lib/cruise-agent"}];

  var agent=new Agents(agents);
  agent.createAgents(idSection);
  //agent.addResource("f");
});
