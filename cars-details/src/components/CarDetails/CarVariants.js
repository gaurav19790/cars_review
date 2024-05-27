import React from 'react'

const CarVariants = () => {
  return (
    <table class="table-auto border-2 px-5" style={{"padding":"20px"}}>
    <thead>
      <tr className='border-b-2 '>
        <th>variants</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>
      </tr>
      <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
      </tr>
      <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
      </tr>
    </tbody>
  </table>
  )
}

export default CarVariants
