import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  surname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  phoneOrEmail: string;

  @Column()
  birthday: string;

  @Column()
  gender: string;

  @Column({ default: Date.now() })
  created_at: string;

  @Column({ default: Date.now() })
  updated_at: string;
}
