import mongoose, { Schema } from 'mongoose'

const noteSchema = new mongoose.Schema({
    Id:String,
    Department: String,
    Last_Name: String,
    First_Name: String,
    Phone: String,
    Email: String,
    State: String,
    Owner:String,
    Mailing_Street:String,
    Mailing_City:String,
    Mailing_State:String,
    Mailing_Zip:String,
    Mailing_Country:String,
})

const Contact = mongoose.model('contacts', noteSchema)

export { Contact }