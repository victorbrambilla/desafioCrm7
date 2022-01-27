interface IContact {
    Id:any,
    Department?: string,
    Last_Name?: string,
    First_Name?: string,
    Phone?: string,
    Email?: string,
    Owner?:string,
    Mailing_Street?:String,
    Mailing_City?:String,
    Mailing_State?:String,
    Mailing_Zip?:String,
    Mailing_Country?:String,
}

export {
    IContact
}