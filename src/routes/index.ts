import express, {Router} from 'express';
const router:Router = express.Router();
import boardRouter from './board';

router.use('/board',boardRouter);

export default router;