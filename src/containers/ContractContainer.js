// import React from 'react'
// import MyContracts from './MyContracts'
//
// const URL = 'http://localhost:3000/api/v1/contracts'
//
// class ContractContainer extends React.Component{
//   state = {
//     myContracts: []
//   }
//
//   componentDidMount(){
//     fetch(URL)
//       .then(response => response.json())
//       .then(contracts => this.setState({
//         myContracts: contracts
//       })
//     )
//   }
//
//   render(){
//
//     console.log(this.state.myContracts);
//
//     const myContracts = this.state.myContracts.map((contract, index) => {
//       return <MyContracts contract={contract} index={index} key={index} />
//     })
//
//     return(
//       <div className='myContracts'>
//         { myContracts }
//       </div>
//     )
//   }
// }
//
// export default ContractContainer
