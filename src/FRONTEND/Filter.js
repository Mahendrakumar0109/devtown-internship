import React from 'react';
import {connect} from 'react-redux';
import { setfilter,resetfilter} from '../Action';

const Filter = (setfilter,resetfilter, filter_name) => {
    const prod =["All categories", "Appliances","Electronics","Audio Books","Books","clothing & Accessories, Garden & Outdoors","Gift Cards"]
    const [filter,setFilter] = React.useState('All Products');
  return (
    <div>
      <center className='mt-3'>
        <span className='h4 me-1 text-primary'>Products:</span>
        <select name="filter" className='me-1' onChange={(e)=>setfilter(e.target.value)}>
            {prod.map((values,index)=>(
                <option value= {values} key ={index}>{values}</option>
            ))}
        </select>
      
      </center>
    </div>
  );
}

const mapStateProps = state =>({
  filter_name : state.filterreducer.filter_name
})
  export default connect(mapStateProps,{setfilter,resetfilter })(Filter);
