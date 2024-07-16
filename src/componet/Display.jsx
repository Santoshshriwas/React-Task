import React, { useEffect, useState } from 'react'
import "../css/Display.css"
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
        <ul  className='display-table-row'>
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

// import React, { useEffect, useState } from 'react';
// import '../css/Display.css';

// const Display = () => {
//   const [data, setData] = useState([]);
  
//   useEffect(() => {
//     const store = localStorage.getItem('products');
//     if (store) {
//       setData(JSON.parse(store));
//     }
//   }, []);

//   let displaydata = data.map((key, i) => {
//     return (
//       <ul key={i} className='display-table-row'>
//         <li>{i + 1}</li>
//         <li>{key.ProductName}</li>
//         <li>{key.Price}</li>
//       </ul>
//     );
//   });

//   return (
//     <>
//       <h1 className='display'>Display Product</h1>
//       <table className='display-table'>
//         <ul className='display-table-row'>
//           <li>S.No</li>
//           <li>Product Name</li>
//           <li>Product Price</li>
//         </ul>
//         {displaydata}
//       </table>
//     </>
//   );
// }

// export default Display;









