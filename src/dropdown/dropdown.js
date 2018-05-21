import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { developers } from '../components/MyContracts.js'
// developers = [
//   {
//     text: 'Jenny Hess',
//     value: 'Jenny Hess',
//     image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
//   },
//  ...
// ]


const developersDropdown = () => (
  <Dropdown placeholder='Developer' fluid selection options={developers} />
)

export default developersDropdown
