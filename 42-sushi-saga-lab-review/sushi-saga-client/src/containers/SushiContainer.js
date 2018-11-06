import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  debugger
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiToRender.map(sushiObj => {

          // check to see if current sushiObj.id is included in App state of eaten eatenSushiIDs
          if (props.eatenSushiIDs.includes(sushiObj.id)){
            return <Sushi isEaten={true} eatSushi={props.eatSushi} sushi={sushiObj} key={sushiObj.id}/>
          } else {
            return <Sushi isEaten={false} eatSushi={props.eatSushi} sushi={sushiObj} key={sushiObj.id}/>
          }

        })

        }
        <MoreButton nextFour={props.nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
