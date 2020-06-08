const si = require("systeminformation");
//const promise = require('promise');

class hardWareDetails{

  
  constructor(){}

  // let HardwareDetails={
  //    systemData :'',
  //   biosData:'',
  //   baseboardData:'',
  //   chassisData:''
  //   }


getSystemDetails () {
    return new Promise((resolve, reject) => {
  
      si.system().then(data=>resolve(data)).catch(err=>reject(err))
    })
 
}
getBiosDetails(){
   
  return new Promise((resolve, reject) => {
  
    si.bios().then(data=>resolve(data)).catch(err=>reject(err))
  })
  

}
getBaseboardDetails(){
  return new Promise((resolve,reject)=>{

    si.baseboard().then(data=> resolve(data)).catch(err=>reject(err))
  })

}
getChassisDetails(){
  return new Promise((resolve,reject)=>{

    si.chassis().then(data =>resolve(data)).catch(err=>reject(err))
  })

}


}

module.exports=hardWareDetails;

