import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, business, contactNumber, service, message } = body
    
    // Create a simple email using a webhook service
    const emailData = {
      to: 'admin@trackaccounting.ca',
      from: 'noreply@trackaccounting.ca',
      subject: `New Lead: ${name} from ${business}`,
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Contact Number:</strong> ${contactNumber || 'Not provided'}</p>
        <p><strong>Service Needed:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No additional message'}</p>
        <hr>
        <p><em>This lead was submitted from the Track Accounting website.</em></p>
      `,
      text: `
New Lead Submission

Name: ${name}
Email: ${email}
Business: ${business}
Contact Number: ${contactNumber || 'Not provided'}
Service Needed: ${service || 'Not specified'}
Message: ${message || 'No additional message'}

This lead was submitted from the Track Accounting website.
      `
    }

    // For now, we'll use a simple approach - log the email and return success
    // You can later integrate with services like SendGrid, Mailgun, or Resend
    console.log('📧 EMAIL TO SEND:', JSON.stringify(emailData, null, 2))
    
    // Simulate email sending (replace with actual email service)
    const emailId = `EMAIL-${Date.now()}`
    
    return NextResponse.json({
      success: true,
      message: 'Email queued for sending',
      emailId,
      note: 'Email data logged - check function logs for details'
    })

  } catch (error: any) {
    console.error('Error processing email:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Failed to process email',
      details: error?.message || 'Unknown error'
    }, { status: 500 })
  }
}
