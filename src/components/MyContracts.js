import React from 'react'
import { Grid } from 'semantic-ui-react'
import { getContracts } from '../actions/actions'
import { connect } from 'react-redux'

import Contract from './Contract'
import NewContractForm from './NewContractForm'

class MyContracts extends React.Component{

  state = {
    currentContract: null,
  }

  componentDidMount(){
    this.props.getContracts()
  }

  setCurrentContract = (contract) => {
    this.setState({
      currentContract: contract
    })
  }

  render(){

    console.log('line 26:', this.state);

    const myContracts = this.props.myContracts.map((contract, index) => {
      return <Contract contract={contract} index={index} key={index} setCurrentContract={this.setCurrentContract}/>
    })

    // const currentContract = this.state.currentContract.map((contract, index) => {
    //   return <NewContractForm contract={contract} index={index} key={index} />
    // })

    return(

      <div className='myContracts'>
        <br />
        <br />
        <br />
        <br />
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
              {this.state.currentContract === null ? myContracts : null}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log('line 56: state', state)
  return {myContracts: state.contracts}
}

export default connect(mapStateToProps, {getContracts})(MyContracts)
