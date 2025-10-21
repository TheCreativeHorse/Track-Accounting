# ✅ Lead Form Email Configuration

## What's Been Set Up

Your booking forms are now configured to send all lead submissions to **admin@trackaccounting.ca** via email!

Both forms on your website will now send emails:
1. **Hero Form** (top of homepage) - Quick contact form
2. **Contact Form** (bottom of page) - Detailed lead form

## 🚀 Quick Setup (Required)

You need to configure your email settings. Here's how:

### Step 1: Create `.env.local` File

Create a file named `.env.local` in your project root folder (where `package.json` is located) with this content:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
EMAIL_FROM=Track Accounting <noreply@trackaccounting.ca>
EMAIL_TO=admin@trackaccounting.ca
```

### Step 2: Get Gmail App Password (Easiest Option)

1. Go to your Google Account: https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **App Passwords**: https://myaccount.google.com/apppasswords
4. Select "Mail" and your device
5. Click **Generate**
6. Copy the 16-character password
7. Update `.env.local`:
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASSWORD` = the generated app password

### Step 3: Restart Your Server

After saving `.env.local`:

```bash
# Press Ctrl+C to stop the current server
# Then run:
npm run dev
```

## 📧 What You'll Receive

When someone submits a form, you'll get a professional HTML email with:

- **Lead ID** - Unique tracking number
- **Full Name** - Contact's name
- **Business Name** - Their company
- **Email** - Clickable email link
- **Phone** - Clickable phone link (from detailed form)
- **Services** - What they're interested in
- **Message** - Any additional comments
- **Timestamp** - When submitted

## 🔧 Alternative Email Providers

### If You Want to Use admin@trackaccounting.ca Directly

Contact your email hosting provider for SMTP settings and update `.env.local`:

```env
EMAIL_HOST=mail.trackaccounting.ca (check with your host)
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=admin@trackaccounting.ca
EMAIL_PASSWORD=your-email-password
EMAIL_FROM=Track Accounting <admin@trackaccounting.ca>
EMAIL_TO=admin@trackaccounting.ca
```

### Common Providers

**Microsoft 365 / Outlook:**
```env
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
```

**Yahoo:**
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
```

## ✅ Testing

1. Visit http://localhost:3000
2. Fill out either form
3. Submit
4. Check your terminal for: `✅ Email sent successfully for lead LEAD-xxxxx`
5. Check **admin@trackaccounting.ca** inbox (and spam folder first time)

## 🔍 Troubleshooting

**No emails arriving?**
- Check terminal for error messages
- Verify `.env.local` credentials are correct
- For Gmail: Use App Password, not regular password
- Check spam/junk folder
- Make sure server was restarted after creating `.env.local`

**Form submits but no email sent?**
- Look in terminal for `❌ Error sending email:` message
- Verify EMAIL_USER and EMAIL_PASSWORD are correct
- Check if 2-Step Verification is enabled (Gmail)

## 📝 Files Modified

- `src/app/api/lead/route.ts` - Updated to send emails using Nodemailer
- `package.json` - Added nodemailer dependency
- Created: `EMAIL_SETUP_GUIDE.md` - Detailed setup guide

## 🔒 Security

- `.env.local` is automatically gitignored (never committed)
- Email credentials stay on your server
- Forms validate input before submission
- Error messages don't expose sensitive info to users

---

**Need Help?** Check `EMAIL_SETUP_GUIDE.md` for detailed instructions.

