import React from 'react';


const MenuCollection = (props) => {
  return (
    <>
        <div className='w-32 h-32 md:w-48 md:h-48 flex flex-col'>
            <div className='w-full h-full rounded-lg overflow-hidden'>
                <img 
                    src ={props.image} 
                    alt="menu"
                    className='w-full h-full rounded-lg transform transition duration-400 hover:scale-110'
                />
            </div>
            <div>
                <strong>{props.title}</strong>
                <p>{props.pages} pages</p>
            </div>
        </div>
    </>
  )
}

export default MenuCollection;