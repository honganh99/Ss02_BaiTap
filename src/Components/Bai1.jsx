import React, { Component } from "react";

export default class ListMenu extends Component {
  render() {
    let listMenu = ["HTML", "Javascrip", "Python", "C#"];
    return (
      <div>
        <h1>DANH SACH KHOA HOC</h1>
        {listMenu.map((i, e) => (
          <ul key={e}>
            <li>{i}</li>
          </ul>
        ))}
      </div>
    );
  }
}
