import { createClient } from "@supabase/supabase-js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const formData: ContactFormData = await req.json();
    const { firstName, lastName, email, subject, message } = formData;

    if (!firstName || !lastName || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const emailContent = `
New Contact Form Submission from H3 Boxing Website

From: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from the H3 Boxing contact form.
Reply directly to: ${email}
    `;

    // Store submission first
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      first_name: firstName,
      last_name: lastName,
      email: email,
      subject: subject,
      message: message,
      email_sent: false,
    });

    if (dbError) {
      console.error("Database error:", dbError);
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "noreply@h3boxing.com",
        to: ["hiseni@h3boxing.com"],
        reply_to: email,
        subject: `Kontakt Formular: ${subject}`,
        text: emailContent,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);
      throw new Error(`Resend API error: ${JSON.stringify(resendData)}`);
    }

    // Update database to mark email as sent
    if (!dbError) {
      await supabase
        .from("contact_submissions")
        .update({ email_sent: true })
        .eq("email", email)
        .eq("subject", subject)
        .order("created_at", { ascending: false })
        .limit(1);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully",
        emailId: resendData.id 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in send-email function:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "An unexpected error occurred" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});