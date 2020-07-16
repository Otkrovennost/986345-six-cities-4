import React, {Fragment} from "react";
import PropTypes from "prop-types";

const Avatar = ({email}) => {
  return (
    <Fragment>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{email}</span>
    </Fragment>
  );
};


Avatar.propTypes = {
  email: PropTypes.string.isRequired
};

export default Avatar;
