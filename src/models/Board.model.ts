import { AutoIncrement, Column, Default, Model, AllowNull, PrimaryKey, Table, DataType } from "sequelize-typescript";


@Table({
    modelName: 'Board',
    omitNull: true,
    timestamps: true,   //default
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'
})

export default class Board extends Model {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    public idx?: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(100)
    })
    public subject?: string;

    @AllowNull(false)
    @Column({
        type: DataType.TEXT({length:'tiny'})
    })
    public content?: string;

    @AllowNull(false)
    @Default(0)
    @Column({
        type: DataType.INTEGER
    })
    public hit?: number;
}

