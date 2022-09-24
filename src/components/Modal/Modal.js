
 import React from "react";
 import ReactDom  from "react-dom";
 import AddForm from "components/AddForm/AddForm";
 
 import s from './Modal.module.scss'
 
 export default function Modal({open, children, onClose }){
 
     if(!open)
     return null;
 
     return ReactDom.createPortal(
         <>
         <div className={s.overlay} />
         <div className={s.modal}>
         <AddForm />
         <button className={s.button} onClick={onClose}>Close adding</button>
         {children}
         </div>
         </>,
         document.getElementById('portal')
     )
 }