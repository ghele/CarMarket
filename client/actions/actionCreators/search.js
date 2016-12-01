import * as types from '../actionTypes';

export function filterAfterSearchField( searchText ) {
  return {
    type: types.FILTER_AFTER_SEARCH_FIELD,
    searchText
  }
}

export function filterAfterBrandDropdown( brandDropdown ) {
  return {
    type: types.FILTER_AFTER_BRAND_DROPDOWN,
    brandDropdown
  }
}

export function filterAfterModelDropdown( filterDropdown ) {
  return {
    type: types.FILTER_AFTER_MODEL_DROPDOWN,
    filterDropdown
  }
}
