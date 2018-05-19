import React from 'react'
import { Grid } from 'semantic-ui-react'
import { getContracts } from '../actions/actions'
import { connect } from 'react-redux'

import Contract from './Contract'
import NewContractForm from './NewContractForm'

class MyContracts extends React.Component{

  state = {
    currentContract: '',
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


    const myContracts = this.props.myContracts.map((contract, index) => {
      return <Contract contract={contract} index={index} key={index} setCurrentContract={this.setCurrentContract}/>
    })

    // console.log('line 32:', this.props.myContracts);

    return(


      <div className='myContracts'>
          {this.state.currentContract === '' ? <Grid divided='vertically'><Grid.Row columns={3}> {myContracts} </Grid.Row></Grid> : <NewContractForm contract={this.state.currentContract} index={this.state.currentContract.id} key={this.state.currentContract.id} />}
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log('line 56: state', state)
  return {myContracts: state.contracts}
}

export default connect(mapStateToProps, {getContracts})(MyContracts)
