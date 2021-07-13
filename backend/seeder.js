import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import User from './models/userModels.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try{
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[2]._id

        console.log('Data Imported!')
        process.exit()
    } catch(error){
        console.log(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[2]._id

        console.log('Data Imported!')
        process.exit()
    } catch(error){
        console.log(`${error}`)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}