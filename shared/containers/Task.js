import { connect } from 'react-redux'
import { fetchItem, fetchAccount } from '../actions/Task'
import Task from '../components/Task/index'

const mapStateToProps = (state) => {
  return {
    task: state.task
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (uuid) => {
      dispatch(fetchItem(uuid))
    },
    fetchAccount: (uuid) => {
      dispatch(fetchAccount(uuid))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)