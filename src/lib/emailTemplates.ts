export interface MailTemplateProps {
    title: string;
    headerTitle: string;
    headerColor?: string;
    headerTitleColor?: string;
    contentHtml: string;
    footerText?: string;
}

export const getBaseMailTemplate = ({
    title,
    headerTitle,
    headerColor = "#E33A36",
    headerTitleColor = "#ffffff",
    contentHtml,
    footerText,
}: MailTemplateProps) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>${title}</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border: 2px solid #dddddd; }
        .header { background-color: ${headerColor}; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; color: ${headerTitleColor}; }
        .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
        .content h2 { color: #111111; font-size: 20px; margin-top: 0; }
        .details-box { background-color: #f9f9f9; border: 1px solid #eeeeee; border-radius: 4px; padding: 20px; margin-top: 20px; }
        .details-row { margin-bottom: 15px; }
        .details-row:last-child { margin-bottom: 0; }
        .label { font-weight: 600; color: #555555; display: inline-block; width: 150px; }
        .value { color: #111111; font-weight: 500; }
        .footer { background-color: #111111; padding: 20px; text-align: center; color: #aaaaaa; font-size: 14px; border-top: none; }
        .btn { display: inline-block; background-color: #111111; color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 600; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="${process.env.SITE_URL}/images/logo-white.png" alt="Safal Logo" style="max-height: 50px; margin-bottom: 15px; display: block; margin-left: auto; margin-right: auto;" />
            <h1>${headerTitle}</h1>
        </div>
        <div class="content">
            ${contentHtml}
        </div>
        <div class="footer">
            <p>${footerText || `&copy; ${new Date().getFullYear()} Safal. All rights reserved.`}</p>
            <p style="margin: 5px 0 0 0;">
                <a href="tel:+919737045561" style="color: #ffffff; text-decoration: none;">
                    <span style="font-size: 16px; margin-right: 4px;">&#9742;</span> +91 97370 45561
                </a> 
                <span style="margin: 0 10px; color: #555555;">|</span>
                <a href="mailto:hello@safalinfosoft.com" style="color: #ffffff; text-decoration: none;">
                    <span style="font-size: 16px; margin-right: 4px;">&#9993;</span> hello@safalinfosoft.com
                </a>
            </p>
        </div>
    </div>
</body>
</html>
`;
