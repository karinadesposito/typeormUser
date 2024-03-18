// import { MaxLength } from "typeorm";
import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"


@Entity({name: 'users'})
export class User {
@PrimaryGeneratedColumn()
id:number;

@Column({unique:true})
username:string;

@Column({nullable:false})
password:string;

@Column({type: "datetime", default:()=>'CURRENT_TIMESTAMP'})
createdAt:Date;

@Column({nullable:true})
authStrategy:string;

}
