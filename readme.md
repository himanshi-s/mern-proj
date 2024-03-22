//controllers
const router = express.Router();

router.route('/register').post(validate(signupSchema),Register);
Register is a controller function - controls what happens