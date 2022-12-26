import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <Link to="/">Show Người Đăng Kí</Link>
          <li>
            <Link to="/add">Thêm Người Đăng Kí</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
