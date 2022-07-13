// import { useState } from 'react';

const CartWidget=({toggleMyDrawer,showCartWidget})=> {

  return (
       <>
        {showCartWidget && <div className='MyDrawerContainer' onClick={toggleMyDrawer}>MYDRAWER PANTALLA COMPLETA</div>}
        <div className={`MyDrawer ${showCartWidget && "MyDrawerActive"}`}>
            <div className="MyDrawer__title">
                <h3>TITULO DRAWER</h3>
            </div>
            <div className='MyDrawer__info'>
                <p>Info Drawer</p>
            </div>
            <button className='MyDrawerClose' onClick={toggleMyDrawer}><span>X</span></button>
        </div>     
        </>
   
  );
}

export default CartWidget