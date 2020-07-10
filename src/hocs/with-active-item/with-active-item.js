import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentItem: {}
      };

      this._itemOnMouseOver = this._itemOnMouseOver.bind(this);
      this._itemOnMouseOut = this._itemOnMouseOut.bind(this);
    }


    _itemOnMouseOver(item) {
      this.setState({
        currentItem: item
      });
    }

    _itemOnMouseOut() {
      this.setState({
        currentItem: {}
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          currentItem={this.state.currentItem}
          onItemMouseOver={this._itemOnMouseOver}
          onItemMouseOut={this._itemOnMouseOut}
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
