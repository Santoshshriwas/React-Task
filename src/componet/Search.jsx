import React, { useEffect, useState } from 'react'

const Search = () => {
  const [val,setVal]= useState("");
  const [data,setData]= useState([]);
  const [allData,setAllData]=useState([]);
  useEffect(()=>{
    const store = localStorage.getItem("product");
    if(store){
      setAllData(JSON.parse(store));
    }
  },[]);
console.log(allData);
  const finddata=(e)=>{
    e.preventDefault();
    const filterProduct=allData.filter(product=>product.ProductName.toLowerCase().includes(val.toLowerCase()))
    setData(filterProduct);
  }
const handel=(e)=>{
  setVal(e.target.value);
}
  const display = data.map((key,i)=>{
    return(
      <>
        <tr>
          <td>{i+1}</td>
          <td>{key.ProductName}</td>
          <td>{key.Price}</td>
        </tr>
      </>
    )
  })
  return (
    <>
    <form onSubmit={finddata}>
      <h1>Search Product by Name
      <input type="text" name="search" placeholder="Search..." onChange={handel}/>
      <button type="submit">Search</button>
      </h1>
      {
        display.length>0?(
          <table>
            <th>S.No</th>
            <th>Product Name</th>
            <th>Price</th>

            {display}
          </table>
        ):("No Products")
      }
    </form>
    </>
  )
}

export default Search