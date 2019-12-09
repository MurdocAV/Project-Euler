import React from 'react'

// In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

class Problem31 extends React.Component { 

  state = {
    target : 200,
    denominations : [100, 50, 20, 10, 5, 3, 2, 1]
  }

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
    2. Try halving method (Simpler conceptually...) //"https://www.maa.org/frank-morgans-math-chat-293-ways-to-make-change-for-a-dollar"
    */

    // Selected methods. Break from largest denomination to the smallest.

    for (let i = 0; i < this.state.denominations.length; i++) {
      
      let denomination = this.state.denominations[i] // Given 100p will be used...
      
      
    }
  }

  render () {

    return (
      this.displayText()
      )
  }
}

export default Problem31
