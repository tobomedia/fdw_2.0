import React, {Component} from 'react';

class Delay extends Component{
    constructor() {
      super();

      this.defaultProps = {
        period: 0
      };
      this.state = {
        value: 0
      };

  }

  refresh(props){
    let {value, period} = props;
    setTimeout(() => this.setState({
      value
    }), period);
  }
  componentDidMount() {
    this.refresh(this.props);
  }
  componentWillReceiveProps(next){
    this.refresh(next);
  }
  render(){
    // function-as-children
    debugger;
    return this.props.children(this.state.value);
  }
}


export default Delay
