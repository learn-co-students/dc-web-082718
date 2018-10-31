import React from 'react'
// Should receive an `onAdoptPet` callback prop. This callback prop gets called with the pet's `id` when the user clicks the adopt pet button — _not_ when they click the disabled button!
class Pet extends React.Component {

  adoptHandler = (id) => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "female" ? '♀' : '♂' }
            <br />
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">

          {this.props.isAdopted ?
            <button className="ui disabled button">Already adopted</button>
            :
            <button className="ui primary button" onClick={this.adoptHandler}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
