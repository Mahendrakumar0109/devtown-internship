import React from "react";
import './Card.css';
import { connect } from "react-redux";
import { addorder, resetfilter, resetproductnumber } from "../Action";

const Cards = (filter_name,addorder,table_number) => {
  const [data, setData] = React.useState([]);
  const [cloneData, setcloneData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((Response) => Response.json())
      .then((json) => {
        setData( json);
        setcloneData(json);
      });
  }, []);
  React.useEffect(() => {
if(filter_name !== "All Products"){
let specific = cloneData.filter(values =>values.category === filter_name);
setData(specific);
}
else {
  setData(cloneData);
}
  }, [filter_name]);
  const Handler = async (id,title,image,price)=>{
    if (table_number != null){
     await addorder(id,title,image,table_number,price)
     await resetproductnumber
     await resetfilter
     alert ('Order updated in cart')
    }
    else {
      alert ('your order has been updated successfully')
    }
  }
  return (
    <div>
      <center>
        {data.length > 0 ? (
          <div className="container-fluid">
            <div className="row">
              {data.map((values) => (
                <div className="col-md-3">
                  <div className="card m-2 my-3 p-3"  style={{ height: 320, width: 300, }}  >
                    <img
                      src={values.image}
                      className="card-img-top ms-5"
                      style={{ height: 100, width: 150, }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{values.title}</h6>
                      <div className="card-text">{values.price}</div>
                      <h5 className="card-text">{values.category}</h5>
                      <button className="btn btn-primary my-1" onClick={()=> Handler (values.id, values.title, values.price,values.image)}>Order</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="spinner-border text-primary"></div>
        )}
      </center>
    </div>
  );
};
const mapStateToProps = state =>({
  filter_name : state.filterreducer.filter_name,
  table_number : state.tablereducer.table_number
})
export default connect(mapStateToProps, (addorder))(Cards);
