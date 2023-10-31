import React, { Component } from "react";
import HeaderBai6 from "./HeaderBai6";
import ListProdB6 from "./ListProdB6";
import FooterB6 from "./FooterB6";
import MenuB6 from "./MenuB6";

export default class MainBai6 extends Component {
  render() {
    return (
      <>
        {/* Header  */}
        <HeaderBai6></HeaderBai6>
        {/* End header area */}
        {/* End site branding area */}
        <MenuB6></MenuB6>
        {/* End mainmenu area */}
        <div className="product-big-title-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="product-bit-title text-center">
                  <h2>Shop</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* List product */}
        <ListProdB6></ListProdB6>

        {/* Footer area */}
        <FooterB6></FooterB6>
        {/* Latest jQuery form server */}
        {/* Bootstrap JS form CDN */}
        {/* jQuery sticky menu */}
        {/* jQuery easing */}
        {/* Main Script */}
      </>
    );
  }
}
