import {
  getCars,
  getSingleCar,
  addCar,
  updateCar,
  deleteCar
} from '../controllers/CarController.js'

const routes = [
  {
    method: 'GET',
    url: '/cars',
    handler: getCars
  },
  {
    method: 'GET',
    url: '/cars/:id',
    handler: getSingleCar
  },
  {
    method: 'POST',
    url: '/cars',
    handler: addCar
  },
  {
    method: 'PUT',
    url: '/cars/:id',
    handler: updateCar
  },
  {
    method: 'DELETE',
    url: '/cars/:id',
    handler: deleteCar
  }
]

export default routes
