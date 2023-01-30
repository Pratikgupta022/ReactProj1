import React from 'react'

const Navbar = ({ filterCategory, MenuList }) => {
    // console.log(menuList);
    return (
        <>
            <nav className="navbar">
                <div className="btn-grp">
                    {
                        MenuList.map((curElem) => {
                            return (
                                <button className="btn-group__item" key={curElem.length} onClick={() => filterCategory(curElem)}>{curElem}</button>
                            )
                        })
                    }
                    {/* <button className="btn-group__item" onClick={() => filterCategory("Lunch")}>Lunch</button>
                <button className="btn-group__item" onClick={() => filterCategory("Dinner")}>Dinner</button> */}
                </div>
            </nav>

        </>
    )
}

export default Navbar