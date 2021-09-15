function Button ({ title, arr, onClick,children }){
    return (
        <div className="container mb-3">
             <button  onClick={onClick} className="btn btn-primary mx-3">
                 {children}
          </button>
        </div>
    )
}

export default Button;