import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, business, phone, services, message } = body
    
    if (!name || !email || !business || !phone || !services || services.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send confirmation email to user
    
    // For now, we'll just log the data and return success
    console.log('New lead submission:', {
      name,
      email,
      business,
      phone,
      services,
      message,
      timestamp: new Date().toISOString(),
      ip: request.ip || 'unknown'
    })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        message: 'Lead submitted successfully',
        leadId: `LEAD-${Date.now()}` // Generate a simple lead ID
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




