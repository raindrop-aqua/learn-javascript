var App = React.createClass({
  getInitialState: function () {
    return {
      firstName: this.props.firstName,
      lastName: this.props.lastName
    }
  },
  handleChange: function () {
    var firstName = this.refs.firstName.getDOMNode().value;
    var lastName = this.refs.lastName.getDOMNode().value;
    this.setState({
      firstName: firstName,
      lastName: lastName
    });
  },
  render: function () {
    var fullName = this.state.firstName + " " + this.state.lastName;
    return (
      <div>
      FirstName: <input ref="firstName" onChange={this.handleChange} value={this.state.firstName}/><br/>
      LastName: <input ref="lastName" onChange={this.handleChange} value={this.state.lastName}/><br/>
      FullName: {fullName}
      </div>
    );
  }
});

React.render(<App firstName="Taro" lastName="Yamada"/>, document.body);