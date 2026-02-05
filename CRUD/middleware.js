
import fs from "fs"

let logfun = (req,res,next)=>{
   let logText = `timestamp: ${new Date().toString()} url ${req.url} method ${req.method} \n`

   fs.appendFileSync("./log.txt", logText)

    console.log(log)
    next()
}
export default logfun;