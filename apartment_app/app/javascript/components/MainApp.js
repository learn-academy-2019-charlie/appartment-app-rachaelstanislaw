import React from "react"
import PropTypes from "prop-types"
import Header from './Header'

class MainApp extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <div>

        <Header
        logged_in={logged_in}
        sign_in_route={sign_in_route}
        sign_out_route={sign_out_route}
        />

      </div>
    );
  }
}

export default MainApp
