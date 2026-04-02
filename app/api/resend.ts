import { Resend } from "resend";

const resend = new Resend("re_4HGvdWyD_PKvZzahFbMhxESLEwfB7NgHf");

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "mituya1884tansan@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});
