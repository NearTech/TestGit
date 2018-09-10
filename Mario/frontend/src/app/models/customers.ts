export class Customers {
    constructor(
        _id = "", 
        alias = "", 
        status = true, 
        planContract = "", 
        contactName = "", 
        contactEmail = "", 
        businessArea = ""
    ) {
        this._id = _id, 
        this.alias = alias, 
        this.status = status, 
        this.planContract = planContract, 
        this.contactName = contactName, 
        this.contactEmail = contactEmail, 
        this.businessArea = businessArea
    }
    
    _id: string;
    alias: string;
    status: boolean;
    planContract: string;
    contactName: string
    contactEmail: string;
    businessArea: string
}
