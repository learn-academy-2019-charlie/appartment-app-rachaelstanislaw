import React from "react"
import PropTypes from "prop-types"
class Header extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <div>
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">My Apartments</a>
              </li>
            </ul>

            <div className="Nav-log">
            {logged_in &&
              <div>
              <a href={sign_out_route}>Sign Out</a>
              </div>
            }
            {!logged_in &&
              <div>
              <a href={sign_in_route}>Sign In</a>
              </div>
            }
            </div>

          </div>

        </nav>
      </ React.Fragment>
      </div>
    );
  }
}

export default Header
