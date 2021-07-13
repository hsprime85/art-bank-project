import asyncHandler from 'express-async-handler'
// import generateToken from '../utils/generateToken.js'
import User from '../models/userModels.js'


// @desc fetch all users
// @route GET /api/users
// @access public
const getUsers = asyncHandler (async(req, res) => {
  const users = await User.find({})
  res.json(users)
})

// @desc fetch one user
// @route GET /api/users/:id
// @access public
const getUserById = asyncHandler (async(req, res) => {
  const user = await User.findById(req.params.id)
    if(user) {
        res.json(user)
    } else {
        res.status(404).json({ message: "user not found"})
    }
})

const authUser = asyncHandler (async(req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if(user && await user.matchPassword(password)) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: null
    })
  } else {
    res.status(401)
    throw new Error( 'invaild password')
  }
})

const registerUser = asyncHandler(async(req, res) => {
  const { firstName, lastName, email} = req.body

  User.create({
    firstName,
    lastName,
    email
  })
  .then(user => res.json(user))
  .catch(err => res.json(err))
})


export { getUsers, getUserById, authUser, registerUser }