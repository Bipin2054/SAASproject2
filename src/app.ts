
import express from 'express';

const app = express();

app.use(express.json());

import authRoute from "./routes/globals/auth/authRoute";



app.use ("/api", authRoute)


















export default app