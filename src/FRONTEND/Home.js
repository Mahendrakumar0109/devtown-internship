import React from "react";
import Header from "./Header";
import Table from "./Table";
import Filter from "./Filter";
import Cards from "./Cards";
import Footer from "./Footer";
import Banner from "./Banner";
import './Card.css';
const Home = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <div className="row bg-change">
        <div className="col-md-5">
          <Table />
        </div>
        <div className="col-md-7 mt-4">
          <Filter />
        </div>
      </div>
    
      <Cards/>
      <Footer/>
    </div>
  );
};

export default Home;
