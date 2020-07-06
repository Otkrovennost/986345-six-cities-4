import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentItem: null
      };

      this._itemClickHandler = this._itemClickHandler.bind(this);
    }


    _itemClickHandler(item) {
      this.setState({
        currentItem: item
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onItemClick={this._itemClickHandler}
        />
      );
    }
  }

  withActiveItem.propTypes = {
    onItemClick: PropTypes.func.isRequired
  };

  return WithActiveItem;
};


export default withActiveItem;
