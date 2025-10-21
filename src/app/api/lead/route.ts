import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields (handle both forms - Hero and Contact)
    const { name, email, business, phone, contactNumber, service, services, message } = body
    
    if (!name || !email || !business) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const leadId = `LEAD-${Date.now()}`
    const timestamp = new Date().toISOString()

    // Log the submission
    console.log('New lead submission:', {
      leadId,
      name,
      email,
      business,
      phone,
      contactNumber,
      service,
      services,
      message,
      timestamp,
      userAgent: request.headers.get('user-agent') || 'unknown'
    })

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Prepare email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1e3a5f; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1e3a5f; display: block; margin-bottom: 5px; }
            .value { padding: 10px; background-color: white; border-left: 3px solid #1e3a5f; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
            .services-list { list-style: none; padding: 0; }
            .services-list li { padding: 5px 0; padding-left: 20px; position: relative; }
            .services-list li:before { content: "✓"; position: absolute; left: 0; color: #1e3a5f; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Lead Submission</h1>
              <p>Track Accounting Contact Form</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Lead ID:</span>
                <div class="value">${leadId}</div>
              </div>
              
              <div class="field">
                <span class="label">Full Name:</span>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <span class="label">Business Name:</span>
                <div class="value">${business}</div>
              </div>
              
              <div class="field">
                <span class="label">Email Address:</span>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <span class="label">Phone Number:</span>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              
              ${contactNumber ? `
              <div class="field">
                <span class="label">Contact Number:</span>
                <div class="value"><a href="tel:${contactNumber}">${contactNumber}</a></div>
              </div>
              ` : ''}
              
              ${service ? `
              <div class="field">
                <span class="label">Service Needed:</span>
                <div class="value">${service}</div>
              </div>
              ` : ''}
              
              ${services && services.length > 0 ? `
              <div class="field">
                <span class="label">Services Requested:</span>
                <div class="value">
                  <ul class="services-list">
                    ${services.map((service: string) => `<li>${service}</li>`).join('')}
                  </ul>
                </div>
              </div>
              ` : ''}
              
              ${message ? `
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <span class="label">Submitted At:</span>
                <div class="value">${new Date(timestamp).toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Track Accounting website contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
New Lead Submission - Track Accounting

Lead ID: ${leadId}
Name: ${name}
Business: ${business}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${contactNumber ? `Contact Number: ${contactNumber}` : ''}
${service ? `Service Needed: ${service}` : ''}
${services && services.length > 0 ? `\nServices:\n${services.map((s: string) => `- ${s}`).join('\n')}` : ''}
${message ? `\nMessage:\n${message}` : ''}

Submitted: ${new Date(timestamp).toLocaleString()}
    `

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || 'Track Accounting <noreply@trackaccounting.ca>',
        to: process.env.EMAIL_TO || 'admin@trackaccounting.ca',
        subject: `New Lead: ${name} from ${business}`,
        text: emailText,
        html: emailHtml,
      })
      
      console.log(`✅ Email sent successfully for lead ${leadId}`)
    } catch (emailError) {
      console.error('❌ Error sending email:', emailError)
      // Still return success to user even if email fails
      // You can decide to return an error instead if you prefer
    }

    return NextResponse.json(
      { 
        message: 'Lead submitted successfully',
        leadId
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing lead submission:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}




