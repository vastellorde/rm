import {ConflictException, Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User} from './models/user.model';
/*import * as bcrypt from 'bcrypt';*/

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private jwtService: JwtService) {
  }

  async signUp(authCredentialsDto: {username: string, password: string}): Promise<void> {
    const { username, password } = authCredentialsDto;

    /*const hashedPassword = await bcrypt.hash(password, 10);*/

    const user = new this.userModel({ username, password: password });

    try {
      await user.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }

  async signIn(user: User): Promise<any> {
    const payload = { username: user.username, sub: user._id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userModel.findOne({ username });

    if (user && pass === user.password) {
      return user;
    }

    return null;
  }
}
