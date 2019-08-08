import axios from 'axios';

class BeersService {
  constructor() {
    this.birramen = axios.create({
      baseURL: 'https://ih-beer-api.herokuapp.com/beers/'
    })
  }

  getAllBeers() {
    return this.birramen.get('')
      .then(response => response)
  }

  getOneBeer(id) {
    return this.birramen.get(`${id}`)
      .then(response => response)
  }

  getRandomBeer() {
    return this.birramen.get('random')
      .then(response => response)
  }
}

const beersService = new BeersService();

export default beersService;