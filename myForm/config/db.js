const mongoose=require('mongoose')
const colors=require('colors')

const db=async ()=>{ 
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connected ".bgMagenta.white)
    } catch (error) {
        console.log('Error while connecting to database'.bgRed.white)
    }
}

module.exports= db