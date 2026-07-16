import { sendMail } from './lib/sendMail.js';

async function test() {
  const result = await sendMail({
    to: "test@example.com",
    subject: "Test Mail",
    html: "<p>This is a test</p>"
  });
  console.log(result);
}

test();
