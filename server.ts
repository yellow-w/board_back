import express, {urlencoded} from 'express';
import dotenv from 'dotenv';
import router from './src/routes/index'
import sequelize from './src/models/index'

dotenv.config();
const PORT = process.env.PORT_BACK || 3007;
const app = express();

app.use(urlencoded({extended:true}));
app.use(express.json());
app.use('/api',router);

app.listen(PORT, async()=>{
    try {
        await sequelize.sync({force:false});
        console.log('db connected');
    } catch (e){
        if(e instanceof Error) console.log(e.message);
    }
    console.log(`back server running on port ${PORT}`)
})