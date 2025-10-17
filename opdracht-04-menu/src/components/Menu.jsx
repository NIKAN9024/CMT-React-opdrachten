const  Menu = ({id, title, category, price, img, desc}) => {
    return ( 
        <article className="menu-card" key={id}>
            <div className="menu-img">
                <img src={img} alt={title} className="menu-img"/>
                </div>
            <div className="menu-info">
                <header>
                    <h4>{title}</h4>
                    <h4 className="menu-price">${price}</h4>
                </header>
                <p className="menu-text">{desc}</p>
            </div>



        
        </article>
     );
}
 
export default Menu;