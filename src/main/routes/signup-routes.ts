import { Router } from 'express'
import { makeSignUpController } from '../factories/signup'
import { adaptExpressRoute } from '../adapters/express-route-adapter'
export default (router: Router): void => {
  router.post('/signup', adaptExpressRoute(makeSignUpController()))
}
