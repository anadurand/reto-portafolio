<<<<<<< HEAD
//Mostrar y Ocultar contenidos de tabs
var dashboard=document.getElementById('dashboard');
var mycruise=document.getElementById('mycruise');
var agents=document.getElementById('agents');
var help=document.getElementById('help');
var contents=document.getElementsByClassName('tab');
function show(element){
  element.style.display="block";
}

function hidden(element1,element2,element3){
  element1.style.display="none";
  element2.style.display="none";
  element3.style.display="none";
}

contents[0].onclick=function(){
  show(dashboard);
  hidden(mycruise,agents,help);
}
contents[1].onclick=function(){
  show(mycruise);
  hidden(dashboard,agents,help);
}
contents[2].onclick=function(){
  show(agents);
  hidden(dashboard,mycruise,help);
}
contents[3].onclick=function(){
  show(help);
  hidden(dashboard,mycruise,agents);
}
=======
var agents = [ { nombre : "bjstdmngbgr02.thoughtworks.com", estado : "idle",  ip : "192.168.1.2", directorio : "/var/lib/cruise-agent" },
			 { nombre : "bjstdmngbgr02.thoughtworks.com", estado : "idle",  ip : "192.168.1.2", directorio : "/var/lib/cruise-agent"  },
			 {nombre : "bjstdmngbgr02.thoughtworks.com", estado : "idle",  ip : "192.168.1.2", directorio : "/var/lib/cruise-agent" },
			 {nombre : "bjstdmngbgr02.thoughtworks.com", estado : "idle",  ip : "192.168.1.2", directorio : "/var/lib/cruise-agent" }];
>>>>>>> frontend
