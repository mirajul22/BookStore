import express from 'express';
import { getBook } from '../controllers/Book.controller.js';
const router = express.Router();

router.get('/book',getBook)


export default router