



function Product(props) {
    return (

        <>


        <div className="card  mt-5" style={{boxShadow:"0px 0px 7px 0px black"}}>
            <div className="card-header">
                <img className="w-100"  src={props.img} />
            </div>
            <div className="card-body text-center">
                    <p className="text-danger h5">{props.name}</p>

                    <hr/>
                    <p className="text-primary ">{ props.position }</p>
                      
                    <p className=""> {props.infor}</p>
                     <hr/>
                    <p className="text-center text-warning">  
                        
                        <i class="fa-solid fa-star ml-3"></i>
                       <i class="fa-solid fa-star ml-3"></i>
                       <i class="fa-solid fa-star ml-3"></i>
                       <i class="fa-solid fa-star ml-3"></i>
                        
                        <i class="fa-solid fa-star-half ml-3"></i>
                       
                    </p>
                 
                   
                    
                   
                    <button type="button" class="btn btn-outline-danger ml-3  mt-1">Add To Cart</button>
                    <button type="button" class="btn  btn-outline-success ml-4 mt-1">Buy Now</button>

            </div>
            </div>
            
             


</>

    )
        
 

    
}

export default Product