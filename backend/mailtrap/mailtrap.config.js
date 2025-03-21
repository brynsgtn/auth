import { MailtrapClient } from 'mailtrap';
import dotenv from 'dotenv';

dotenv.config();

export const mailTrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@brynsgtn.online",
  name: "Bryan",
};

