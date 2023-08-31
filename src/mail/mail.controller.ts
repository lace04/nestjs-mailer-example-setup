import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Get()
  sendWelcomeEmail() {
    return this.mailService.sendWelcomeEmail();
  }
}
