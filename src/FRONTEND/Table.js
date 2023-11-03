import React from 'react';
import {connect} from "react-redux"
import {setprod_num} from '../Action';

const Table = ({products_num,setprod_num}) => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const inActiveBtn = 'btn btn-outline-primary m-2';
    const activeBtn = 'btn btn-outline-primary m-2 active';
    const [number,setNumber] = React.useState(null);
  return (
    <div>
      <center className='mt-2'>
        <h4 className='text-info'>Please select your Product :</h4>
        {numbers.map((num,index)=>(
            
            <div style={{display:'inline'}} key ={index}>
               
                <button className={number===num?activeBtn:inActiveBtn}onClick={()=>setprod_num(num)}>
                    {num}
                </button>
                
            </div>
        ))}
      </center>
    </div>
  );
}
 const mapStateTOProps = state=>({
  products_num : state.tablereducer.prod_num
 })
export default connect(mapStateTOProps,{setprod_num}) (Table);
