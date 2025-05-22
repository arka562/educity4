import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/auth/register', (req, res) => {
    console.log("Received data:", req.body);
    res.json({ message: "User registered successfully!", data: req.body });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Test Server running on port ${PORT}`));
