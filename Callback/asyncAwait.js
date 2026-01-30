function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('login')
            resolve()
        },2000)
    })
}

function userDetail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log('userdetail');
        },1000)
    })
}
function logout(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log('Logout');
        },4000)
    })
} 

async function demo(){
    try{
        await login();
        await userDetail();
        await logout()
    }
    catch(error){
        console.log('error',error)
    }
    console.log('all task done');

}
demo();