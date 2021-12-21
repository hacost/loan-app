import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions/App';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <>
      <header className='item header'>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='logo' />
        </Link>
        <div className='header__menu'>
          { hasUser ? (
            <>
              <div className='header__menu--profile'>
                <img src={userIcon} alt='User' />
                <p>
                  {user.firstName}
                </p>
              </div>
              <ul>
                <li><a href='#profile'>Cuenta</a></li>
                <li>
                  <a href='#logout' onClick={handleLogout}>
                    Cerrar Sesión
                  </a>
                </li>
              </ul>
            </>
          ) :
            (
              <Link to='/login'>
                Iniciar Sesión
              </Link>
            )}

        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
