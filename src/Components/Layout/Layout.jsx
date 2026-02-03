import Sidebar from "../UI/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;
