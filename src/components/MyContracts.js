import React from 'react'
import { Grid } from 'semantic-ui-react'
import { getContracts } from '../actions/actions'
import { connect } from 'react-redux'

import Contract from './Contract'

class MyContracts extends React.Component{

  componentDidMount(){
    this.props.getContracts()
  }

  render(){

    // console.log('line 26:', this.props);

    const myContracts = this.props.myContracts.map((contract, index) => {
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

function mapStateToProps(state){
  console.log('line 56: state', state)
  return {myContracts: state.contracts}
}

export default connect(mapStateToProps, {getContracts})(MyContracts)
