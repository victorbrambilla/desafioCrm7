import { Request, Response } from 'express'
import * as note from '../services/note'
import { error } from '../libs/bindError'

const list = async (req: Request<any>, res: Response<any>) => {
        try {
            const noteList = await note.list()

            return res.json(noteList)
        } catch (err: any) {
            return error(res, err)
        }

}

const create = async (req: Request<any>, res: Response<any>) => {
    try {
        JSON.parse(JSON.stringify(req.body))
        const Department = req.body.Department
        const Last_Name = req.body.Last_Name
        const First_Name = req.body.First_Name
        const Phone = req.body.Phone
        const Email = req.body.Email
        const Owner = req.body.Owner
        const Id = req.body.Id
        const Mailing_Street = req.body.Mailing_Street
        const Mailing_City = req.body.Mailing_City
        const Mailing_State = req.body.Mailing_State
        const Mailing_Zip = req.body.Mailing_Zip
        const Mailing_Country = req.body.Mailing_Country

        const noteCreated = await note.create({ Department, Last_Name, First_Name, Phone, Email, Owner,Id, Mailing_Street, Mailing_City, Mailing_State, Mailing_Zip, Mailing_Country })

        return res.json(noteCreated)
    } catch (err: any) {
        return error(res, err)
    }

  
}

const update = async (req: Request<any>, res: Response<any>) => {
    try {
        console.log('body:',req.body)
        JSON.parse(JSON.stringify(req.body))
        const Department = req.body.Department
        const Last_Name = req.body.Last_Name
        const First_Name = req.body.First_Name
        const Phone = req.body.Phone
        const Email = req.body.Email
        const Owner = req.body.Owner
        const Id = req.body.Id
        const Mailing_Street = req.body.Mailing_Street
        const Mailing_City = req.body.Mailing_City
        const Mailing_State = req.body.Mailing_State
        const Mailing_Zip = req.body.Mailing_Zip
        const Mailing_Country = req.body.Mailing_Country

        const noteCreated = await note.update({ Department, Last_Name, First_Name, Phone, Email, Owner,Id, Mailing_Street, Mailing_City, Mailing_State, Mailing_Zip, Mailing_Country  })
        
        return res.json(noteCreated)
    } catch (err: any) {
        return error(res, err)
    }

}

const remove = async (req: Request<any>, res: Response<any>) => {
    try {
        const id = req.query.id

        await note.remove(id)
        
        res.json({ success: true })
    } catch (err: any) {
        return error(res, err)
    }
}

export {
    list,
    create,
    update, 
    remove
}