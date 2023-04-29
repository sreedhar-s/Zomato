import React,{useState} from 'react';

//component
import MenuCollection from '../../components/restaurant/MenuCollection';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  return (
    <>
      <div>
        {
          menus.map((menu) => (
            <MenuCollection {...menu} />
          ))
        }
      </div>
    </>
  )
}

export default Menu;