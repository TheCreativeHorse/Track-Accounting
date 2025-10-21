# Email Configuration Guide for Track Accounting

Your lead forms are now configured to send submissions to **admin@trackaccounting.ca**. Follow this guide to set up email delivery.

## Quick Setup Steps

### 1. Create Environment File

Create a file named `.env.local` in your project root (same folder as `package.json`) with the following content:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=Track Accounting <noreply@trackaccounting.ca>
EMAIL_TO=admin@trackaccounting.ca
```

### 2. Choose Your Email Provider

#### Option A: Using Gmail (Easiest for Testing)

1. **Enable 2-Step Verification** in your Google Account:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled

2. **Generate App Password**:
   - Visit https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Click "Generate"
   - Copy the 16-character password

3. **Update .env.local**:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   EMAIL_FROM=Track Accounting <noreply@trackaccounting.ca>
   EMAIL_TO=admin@trackaccounting.ca
   ```

#### Option B: Using Your Custom Domain Email (admin@trackaccounting.ca)

Contact your email hosting provider for SMTP settings. Common providers:

**For cPanel/Hosting Email:**
```env
EMAIL_HOST=mail.trackaccounting.ca (or your mail server)
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=admin@trackaccounting.ca
EMAIL_PASSWORD=your-email-password
EMAIL_FROM=Track Accounting <noreply@trackaccounting.ca>
EMAIL_TO=admin@trackaccounting.ca
```

**For Microsoft 365:**
```env
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=admin@trackaccounting.ca
EMAIL_PASSWORD=your-password
EMAIL_FROM=Track Accounting <admin@trackaccounting.ca>
EMAIL_TO=admin@trackaccounting.ca
```

#### Option C: Using Third-Party Email Services

**SendGrid:**
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
EMAIL_FROM=Track Accounting <noreply@trackaccounting.ca>
EMAIL_TO=admin@trackaccounting.ca
```

**Mailgun:**
```env
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=postmaster@your-domain.mailgun.org
EMAIL_PASSWORD=your-mailgun-password
EMAIL_FROM=Track Accounting <noreply@trackaccounting.ca>
EMAIL_TO=admin@trackaccounting.ca
```

### 3. Restart Your Development Server

After creating/updating `.env.local`:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### 4. Test the Forms

Visit http://localhost:3000 and submit a test lead through:
- The hero section form (top of page)
- The contact form (bottom of page)

Check your terminal for success messages:
- `✅ Email sent successfully for lead LEAD-xxxxx`

## What Each Form Sends

### Hero Form
- Name
- Email
- Business Name

### Contact Form (More Detailed)
- Name
- Email  
- Business Name
- Phone Number
- Services Interested In
- Additional Message

## Email Format

You'll receive beautifully formatted HTML emails with:
- 📧 Professional layout with Track Accounting branding
- 🎯 Lead ID for tracking
- 📊 All submitted information clearly organized
- 📅 Timestamp of submission
- 📱 Clickable phone and email links

## Troubleshooting

### Emails Not Sending?

1. **Check console output** - Look for error messages in the terminal
2. **Verify credentials** - Make sure EMAIL_USER and EMAIL_PASSWORD are correct
3. **Check spam folder** - Initial emails might go to spam
4. **Gmail users** - Make sure you're using an App Password, not your regular password
5. **Firewall** - Ensure port 587 is not blocked

### Testing Email Configuration

The form will still show success to users even if email fails (to prevent exposing errors). Check your terminal/console for the actual email sending status.

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add all environment variables in your hosting platform's settings
2. **Never commit `.env.local` to Git** (it's already in .gitignore)
3. Consider using a professional email service (SendGrid, Mailgun) for production
4. Set up proper SPF and DKIM records for your domain

## Security Notes

- ✅ Environment variables are kept secret (not in Git)
- ✅ Passwords are stored server-side only
- ✅ Forms have validation and error handling
- ✅ Email sending happens server-side (API route)

## Need Help?

If you encounter issues:
1. Check the terminal console for error messages
2. Verify your `.env.local` file exists and has correct values
3. Ensure you restarted the dev server after creating `.env.local`
4. Try using Gmail first for testing before switching to custom domain

---

**Your forms are ready to collect leads!** Just complete the email configuration above.

