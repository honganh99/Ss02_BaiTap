import React, { Component } from "react";
import ListProd from "./ListProd";
import Paypal from "./Paypal";

export default class MainBai4 extends Component {
  render() {
    return (
      <div>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">

                      <ListProd />

                      <Paypal />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
