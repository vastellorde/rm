import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AuthModule} from './auth/auth.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/relaxed-moving/browser')
    }),
    MongooseModule.forRoot('mongodb+srv://rm-admin:s8i9qqduW8MVRrmg@cluster0.ckj0p.mongodb.net/rm?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    AuthModule
  ],
  controllers: [
    AppController
  ]
})
export class AppModule {}
