import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, business, contactNumber, service } = body
    
    if (!name || !email || !business) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const leadId = `LEAD-${Date.now()}`
    
    // Create a simple webhook payload
    const webhookData = {
      leadId,
      timestamp: new Date().toISOString(),
      name,
      email,
      business,
      contactNumber,
      service,
      source: 'Track Accounting Website'
    }

    // Log the lead data (this will be visible in Netlify function logs)
    console.log('📧 NEW LEAD SUBMISSION:', JSON.stringify(webhookData, null, 2))
    
    // For now, we'll just log the data and return success
    // You can later set up a webhook to send this to your email service
    
    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
      leadId,
      note: 'Lead data logged - check Netlify function logs'
    })

  } catch (error: any) {
    console.error('Error processing lead submission:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
