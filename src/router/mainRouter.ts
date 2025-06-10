// Import express Router and controllers
import { Router } from "express";
import * as controllersUser from  "../controllers/controllerUser"
import * as controllersMovie from "../controllers/controllerMovie"

// Create router instance
export const router = Router()

// User routes
router.get('/user',  controllersUser.listUser)
router.post('/user', controllersUser.createUser)
router.put('/user/:id', controllersUser.editUser)
router.delete('/user/:id', controllersUser.deleteUser)

// Movie routes
router.get('/movie', controllersMovie.listmovie)
router.post('/movie', controllersMovie.createMovie)
router.put('/movie/:id', controllersMovie.editMovie)
router.delete('/movie/:id', controllersMovie.deletemovie)
