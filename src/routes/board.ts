import express,{Router} from 'express';
const router :Router = express.Router();
import boardController from '../controllers'

router.post('/list', boardController.list);
router.post('/write', boardController.write);
router.post('/update/:idx', boardController.update);
router.post('/delete/:idx', boardController.delete);


export default router;