import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentItem: {}
      };

      this._onItemMouseOver = this._onItemMouseOver.bind(this);
      this._onItemMouseOut = this._onItemMouseOut.bind(this);
    }


    _onItemMouseOver(item) {
      this.setState({
        currentItem: item
      });
    }

    _onItemMouseOut() {
      this.setState({
        currentItem: {}
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          currentItem={this.state.currentItem}
          onItemMouseOver={this._onItemMouseOver}
          onItemMouseOut={this._onItemMouseOut}
        />
      );
    }
  }

  withActiveItem.propTypes = {
    currentItem: PropTypes.object.isRequired,
    onItemMouseOver: PropTypes.func.isRequired,
    onItemMouseOut: PropTypes.func.isRequired
  };

  return WithActiveItem;
};


export default withActiveItem;
