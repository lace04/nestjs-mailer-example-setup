import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeEmail() {
    await this.mailerService.sendMail({
      to: 'myempiregoz@gmail.com',
      from: '"No Reply" <myempiregoz3@outlook.com>', // cambia esta opción
      subject: 'Testing Nest MailerModule ✔ desde nestjs',
      text: 'welcome',
      html: '<b>welcome</b>',
    });
  }
}
