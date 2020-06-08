const hardWareDetailss=require('../service/hardwareDetails')

class hardwareDetailsController{ 
    

    constructor(){
        this. hdDets=new hardWareDetailss();
    }

getDetails= (req, res) => {

    const systD= this.hdDets.getSystemDetails();
    const biosD= this.hdDets.getBiosDetails();
    const baseboardD = this.hdDets.getBiosDetails();
    const chassisD = this.hdDets.getChassisDetails();

    Promise.all([
        systD.catch(err=>{return err;}),
        biosD.catch(err=>{return err;}),
        baseboardD.catch(err=>{return err;}),
        chassisD.catch(err =>{return err;})
    ])

    .then(values =>{
        const hardWareDetails ={
            'systemData':values[0],
            'biosData':values[1],
            'baseboardData':values[2],
            'chassisData': values[3]
        }
        console.log("---------------",hardWareDetails);
        return res.json(hardWareDetails)
    })

    .catch(err=>{
        return res.json(err)
    })
    

}

}
module.exports=hardwareDetailsController;