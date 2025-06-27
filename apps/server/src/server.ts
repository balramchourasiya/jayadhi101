import express from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (_req, res) => {
    res.send('Hello from TypeScript + ESM!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
