import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/data/data";
import PropTypes from "prop-types";
import {getCurrentSortType, getSortListIsOpen} from "../../reducer/data/selectors.js";

const sortingType = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

const Sorting = ({currentSortType, sortListIsOpen, onSortListClick, onSortTypeClick}) => {
  const isOpenSortClass = sortListIsOpen ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={onSortListClick}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={isOpenSortClass}>
        {sortingType.map((type, i) => {
          return (
            <li key={`sortType-${i}`} className="places__option" tabIndex="0" onClick={() =>onSortTypeClick(type)}>   {type}
            </li>);
        })}
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  currentSortType: getCurrentSortType(state),
  sortListIsOpen: getSortListIsOpen(state)
});

Sorting.propTypes = {
  currentSortType: PropTypes.string.isRequired,
  sortListIsOpen: PropTypes.bool.isRequired,
  onSortListClick: PropTypes.func.isRequired,
  onSortTypeClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSortListClick() {
    dispatch(ActionCreator.sortListToggle());
  },
  onSortTypeClick(sort) {
    dispatch(ActionCreator.changeSortType(sort));
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
