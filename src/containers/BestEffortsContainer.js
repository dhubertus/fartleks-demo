import { connect } from 'react-redux';
import { calcEffort } from '../actions/actions';

export const mapStateToProps = state => ({
  bestEfforts: state.calcEffortReducer,
});

export const mapDispatchToProps = dispatch => ({
  handleBestEfforts: (efforts) => {
    dispatch(calcEffort(efforts));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
