function reducer(state=defaultState, action){
  // console.log(action)
  switch(action.type){
    case "NEW_CONTRACT":
      return {...state, title: action.payload}
    default:
      return state
  }
}

const defaultState={
  title: ``,
  summary: ``,
  details: ``,
  milestones: ``,
  legal: ``,
  copyright: ``,
  compensation: ``,
}

// const defaultState = {
//     title: ``,
//     summary: "You, the client, are hiring me, Paul Elis, to develop a web application for the estimated total price of outlined in our previous correspondence. The agreed payment plan is at the end of the document.",
//     details: `I will provide suggestions for designs or templates for the look-and-feel, layout and functionality of your web site. I will provide any design support necessary to complete the design of the site, fully develop the site, and implement a custom back end so that you can continue to maintain the site on your own in the future.
//
//               HTML/CSS layout templates
//               I will not test these templates in old or abandoned browsers, for example Microsoft Internet Explorer 5, 5.5, 6, or 7 for Windows or Mac, previous versions of Apple's Safari, Mozilla Firefox or Opera unless otherwise specified. If you need to show the same or similar visual design to visitors using these older browsers, we will have to re-negotiate an increased rate, as developing for these older browsers in costly and time-consuming.`,
//     milestones: `Milestone 1
//
//                 Pattern Lab setup / Project setup
//                 Layout all elements in the stylesheet.pdf (these are the micro-level building blocks to build up from)
//                 Layout all macro-elements needed for 25% of the Vis/*.jpg files (I'm not sure which would be given highest priority)
//                 Feedback on milestone
//                 Browser testing of milestone
//                 Amendments`,
//     legal: `I will take the utmost care and attention to ensure that my code is error-free and adequately
//             future-proofed, but due to the rapidly-evolving nature of web standards, browsers and
//             programming languages it is not possible to guarantee that code will function as intended indefinitely and so I can't be liable to you or any third party for damages, including lost profits, lost
//             savings or other incidental, consequential or special damages arising out of the operation of or
//             inability to operate this web site and any other web pages, even if you have advised me of the
//             possibilities of such damages.`,
//     copyright: `You guarantee to me that any elements of text, graphics, photos, designs, trademarks, or other artwork that you provide us for inclusion in the web site are either owned by your good self, or that you have permission to use them.
//
//                 When I receive your final payment, copyright is automatically assigned as follows:
//
//                 You own the graphics and other visual elements that I create for you for this project. I will give you a copy of all files and you should store them really safely as I am not required to keep them or provide any native source files that I used in making them.
//                 You also own text content, photographs and other data you provided, unless someone else owns them.`,
//     compensation: `I am sure you understand how important it is as a small business that you pay the invoices that I send you promptly. As I'm also sure you'll want to stay friends, you agree to stick tight to the following payment schedule, which will be as follows, but may be revised based on further conversations between us.
//                   The total cost of the work is: $6000 USD`,
//   }


  export default reducer
