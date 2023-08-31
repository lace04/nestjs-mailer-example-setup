import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
import { MailController } from './mail.controller';

//dotenv
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MailerModule.forRoot({
      // configura el transporte aquí, por ejemplo: 
      transport: {
        host: process.env.MAILER_HOST,
        port: 587, //process.env.MAILER_PORT,
        secure: false, // cambia esta opción a false
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASS,
        },
        tls: {
          ciphers: 'SSLv3', // agrega esta opción
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
  controllers: [MailController],
})
export class MailModule {}
