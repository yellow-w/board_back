import { Sequelize } from "sequelize-typescript";
import options from "../config/config";
import Board from "./Board.model";


const mode = process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'development';
const config = options[mode]

const sequelize: Sequelize = new Sequelize({
    ...config,
    models: [__dirname + "/*.model.ts"]
})
// sequelize.addModels([Board])

export default sequelize;