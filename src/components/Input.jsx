function Input (){
    return <div className="container" >
         <div class="container my-3">
      <h1>WELCOME TO TODO APP</h1>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add a TODO</h5>
          
          <button  id="addBtn" className="btn btn-primary mx-3">
            ADD TODO
          </button>
          <button  id="deleteBtn" className="btn btn-primary">Delete All</button>
        </div>
        
      </div>
      <h1 >YOUR NOTES</h1>
      <hr />
      <div id="notes" className="row container-fluid"></div>
    </div>
    </div>
}
export default Input;