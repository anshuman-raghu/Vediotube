import { Router } from "express";
import { loginUser,logoutUser, registerUser,refreshAccessToken,changePassword,currentUser,updateUserDetails,updateAvatar,updateCoverImg} from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middleware.js"
import {verifyJwt} from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/register").post(
    
    upload.fields([
        {
            name: 'avatar',
            maxCount: 1
        }, 
        {
            name: 'coverImg',
            maxCount: 1
        },
    ]),
    (err, req, res, next)=>{
        if(err){
            console.log(err.message);
            console.log(err);      
            
        }
        next()
    },
    registerUser
)

router.route("/login").post(
    loginUser 
)

router.route("/logout").post(
    verifyJwt,
    logoutUser 
)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/changePassword").post(
    verifyJwt,
    upload.none(),
    changePassword
)
router.route("/currentUser").get(
    verifyJwt,
    currentUser
)

router.route("/updateUserDetails").post(
    verifyJwt,
    upload.none(),
    updateUserDetails
)
router.route("/updateAvatar").post(
    verifyJwt,
    upload.single('avatar'),
    updateAvatar
)
router.route("/updateCoverImg").post(
    verifyJwt,
    upload.single('coverImg'),
    updateCoverImg
)



export default router
