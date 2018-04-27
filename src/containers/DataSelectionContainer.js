import { connect } from 'react-redux';
import { selectData } from '../actions/actions';

const mapStateToProps = state => ({
  selectedData: state.selectDataReducer,
});

const mapDispatchToProps = dispatch => ({
  handleSelectedData: (data) => {
    dispatch(selectData(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
