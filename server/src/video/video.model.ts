import { Column, DataType, Model, Table } from "sequelize-typescript";

interface VideoCreationAttrs {
    img: string
    href: string
    video: string
    title: string
    year: number
    type: string
}

@Table({tableName: 'videos'})
export class Video extends Model<Video, VideoCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    href: string

    @Column({type: DataType.STRING, allowNull: false})
    img: string

    @Column({type: DataType.STRING, allowNull: false})
    video: string

    @Column({type: DataType.STRING, allowNull: false})
    title: string

    @Column({type: DataType.STRING})
    description: string

    @Column({type: DataType.STRING})
    country: string

    @Column({type: DataType.STRING})
    genre: string

    @Column({type: DataType.INTEGER, allowNull: false})
    year: number

    @Column({type: DataType.STRING, allowNull: false})
    type: string

    @Column({type: DataType.STRING})
    translate: string

    @Column({type: DataType.STRING})
    quality: string

    @Column({type: DataType.STRING})
    director: string
}