import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.HELLO)
export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE ||'professionalsdb',
    MONGO_USER: process.env.MONGO_USER || 'yara25767', 
    MONGO_PASSWORD:  process.env.MONGO_PASSWORD ||'yara25767', 
    MONGO_HOST:  process.env.MONGO_HOST ||  'localhost',
    PORT: process.env.PORT || 4000
}