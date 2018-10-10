import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_action.js';
import Signup from './signup';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (formUser) => dispatch(createNewUser(formUser))
  };
};
