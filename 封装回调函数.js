function fn(sss,callback){

setTimeout(function(){

var a='aaa'
var b='bbb'
console.log(sss)
 return  callback(a,b)   //实参数据
 },3000)
}



;(function (){

 	console.log('你好')
 })()


function ceshi(){

	var aaa='你好'
return aaa
}

 var hanshu=ceshi()
 console.log(hanshu+'return 函数')

 function bu(bb,aa){     //形参
 console.log(bb+'你好')
 
return  bb+aa   //return 不了形参

 }
 

 console.log(fn('sss',bu))
 


 function a(callback){
   alert("这是first函数a");
   var x =1;
   var callback=2;
  return callback(x,y);
 }


 var a=0;
for(var i=0;i<=9;i++)
{ console.log(i)
    for(var j=0;j<=9;j++)
    { if(j===4){break;}console.log(a++)
    }

}