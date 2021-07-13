import express from 'express'
const router = express.Router()
import { getUsers, getUserById, authUser, registerUser } from '../controllers/userController.js'


router.route('/').post(registerUser).get(getUsers)
router.route('/:id').get(getUserById)
router.post('/login', authUser)
export default router