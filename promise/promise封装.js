const fs = require('fs')
var os = require('os')



function PreadFile(path){

return new Promise(function(resolve,reject){
fs.readFile(path, 'utf8', function(err,data){
if(err){
reject(err)

} else {resolve(data) }

})

})

}

PreadFile('./ceshi.js')
.then(function(data){
console.log(data)
return PreadFile('./ceshi.js')
}).then(function(data){
console.log(data)

})

async function test(){
    let n =await 摇色子() //async 异步 ，await 等待
    console.log(n)
}
test()

 os.cups() 