import {useState} from 'react';
import Menu from "./Menu";
import menu from "../data/menuData";


const MenuList = () => {

    const [gerechten, setGerechten] = useState(menu);



    return ( 

        <section className="menu-container">
            {gerechten.map((gerecht) => (
                <Menu
                key={gerecht.id}   {...gerecht} />
            ))}
        </section>
     );
}
 
export default MenuList;