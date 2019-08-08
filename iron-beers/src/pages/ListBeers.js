import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import beersService from '../services/beersService'

class ListBeers extends Component {
  state = {
    beers: [],
  }

  componentDidMount() {
    beersService.getAllBeers()
      .then((response) => {
        const beersFromAPI = response.data;
        console.log(beersFromAPI)
        this.setState({
          beers: beersFromAPI
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  goToPreviousPage = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <header>
          <button className='button' onClick={this.goToPreviousPage}>GoBack</button>
        </header>
        <section className='container'>
          {this.state.beers.length > 0 ? this.state.beers.map((beer) => {
            return (
              <article className='beer-container' key={beer._id}>
                <h3>{beer.name}</h3>
                <p>{beer.type}</p>
                <Link to={`/beers/${beer._id}`}><img src={beer.image_url} alt={beer.name}></img></Link>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </article>
            )
          }) : <p>Carrega-me-la...</p>}
        </section>
      </div>
    )
  }
}

export default ListBeers