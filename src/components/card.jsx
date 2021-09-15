function Card ({children}){
    return (
        <div className="container">
            <ul class="list-group">
           {/* <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
             {children}
           </li> */}
           <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">{children}</li>
            </ul>
        </div>
    )
}

export default Card;
