import React from "react";
import Controls from "./Controls";
import Value from "./Value";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //тут описуємо проптайпс, ДО СТЕЙТА, бр так прийнято
  };

  state = {
    value: this.props.initialValue,
  }; //аналог   constructor() {
  // super();

  // this.state = {
  //   value: 5,
  // };
  // }

  handleIncrement = () => {
    // this.setState({
    //   value: 10, //ТАК ТІЛЬКИ КОЛИ МИ ХОЧЕМО ПЕРЕЗАПИСАТИ НОВЕ ЗНАЧЕННЯ ОДИН РАЗ, АНУЛЮВАВШИ ПОВЕРЕДНЄ ЗНАЧЕННЯ ПОВНІСТЮ, А НЕ ДОДАТИ ДО ПОПЕРЕДНЬОГО
    // });
    this.setState((prevState) => {
      return {
        value: prevState.value + 1, //ТАК ОБНОВЛЯТИМЕ ПОПЕРЕДНЄ ЗНАЧЕННЯ ЗАМІСТЬ ПРОСТО ОБЄКТА, ФУНКЦІЯ, ЩО ПОВЕРТАЄ ОБЄКТ
      };
    });

    // console.log("Збільшили на 1");
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return { value: prevState.value - 1 };
    });

    // console.log("Зменшили на 1");
    // console.log(event);
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
