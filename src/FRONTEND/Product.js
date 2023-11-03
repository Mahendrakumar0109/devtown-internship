import React from 'react';
import {connect} from "react-redux"
import Header from './Header'
const Product = ({list}) => {
  return (
    <div>
      <Header/>
       <center>
        {list.length > 0 ? (
          <div className="container">
            <div className="row">
              {list.map((values) => (
                <div className="col-md-4 p-2">
                  <div className="card mt-1 mb-1 p-1 pt-2">
                    <img
                      src={values.image}
                      className="card-img-top ms-5 "
                      style={{ height: 120, width: 120 }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{values.title}</h6>
                      <div className="card-text"> Billing Amount Rs:{values.price}</div>
                      <h5 className="card-text">{values.category}</h5>
                    <p>Cart: {values.table_number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h4">
            no order place yet
          </div>
        )}
      </center>
    </div>
  );
}
const mapStateToProps = state =>({
  list: state.orderreducer
})
export default connect(mapStateToProps) (Product)
