import React, { Component } from 'react'
import beersService from '../services/beersService'

class RandomBeer extends Component {
  state = {
    beer: null,
  }

  componentDidMount() {
    beersService.getRandomBeer()
      .then((response) => {
        this.setState({
          beer: response.data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  goToPreviousPage = () => {
    this.props.history.goBack();
  }

  render() {
    const { beer } = this.state;
    return (
      <div>
        <header>
          <button className='button' onClick={this.goToPreviousPage}>GoBack</button>
        </header>
        <section className='container'>
          <a href='/random-beer'>Random again!</a>
          {beer ?
            <article>
              <img className='image-details' src={beer.image_url} alt={beer.name}></img>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>{beer.first_brewed}</p>
              <p>{beer.attenuation_level}</p>
              <p>{beer.description}</p>
              <p>{beer.contributed_by}</p>
            </article>
            : null}
        </section>
      </div>
    )
  }
}

export default RandomBeer



