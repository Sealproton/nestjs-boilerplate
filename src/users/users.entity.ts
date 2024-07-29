import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user', synchronize: true })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userType: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
