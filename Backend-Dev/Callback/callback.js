function fun(){
    console.log("hello")
}
function save(cb){
    console.log("save function")
    cb()
}
save(fun)

save(()=>{
    console.log("hello")
})

let arr=[1,2,3,4,5];
function printArrayEle(element){
    console.log(element)
}
arr.forEach(printArrayEle)
