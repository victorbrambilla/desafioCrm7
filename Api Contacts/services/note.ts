import { IContact } from "../types/IContact"
import { connect } from '../libs/mongodb'
import { Contact } from '../models/noteModel'

const list = async () => {
    await connect();
    const result = await Contact.find();

    return result
}


const create = async (note: IContact) => {
    await connect();
    await Contact.create(note);
        
    return true
  
}

const update = async (note: IContact) => {
    await connect();
    await Contact.findOneAndReplace({"Id": note.Id}, note);
    return true
}

const remove = async (id: any) => {
    await connect();
    await Contact.findOneAndRemove({"Id": id});
  
    return true
}

export {
    list,
    create,
    update,
    remove
}
