import React, { useEffect, useState } from 'react';

const Search = () => {
  const [val, setVal] = useState("");
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const store = localStorage.getItem("products");
    if (store) {
      setAllData(JSON.parse(store));
    }
  }, []);

  const finddata = (e) => {
    e.preventDefault();
    const filterProduct = allData.filter(product =>
      product.ProductName.toLowerCase().includes(val.toLowerCase())
    );
    setData(filterProduct);
  };

  const handle = (e) => {
    setVal(e.target.value);
  };

  const display = data.map((key, i) => (
    <ul key={i} className='display-table-row'>
      <li>{i + 1}</li>
      <li>{key.ProductName}</li>
      <li>{key.Price}</li>
    </ul>
  ));

  return (
    <>
      <form onSubmit={finddata}>
        <h1>Search Product by Name</h1>
        <input type="text" name="search" placeholder="Search..." onChange={handle} />
        <button type="submit">Search</button>
      </form>
      {data.length > 0 ? (
        <table className='display-table'>
        <ul className='display-table-row'>
          <li>S.No</li>
          <li>Product Name</li>
          <li>Product Price</li>
        </ul>
        {display}
       </table>
      ) : (
        <p style={{justifyContent:"center",display:"flex"}}>No Products</p>
      )}
    </>
  );
};

export default Search;
