import React, { Component } from "react";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  };

  //   show = () => {
  //     this.setState({
  //       visible: true,
  //     });
  //   };

  //   hide = () => {
  //     this.setState({
  //       visible: false,
  //     });
  //   };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dopdown__toggle" onClick={this.toggle}>
          {this.state.visible ? "Приховати" : "Показати"}
        </button>

        {/* 
        <button type="button" className="Dopdown__toggle" onClick={this.hide}>
          Приховати
        </button> */}

        {this.state.visible && (
          <div className="Dropdow__menu">Випадаюче меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;

//onMouseOver - подія ховера
