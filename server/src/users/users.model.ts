import { BelongsToMany, Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { UserRoles } from "src/roles/user-roles.model";
import { Role } from "src/roles/roles.model";
import { Basket } from "src/basket/basket.model";

interface UserCreationAttrs {
    email: string;
    password: string;
    activationLink: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isActivated: boolean

    @Column({type: DataType.STRING, allowNull: false})
    activationLink: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasOne(() => Basket)
    basketId: number
}