import { Link, useLocation } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion';

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link
          to="/"
          className={location.pathname === "/" ? 'active' : ''}
          >
            <img src={logo} alt="Logotipo" className="logo" />
        </Link>

        <Navegacion />
      </div>
    </header>
  );
};

export default Header;