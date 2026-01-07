import { resendClient } from "../lib/resend.js"
import { createPersonalizedWelcomeEmail } from "./emailTemplates.js"
import { sender } from "../lib/resend.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
    const {data, error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to : email, 
        subject : "Welcome to ChatApp",
        html: createPersonalizedWelcomeEmail(name, clientURL),
    });

    if(error)
    {
        console.error("Error sending welcome email: ", error);
        throw new Error ("Failed to send welcome email");
    }

    console.log("Welcome email sent successfully");
};