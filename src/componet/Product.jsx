import React, { useEffect, useState } from 'react'

const Product = () => {
  const [data,setData]= useState({
    ProductName:"",
    Price:""
  })
  const [product,setProduct] = useState([]);
  const setval=(e)=>{
    const {name,value}= e.target;
    setData({
      ...data,
      [name]:value
      
    })
    console.log(data);
  }
  console.log(product);

  const Adddata=(e)=>{
    e.preventDefault();
    const isDuplicate = product.some(product => product.ProductName === data.ProductName);
    if (isDuplicate) {
      alert('Product with this name already exists!');
      return;
    }

    const newProduct = {
      id: new Date().getTime(), 
      ...data
    };

    const updatedProducts = [...product, newProduct];
    setProduct(updatedProducts);
    // Save products array to localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    setData({
    ProductName:"",
    Price:""
  })

}
useEffect(() => {
  const storedProducts = localStorage.getItem('product');
  if (storedProducts) {
    setProduct(JSON.parse(storedProducts));
  }
}, []);

  return (
    <>
      <form onSubmit={Adddata}>
        <input type="text" name="ProductName" value={data.ProductName} onChange={setval} placeholder="Product Name" />
          <input type="text" name="Price" value={data.Price} onChange={setval} placeholder="Price" />
            <button type="submit">Add</button>
      </form>
    </>
  )
}

export default Product