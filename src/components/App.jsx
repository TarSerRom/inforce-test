import React, { useState, useEffect } from "react";
import ProductListView from "./ProductListView/ProductListView";
import Modal from "./Modal/Modal";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import s from "./App.module.scss";


export const App = () => {
  const [products, setProducts] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
 
  
  useEffect(()=> {
    fetch('http://localhost:8000/products')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProducts(data);
      })
  }, [])

  const deleteProduct = e => {
    setProducts(products.filter(({ id }) => id !== e.target.id));
    fetch(`http://localhost:8000/products/${e.target.id}`,{
                method:'DELETE',
                headers:{"Content-Type": "application/json"},
       
            }).then(()=>{
              toast.success('Product has been deleted')
            })
  };

  return (
    <>
    <div>
      <button className={s.button} onClick={()=>setIsOpen(true)}>
        Add your new product
        </button>
      <Modal open = {isOpen} onClose={()=> setIsOpen(false)}> 
      </Modal>
    </div>
    { products && <ProductListView products={products} onDelete={deleteProduct} />}
    <ToastContainer autoClose={5000} />
    </>
  );
};
