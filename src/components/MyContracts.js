import React from 'react'
import {connect} from 'react-redux'
import { Grid } from 'semantic-ui-react'


import Contract from './Contract'

const URL = 'http://localhost:3000/api/v1/contracts'

class MyContracts extends React.Component{
  state={
    myContracts: []
  }

  componentDidMount(){
    fetch(URL)
      .then(response => response.json())
      .then(contracts => this.setState({
            myContracts: contracts
        })
    )
  }

  render(){

    console.log(this.props.myContracts);

    const myContracts = this.state.myContracts.map((contract, index) => {
      return <Contract contract={contract} index={index} key={index} />
    })

    return(

      <div className='myContracts'>
        <br />
        <br />
        <br />
        <br />
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
              { myContracts }
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default MyContracts
