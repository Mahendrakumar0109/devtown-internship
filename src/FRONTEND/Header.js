import React from "react";
import {Link, } from 'react-router-dom'
import {connect} from 'react-redux'
const Header = ({count}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <a className="navbar-brand text-white ms-1">DevTown</a>
        <a className="navbar-brand text-white ms-1">Home</a>
        <a className="navbar-brand text-white ms-1">Features</a>
        <a className="navbar-brand text-white ms-1">Products</a>
        <a className="navbar-brand text-white ms-1">Login</a>
        <a className="navbar-brand text-white ms-1">SinUP</a>


        <button className="btn btn-warning me-1">
          <Link  to ='/orders' style = { {color:'white',textDecoration:'none'}}>Cart</Link>
          <span className="badge bg-danger ms-1">Count</span>
        </button>
      </nav>
    </div>
  );
};
const mapStateToProps = state =>({
  count:state.cartreducer.length
})
export default connect(mapStateToProps)(Header);
