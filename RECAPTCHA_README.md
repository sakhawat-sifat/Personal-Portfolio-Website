# reCAPTCHA Configuration Guide

## Current Status
- ✅ **FIXED**: reCAPTCHA error resolved
- 🔧 **Contact Component**: Currently disabled due to file corruption
- 📧 **EmailJS**: Configured with user credentials

## Configuration

### Environment Variables
Copy `.env.example` to `.env` for custom configuration:

```bash
cp .env.example .env
```

### reCAPTCHA Keys
- **Development**: Uses Google's test key (no domain restriction)
- **Production**: Uses your registered key for live domains

### Enabling Contact Component
When ready to re-enable the Contact component:

1. Set `ENABLE_CONTACT = true` in `src/App.tsx`
2. Uncomment the Contact import and component
3. Ensure Contact component is properly rebuilt
4. reCAPTCHA will automatically load when enabled

### EmailJS Credentials
- **Service ID**: service_zn8g4tp  
- **Template ID**: template_uk1va6i
- **Public Key**: ufsRdDWI33Q5wDhXu

## Error Resolution
The reCAPTCHA error was caused by loading the reCAPTCHA provider without an active Contact component using it. This is now resolved by conditional loading.

## Development Server
Currently running at: http://localhost:5178/