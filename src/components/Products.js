import Products from '../Products.json';

import React  from 'react'
import {connect} from 'react-redux'

function Products12(props) {
    // const addCart=(id)=>{
    //     if(localStorage.getItem('mycart')!= undefined){
    //         let arr = JSON.parse(localStorage.getItem('mycart'));
    //         if(arr.includes(id)){
    //             alert('already added id');
    //         }
    //         else{
    //             arr.push(id)
;
    //             localStorage.setItem('mycart', JSON.stringify(arr));
    //             alert("Added to your cart");
                
    //         }
            
    //     }
    //     else{
    //         let arr=[];
    //         arr.push(id)
;
    //         localStorage.setItem('mycart', JSON.stringify(arr));
    //         alert("Added to your cart");
    //     }
    //     const mapDispatchToProps=(dispatch)=>{
    //         return {
    //           cartAdd:function(){
    //             dispatch({type:'INC',payload:1})
                
    //           }
    //         }
    //     }
    // }
    return (
        <>
        <ul className="nav">
        <li className="nav-item">
        <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/" >Cart {props.mycounter}</a>
            
        </li>
        </ul>
        <h3 className="heading m-3 p-3">Products</h3>
        
        <div className="row" style={{marginLeft:"60px"}}>
        {Products.products.map((item, i) => (
            <div className="col-sm-4">
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" key={i} src={`${item.images}` }alt={"images"}/>
            <div className="card-body">
                <h5 className="card-title" key={i}>{item.pname}</h5>
                <p className="card-text">${item.price}</p>
                <button className="btn btn-primary" 
                onClick={()=>props.cartAdd(item.id)}>Add to Cart</button>
           
            </div>
            </div>
            </div>
             ))}
      </div>
     
                        
                        
                    
        </>
    )
}
const mapStateToProps=(state)=>{
    return{
      mycounter:state.cart
    }
  }
const mapDispatchToProps=(dispatch)=>{
    return {

      cartAdd:function(id){
        if(localStorage.getItem('mycart')!= undefined){
            let arr = JSON.parse(localStorage.getItem('mycart'));
            if(arr.includes(id)){
                alert('already added id');
                
            }
            else{
                arr.push(id)
;
                localStorage.setItem('mycart', JSON.stringify(arr));
                alert("Added to your cart");
                dispatch({type:'INC',payload:1})
                
            }
            
        }
        else{
            let arr=[];
            arr.push(id)
;
            localStorage.setItem('mycart', JSON.stringify(arr));
            alert("Added to your cart");
            dispatch({type:'INC',payload:1})
        }
        

        
      }
       
    
      
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Products12);