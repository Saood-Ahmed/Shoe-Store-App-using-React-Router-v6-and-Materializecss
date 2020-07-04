import React from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';

export const StoreIndex = ({ shoeItems }) => {

    return(
      <div className="row">
      
                {shoeItems.map((item, index) => (
                    <div key = {index} className="col s12 m3">
                       <div className="card">
                          <div className="card-image">
                            <img src={item.pic} alt={`${item.name}`}/>
                             <span className="card-title"> </span>
                           </div>
                          <div className="card-content">
                               <h6>Name: {item.name}</h6>
                               <h4>Price: {item.price}</h4>
                            </div>
                          <div className="card-action blue-grey darken-4">
                        <Link to={`/store/${index}`}>View More</Link>
                          </div>
                         </div>
                    </div>
                ))}
           
      </div>
    )
  }
  
export const Store = () => {
    
  
    return(
        <div className="center blue-grey-text">
            <h3>Collection of the trending shoes with best quality.</h3>
            
            <Outlet />
        </div>
    )
  }
  
  export const Details = ({ shoeItems }) => {
  
    const { shoeDetail } = useParams()
    const currentShoe = shoeItems[shoeDetail];
  
    return(
        <div className="container" style={{alignItems:'center', textAlign:'center'}}>

           <div className="row">
            <div className="col s12 m6">
                  <div className="card">
                    <div className="card-image">
                     <img src={currentShoe.pic} className='responsive-img' alt={`${currentShoe.name}`}/>
                     
                      <button className="btn-floating halfway-fab waves-effect waves-light white white-text"><i className="large material-icons"><Link to='/store' as="li">arrow_back</Link></i></button>
                 </div>
            
             </div>
           </div>

           <div className="col s12 m6">
                  <div className="card">
                   
             <div className="card-content white-text  blue-grey darken-4">
             <h1>{currentShoe.name}</h1>
             <h1>Price: {currentShoe.price}</h1>
            
                </div>
             </div>
           </div>
           
          </div>
          {/* <button className="waves-effect waves-light btn-large"><i className="large material-icons"><Link to='/store' as="li">arrow_back</Link>button</i></button> */}
        </div>
    )
  }
//   style={{ width:'50%', height:'auto' }}