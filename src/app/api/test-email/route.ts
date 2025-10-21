import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET(request: NextRequest) {
  try {
    // Log environment variables
    console.log('Email configuration test:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
      user: process.env.EMAIL_USER,
      hasPassword: !!process.env.EMAIL_PASSWORD,
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO
    })

    // Test email configuration
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

    // Verify connection
    await transporter.verify()
    console.log('✅ Email configuration is valid')

    return NextResponse.json({
      success: true,
      message: 'Email configuration is working',
      config: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        user: process.env.EMAIL_USER,
        hasPassword: !!process.env.EMAIL_PASSWORD
      }
    })

  } catch (error: any) {
    console.error('❌ Email configuration test failed:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Email configuration failed',
      details: error?.message || 'Unknown error',
      config: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        user: process.env.EMAIL_USER,
        hasPassword: !!process.env.EMAIL_PASSWORD
      }
    }, { status: 500 })
  }
}
