var assert=require('assert');
var appTest=require('../assets/js/functions.js');

//var agents=[];
var obj={};

describe('reto portafolio test',function(){
   var app;
   before(function(){
     app=new appTest.Agents();
   });
   it('valida si input tiene contenido',function(){
     assert.deepEqual(app.resources,recursos);
   });

   it('porder añadir recurso',function(){
     var recursos=[];
     app.addResource()
     assert.deepEqual(app.resources,recursos);

   });
   it('poder eliminar recurso',function(){
     //assert.deepEqual([],);
   });
});
