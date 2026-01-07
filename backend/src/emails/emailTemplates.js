export function createPersonalizedWelcomeEmail(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Welcome Aboard 🎉</title>
  </head>

  <body style="margin:0; padding:0; background-color:#eef2f7; font-family: Arial, Helvetica, sans-serif; color:#333;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
      <tr>
        <td align="center">
          
          <!-- Main container -->
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.08);">
            
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg, #667eea, #764ba2); padding:35px; text-align:center;">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
                  alt="Chat Icon"
                  width="70"
                  height="70"
                  style="background:#ffffff; padding:12px; border-radius:50%; margin-bottom:15px;"
                />
                <h1 style="margin:0; color:#ffffff; font-size:26px; font-weight:600;">
                  Welcome to Messenger
                </h1>
                <p style="margin:8px 0 0; color:#e0e0ff; font-size:14px;">
                  Let’s get you connected
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:35px;">
                <p style="font-size:18px; margin-top:0;">
                  Hey <strong>${name}</strong> 👋
                </p>

                <p style="font-size:15px; line-height:1.7;">
                  Thanks for signing up! Messenger is built to help you stay close to the people who matter —
                  fast chats, smooth sharing, and real-time conversations, all in one place.
                </p>

                <!-- Steps box -->
                <div style="background:#f4f6fb; border-radius:10px; padding:22px; margin:25px 0;">
                  <p style="margin:0 0 12px; font-weight:600; color:#555;">
                    Here’s how to get started:
                  </p>
                  <ol style="margin:0; padding-left:18px; font-size:14px; color:#555;">
                    <li style="margin-bottom:8px;">Complete your profile</li>
                    <li style="margin-bottom:8px;">Connect with people you know</li>
                    <li style="margin-bottom:8px;">Start chatting instantly</li>
                    <li>Share moments, files, and memories</li>
                  </ol>
                </div>

                <!-- CTA -->
                <div style="text-align:center; margin:35px 0;">
                  <a 
                    href="${clientURL}" 
                    style="background:linear-gradient(135deg, #667eea, #764ba2); 
                           color:#ffffff; 
                           padding:14px 36px; 
                           text-decoration:none; 
                           border-radius:30px; 
                           font-size:15px; 
                           font-weight:600;
                           display:inline-block;">
                    Launch Messenger 🚀
                  </a>
                </div>

                <p style="font-size:14px; color:#666;">
                  Need help or have questions? Just reply to this email — we’re happy to help.
                </p>

                <p style="margin-bottom:0;">
                  Cheers,<br/>
                  <strong>The Messenger Team</strong>
                </p>
              </td>
            </tr>

          </table>

          <!-- Footer -->
          <p style="font-size:12px; color:#999; margin-top:18px;">
            © 2025 Messenger • All rights reserved
          </p>

        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
