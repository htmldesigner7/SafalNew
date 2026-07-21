import { sendMail } from './src/lib/sendMail';

async function test() {
  console.log("Sending mail...");
  const result = await sendMail({
    to: "test@example.com",
    subject: "Test Mail",
    html: "<p>This is a test</p>"
  });
  console.log(result);
  process.exit(0);
}

test();
