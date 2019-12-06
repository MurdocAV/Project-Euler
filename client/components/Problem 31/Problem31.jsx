import React from 'react'

// In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

class Problem31 extends React.Component { 

  displayText (text) {
    return <h1>{text}</h1>
  }

  // First make a program that makes £2
  twoPounds () {
    const target = 200 //representational of £2
    const denominations = [1, 2, 3, 5, 10, 20, 50, 100]
    
    let noOfSolutions

    /* 
    How to have differnt unique ways.
    Think of soultion before using code...
    1. Combinations? (But 8 different inputs?)
    */
  }

  render () {

    return (
      this.displayText()
      )
  }
}

export default Problem31
