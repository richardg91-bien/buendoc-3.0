import mongoose, { ConnectOptions} from 'mongoose'
import config from './config'

(async () => {
    try { 
    const mongooseOptions: ConnectOptions = {
        
        user: config.MONGO_USER,
        pass: config.MONGO_PASSWORD
    }
    const db = await mongoose.connect('mongodb+srv://yara25767:yara25767@cluster0.iccrv.mongodb.net/professioonalsdb?retryWrites=true&w=majority', mongooseOptions); 
     console.log('databe is connected:', db.connection.name)
    } catch (error) {
    console.error(error)
}
})()

