import React, { Component } from "react";
import css from "./ColorPicker.module.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 4,
  };

  setActiveIndex = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push("ColorPicker__option__active");
    }

    return optionClasses.join(" ");
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;
    const { label } = options[activeOptionIdx];
    // console.log(activeOptionLabel);

    return (
      <div className={css.ColorPicker}>
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Вибрано колір: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionClassName(index);
            return (
              <button
                type="button"
                key={label}
                className={optionClassName}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
