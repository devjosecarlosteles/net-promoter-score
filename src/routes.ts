import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { SurveyController } from './controllers/SurveysController'

const router = Router()

const userController = new UserController()
const surveysContoller = new SurveyController()

router.post("/users", userController.create)

router.post("/surveys", surveysContoller.create)
router.get("/surveys", surveysContoller.show)

export { router }