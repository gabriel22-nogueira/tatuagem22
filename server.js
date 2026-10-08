const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/health', (_, res) => res.json({ ok: true }));
app.listen(PORT, '0.0.0.0', () => console.log(`Tattoo Studio running on ${PORT}`));
