import nodemailer from "nodemailer";
// HMR trigger

interface MailOptions {
    to: string | string[];
    subject: string;
    html: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    attachments?: any[];
}

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000,
    tls: {
        rejectUnauthorized: false
    }
});

export const sendMail = async ({ to, subject, html, attachments }: MailOptions) => {
    try {
        const info = await transporter.sendMail({
            from: `"Safal" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
            to,
            subject,
            html,
            attachments,
            });
            console.log("Message sent: %s", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Error sending email: ", error);
        return { success: false, error };
    }
};