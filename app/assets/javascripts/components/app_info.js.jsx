var AppInfo = React.createClass({
  render: function() {
    return (
      <aside>
        <p>Application Name: <code class="value">{this.props.app_name}</code></p>
        <p>Rails Version: <code class="value">{this.props.rails_version}</code></p>
      </aside>
    );
  }
});
