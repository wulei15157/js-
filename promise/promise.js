
var fs = require('fs')
var path = require('path')

var ss =  
new Promise(function(resolved,rejected){
  fs.readFile(path.join(__dirname,'./ceshi.js'),'utf8', function(err,data){
if(err){
   rejected(err)
 }else {
resolved(data)
 }
  })
 })

 

 var ss1  =
new Promise(function( ,rejected){
  fs.readFile(path.join(__dirname,'./ceshi.js'),'utf8', function(err,data){
if(err){
   rejected(err)
 }else {
resolved(data)
 }
  })
 })

 


ss.then(function(data){
console.log(data)
return ss1
}).then(function(data){

	console.log(data)
})