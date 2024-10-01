
import { MailtrapClient } from "mailtrap";
import dotnev from "dotenv"
dotnev.config();
const TOKEN = process.env.MAILTRAP_TOKEN;

 export const Mailtrapclient = new MailtrapClient({
  token: TOKEN,
});

 export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};

