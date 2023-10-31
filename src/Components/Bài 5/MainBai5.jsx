import React, { Component } from "react";
import UserBai5 from "./UserBai5";

export default class MainBai5 extends Component {
  render() {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n            .container{\n                display: flex;\n                 align-items: center;\n                justify-content: center;\n                 min-height: 100vh;\n            }\n        ",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-uppercase mb-0">
                    MANAGER USER
                  </h5>
                </div>
                <div className="table-responsive">
                  <table className="table no-wrap user-table mb-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium pl-4"
                        />
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Age
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Dateofbirth
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Manage
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <UserBai5 />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
