# Deploy backend to Render

Minimal steps to deploy this Node/Express backend on Render:

1. Create a new **Web Service** on Render and connect your GitHub repo.
2. Select branch: `main`.
3. Environment: `Node`.
4. Build command: leave default (`npm install`) or set `npm install`.
5. Start command: `npm run start:server` (script added to `package.json`).
6. Add required Environment Variables in Render Dashboard → Service → Environment:
   - `MONGO_URI` (your MongoDB connection string)
   - `JWT_SECRET`
   - `RAZORPAY_ID`
   - `RAZORPAY_KEY_SECRET`
   - any other API keys (email, third-party services)

Notes:
- `server.js` uses `process.env.PORT || 5000`, so Render's `PORT` is supported.
- Uploaded files saved to `public/trainer/photos` are ephemeral on Render — use S3 or Render Volumes for persistence.
- Never commit `.env` or secrets to the repository.

Verify:

```bash
curl https://<your-service>.onrender.com/api/trainers
```

If you want, I can add a `.render.yaml` with defaults or create this service on Render (requires Render access).
