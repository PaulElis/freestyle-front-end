import React from 'react'
import '../styles/myContracts.css'
import { Grid } from 'semantic-ui-react'
import { getContracts, getUser } from '../actions/actions'
import { connect } from 'react-redux'

import Contract from './Contract'

class MyContracts extends React.Component{

  state = {
    currentContract: '',
  }

  componentDidMount(){
    if (this.props.currentUser){
      this.props.getContracts()
      this.props.getUser()
    }
  }

  render(){

    const developerContracts = this.props.currentUser && this.props.currentUser.developer_contracts ? this.props.currentUser.developer_contracts.map((contract, index) =>
      // <Route path={ '/' + contract.id + 'edit'} key={index}>
        <Contract contract={contract} history={this.props.history} index={index} key={index} setCurrentContract={this.setCurrentContract}/>
      // </Route>
    ) : null

    const contractorContracts = this.props.currentUser && this.props.currentUser.contractor_contracts ? this.props.currentUser.contractor_contracts.map((contract, index) =>
      <Contract contract={contract} history={this.props.history} index={index} key={index} setCurrentContract={this.setCurrentContract}/>
    ) : null

      return(
        <div className='myContracts-container'>
          <div className='myContracts'>
            {/*{this.state.currentContract === '' && this.props.currentUser ? */}
            <div>
              <Grid divided='vertically' id='myContracts-grid'>
                <h1 id='contracts-title'>Developer Contracts</h1>
                <Grid.Row columns={3}> {developerContracts} </Grid.Row>
              </Grid>
              <Grid divided='vertically'>
                <h1 id='contracts-title'>Client Contracts</h1>
                <Grid.Row columns={3}> {contractorContracts} </Grid.Row>
              </Grid>
            </div>
          </div>
        </div>
        )
    }

}

function mapStateToProps(state){
  // console.log('line 56: state', state)
  return {
    myContracts: state.contracts,
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, {getContracts, getUser})(MyContracts)
