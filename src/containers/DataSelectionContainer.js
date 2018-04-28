import { connect } from 'react-redux';
import { selectData } from '../actions/actions';

export const mapStateToProps = state => ({
  selectedData: state.selectDataReducer,
});

export const mapDispatchToProps = dispatch => ({
  handleSelectedData: (data) => {
    dispatch(selectData(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
