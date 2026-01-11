# Environment Variables Setup Guide

## Required Environment Variable

### `VITE_API_URL`
The base URL for your backend API. This is automatically used by all API calls through the `api.js` service.

## Setup Instructions

### 1. Create `.env` file in the root of `Portfolio-Project/`

Create a file named `.env` (not `.env.example`) in the `Portfolio-Project` directory with:

```env
VITE_API_URL=http://localhost:5000/api
```

### 2. For Local Development
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. For Production (Vercel)
Set the environment variable in Vercel dashboard:
- Go to your project settings
- Navigate to Environment Variables
- Add: `VITE_API_URL` = `https://your-backend.vercel.app/api`

Or create `.env.production`:
```env
VITE_API_URL=https://your-backend.vercel.app/api
```

## How It Works

The API service (`src/services/api.js`) automatically reads `VITE_API_URL` from environment variables:

```javascript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
```

- If `VITE_API_URL` is set, it uses that value
- If not set, it defaults to `http://localhost:5000/api` for local development

## Important Notes

1. **Vite requires `VITE_` prefix**: All environment variables used in the frontend must start with `VITE_`
2. **Restart dev server**: After changing `.env` file, restart your Vite dev server
3. **Build-time**: Environment variables are embedded at build time, not runtime
4. **Git**: The `.env` file is already in `.gitignore` and won't be committed

## Verification

To verify your environment variable is loaded:
1. Check browser console - API calls will log: `Fetching: [your-api-url]/endpoint`
2. Or add temporary: `console.log(import.meta.env.VITE_API_URL)` in any component

## Troubleshooting

### API calls still using localhost
- Restart your Vite dev server after changing `.env`
- Check that variable name starts with `VITE_`
- Verify `.env` file is in the root of `Portfolio-Project/` directory

### Environment variable not found
- Make sure file is named exactly `.env` (not `.env.txt` or `.env.local`)
- Check file is in the correct location: `Portfolio-Project/.env`
- Restart dev server
