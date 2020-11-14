import { Document } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  readonly role: string;
  readonly password: string;
}
