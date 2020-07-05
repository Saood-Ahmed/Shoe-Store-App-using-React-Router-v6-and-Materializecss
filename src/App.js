import React from 'react';
import { 
        BrowserRouter as Router,
        Routes,
        Route,
        // useParams,
        Link,
        // Outlet
       } from 'react-router-dom';
 
import Home from './components/Home';
import { Store, StoreIndex, Details } from './components/Store';
import { shoeItems } from './components/ShoeItems';

// import Red from './img/red.jpg';
// import Black from './img/black.jpg';
// import Blue from './img/blue.jpg';
// import White from './img/white.jpg';




function App() {
  return (
    <Router>
    <div className="container-fluid">
    <nav>
    <div className="nav-wrapper blue-grey darken-4">
      <a href="/" className="brand-logo center">Shoes</a>
      <ul id="nav-mobile" >
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/store'>Store</Link></li>
      
      </ul>
    </div>
  </nav>
     
    
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path ='/store' element={<Store />} >
            <Route path ='/' element={<StoreIndex />} />
            <Route path = ':shoeDetail' element={<Details />}/>
          </Route> */}

          <Route path ='/store' element={<Store />} >
            <Route path ='/' element={<StoreIndex shoeItems={shoeItems}/>} />
            <Route path = ':shoeDetail' element={<Details shoeItems={shoeItems}/>}/>
          </Route>

        </Routes>
        <footer class="page-footer blue-grey darken-4" style={{paddingBottom:'25px'}}>
          <div class="container">
            <div class="center ">
              <h6>Shoe Store App Using React-Router V6 and Materialize.css</h6>
              
            </div>
          </div>
        </footer>
    </div>
    </Router>
  );
}

export default App;


//The Store Component
// const StoreIndex = () => {

//   return(
//     <div>
//       <ol>
//               {shoeItems.map((item, index) => (
//                   <li key = {index}>
//                       <Link to={`/store/${index}`}>
//                       <h4>Name: {item.name}</h4>
//                       <img src={item.pic} style={{ width:'25%', height:'auto' }}/>
//                       <h4>Price: {item.price}</h4>
//                       </Link>
//                   </li>
//               ))}
//           </ol>
//     </div>
//   )
// }

// const Store = () => {
  

//   return(
//       <div>
//           <h1>The Shoes are as follows:</h1>
          
//           <Outlet />
//       </div>
//   )
// }

// const Details = () => {

//   const { shoeDetail } = useParams()
//   const currentShoe = shoeItems[shoeDetail];

//   return(
//       <div style={{alignItems:'center', textAlign:'center'}}>
      
//          <h1>{currentShoe.name}</h1>

//           <img src={currentShoe.pic} style={{ width:'50%', height:'auto' }} alt={`${currentShoe.name}`}/>

//          <h1>{currentShoe.price}</h1>
//       </div>
//   )
// }

//The Shoe Items 

// const shoeItems = [

//   {
//     name: 'Red Shoe',
//     price: '$200',
//     pic: Red
//   },

//   {
//     name: 'Black Shoe',
//     price: '$300',
//     pic: Black
//   },

//   {
//     name: 'Blue Shoe',
//     price: '$400',
//     pic:Blue
//   },

//   {
//     name: 'White Shoe',
//     price: '$500',
//     pic: White
//   }

// ]