import { NavigationLink } from './NavigationLink';

export const Navbar = () => {
  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavigationLink to="/" text="Home" />
          <NavigationLink to="/people" text="People" />
        </div>
      </div>
    </nav>
  );
};