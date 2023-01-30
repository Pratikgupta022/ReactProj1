import React, { useState } from 'react';
import "./style.css";
import Menu from './MenuAPI';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniquecategories = [
  ...new Set(Menu.map((curElem) => {
    return curElem.category;
  })
  ),'All'
];
// console.log(uniquecategories);
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [MenuList, setMenuList] = useState(uniquecategories);

  const filterCategory = (category) => {
    if(category==="All"){
      return setMenuData(Menu);
    }
    const updatedData = Menu.filter((curElem) => {
      return curElem?.category === category;
    });
    setMenuData(updatedData);
  }
  return (
    <>
      <Navbar filterCategory={filterCategory} MenuList={MenuList} />

      <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant