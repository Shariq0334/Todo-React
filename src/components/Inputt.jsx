function Inputt ({type, placeholder,onChange,value}){
    return (
       
            <div className="mb-3 container ">
            <h1 className="card-title mb-4 mx-1 my-4">Add a TODO</h1>
            <input 
            aria-label=".form-control-lg example" className="form-control form-control-lg my-3"
              type={type}
              onChange={onChange}
              placeholder={placeholder}
              value={value}
             
            />
           
            
          </div>
    
    )
}

export default Inputt;