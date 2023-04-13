import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/badForm" className="nav-link">
              Bad Form
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/goodFormWithUseId" className="nav-link">
              Good Form with useId
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/badTransition" className="nav-link">
              Bad Transition
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/goodTransition" className="nav-link">
              Good Transition
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/useDeferredValue" className="nav-link">
              useDeferredValue
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/useSyncExternalStore1" className="nav-link">
              useSyncExternalStore Ex1
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/useSyncExternalStore2" className="nav-link">
              useSyncExternalStore Ex2
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/useInsertionEffect" className="nav-link">
              useInsertionEffect
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};
export default Home;
