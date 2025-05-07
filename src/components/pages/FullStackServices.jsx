import React from 'react';
import SaplingProductCard from '../data/SaplingProductCard';
const FullStackServices = () => {
  return (

    <div className="container mt-2">
    <SaplingProductCard />
        <div className="container card card-body mt-2 text-center bg-light py-5">
        <h1 className="text-primary">Full Stack Web App Services</h1>
        <h2 className="text-secondary">Calling all ideas. </h2>
        <h3 className="text-secondary">Come to life with these product offerings</h3>
        <div className="row mt-2">
        <div className="col card m-1 align-item-center">    
        <h3 className="mt-3">Proof of Concept</h3>
        <h1 className="text-center"><i className={`fas fas-xl fa-seedling text-primary`}></i></h1>
            <table className="table table-responsive-sm text-center">

                <thead>
                    <tr><th>Details</th><th className="d-none d-lg-table-cell">Values</th></tr>
                </thead>
                <tbody>
                <tr><td className="d-lg-table-cell">Price</td><td className="d-none d-lg-table-cell">$500</td></tr>
                </tbody>
            </table>
            <p className="card-text mb-2">
            A skeleton web application providing the core services the product is revolved around. Very similar to 
            the project samples that are provided in the projects tab.
            </p>
        </div>
        <div className="col card m-1 align-item-center"> 
        <h3 className="mt-3">Minimum Viable Product</h3>
            <h1 className="text-center"><i className={`fas fas-xl fa-tree text-primary`}></i></h1>
            <table className="table table-responsive-sm text-center">
                <thead>
                    <tr><th>Details</th><th className="d-none d-lg-table-cell">Values</th></tr>
                </thead>
                <tbody>
                <tr><td className="d-lg-table-cell">Price</td><td className="d-none d-lg-table-cell">$1000</td></tr>
                </tbody>
            </table>
            <p className="card-text mb-2">
            A more dedicated web application with a more client / consumer friendly UI. Would be similar to this portfolio website in its entirety. 
            </p>
        </div>
        </div>
        <div className="row">
        <div className="col align-item-center">
        <p className="m-2"> If any of the projects peaked your interest and you have an idea you would like to develop, please feel free to reach out
            to me and we can go on this dank journey to positive cash flows together. Please add "FSS" to the header of your
            email.
        </p>
        <h6>Email: chung.ejy@gmail.com</h6>
        </div>
      </div> 
        </div>
    </div>
  );
};

export default FullStackServices;
