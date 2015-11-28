var AppInfo = React.createClass({
  render: function() {
    return (
      <div>
        Application Name: {this.props.app_name}
        <br />
        Rails Version: {this.props.rails_version}
      </div>
    );
  }
});
