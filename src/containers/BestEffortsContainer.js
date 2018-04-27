import { connect } from 'react-redux';
import { calcEffort } from '../actions/actions';

const mapStateToProps = state => ({
  bestEfforts: state.calcEffortReducer,
});

const mapDispatchToProps = dispatch => ({
  handleBestEfforts: (efforts) => {
    dispatch(calcEffort(efforts));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
