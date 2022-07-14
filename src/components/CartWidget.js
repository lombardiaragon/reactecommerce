// import { useState } from 'react';

const CartWidget=({toggleMyDrawer,showCartWidget})=> {

  return (
       <>
        {showCartWidget && <div className='MyDrawerContainer' onClick={toggleMyDrawer}/>}
        <div className={`MyDrawer text-dark bg-light w-25 ${showCartWidget && "MyDrawerActive"}`}>
            <div className="mt-5 p-3">
                <div>
                    <h3>TITULO DRAWER</h3>
                </div>
                <div>
                    <p>Info Drawer</p>
                </div>
            </div>
            <button type="button" className="btn-close MyDrawerClose" aria-label="Close" onClick={toggleMyDrawer}></button>
        </div>     
        </>
   
  );
}

export default CartWidget