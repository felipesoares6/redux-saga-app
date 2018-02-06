import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { incrementAsync } from '../ducks/count'

const App = (props) => {
  return (
    <div>
      <p> { props.count } </p>

      <button onClick={ () => props.incrementAsync() }>
        Increment
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.countReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ incrementAsync }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
