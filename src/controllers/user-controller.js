import User from "../models/User.js"


export const getAllUsers = async (req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}


export const createUser = async (req,res)=>{
    const {name,email,whatsapp}= req.body
    try{
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({message:"esse email já está cadastrado"})
        }
        if(!name){
            return res.status({message:'o nome é necessário'})
        }
        if(!email){
            return res.status({message:'o email é necessário'})
        }
        if(!whatsapp){
            return res.status({message:'o whatsapp é necessário'})
        }
        const user = await User.create(req.body)
        res.status(201).json(user)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

