import React, { useEffect, useState } from 'react'

const Display = () => {
  const [data,setData]= useState([]);
  useEffect(()=>{
const store = localStorage.getItem('products')
if(store){
  setData(JSON.parse(store))
}
  },[])

  let displaydata= data.map((key,i)=>{
    return(
      <>
        <ul>
          <li>{i+1}</li>
          <li>{key.ProductName}</li>
          <li>{key.Price}</li>
        </ul>
      </>
    )
  })
  return (
    <>
 
      <h1 className='display'>Display Product</h1>
     <table className='display-table'>
      <ul className='display-table-row'>
        <li>S.No</li>
        <li>Product Name</li>
        <li>Product Price</li>
      </ul>
      {displaydata}
     </table>
    </>
  )
}

export default Display

// import React from 'react';


// const DisplayProduct = () => {
//   return (
//     <div className='display'>
//       <h1>Display Product</h1>
//       <table className='display-table'>
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Product Name</th>
//             <th>Product Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {products.map((product, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//             </tr>
//           ))} */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DisplayProduct;
