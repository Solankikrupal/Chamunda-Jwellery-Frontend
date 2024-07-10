import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChevronRight, BiSolidExit } from "react-icons/bi";
import { FaBox, FaPowerOff, FaReceipt, FaUser, FaUserCheck, FaUserPlus, FaUserTie } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { MdDashboard, MdPayment } from "react-icons/md";
import { SiRedhatopenshift } from "react-icons/si";

type Props = { menuHover: boolean;collapsed:boolean };
type updateOpenMenuType = {[key:string]:string}
type activeMenu = {openSubmenus:updateOpenMenuType,activeItem:string|null}


const SidebarMenuItems = ({ menuHover,collapsed }: Props) => {
  const location = usePathname();
  console.log('location', location)
  const [activeMenu, setActiveMenu] = useState<activeMenu>({ openSubmenus: {}, activeItem: null });

  const toggleMenu = (menuName:string) => {
    setActiveMenu((prev) => {
      const updatedOpenSubmenus:updateOpenMenuType = { ...prev.openSubmenus };
      // Check if the submenu is already open
      if (updatedOpenSubmenus[menuName] === menuName) {
        // If it's open, remove it to close the submenu
        delete updatedOpenSubmenus[menuName];
      } else {
        // If it's closed, add it to open the submenu
        updatedOpenSubmenus[menuName] = menuName;
      }
      return { ...prev, openSubmenus: updatedOpenSubmenus };
    });
  };

  const isMenuActive = (menuName:string) => activeMenu?.openSubmenus[menuName];

  // useEffect(() => {
  //   let loc:openM = location.split('/');
  //   const openSubmenusData = loc.length > 2
  //     ? loc.reduce((acc, item) => {
  //       if( item !== '') acc[item] = item;
  //       return acc;
  //     }, {})
  //     : {};
  //   setActiveMenu((prev) => ({
  //     ...prev,
  //     openSubmenus: openSubmenusData,
  //     activeItem: loc.length > 2 ? loc[1] : location
  //   }));
  // }, [location]);


  const renderMenuItem = () => (
    <>
      <li
        className={`single-sidebar-menu ${
          activeMenu.activeItem === "/" ? "menu-item-active" : ""
        }`}
        onClick={() => toggleMenu("/")}
      >
        <Link href="/admin" className="menu-link">
          <span className="menu-icon flex-grow-0">
            <MdDashboard size={collapsed && !menuHover ? 22 : 18} />
          </span>
          <div className="text-box flex-grow font-bold text-base">
            Dashboard
          </div>
        </Link>
      </li>

      <li
        className={`single-sidebar-menu ${
          activeMenu.activeItem === "/" ? "menu-item-active" : ""
        }`}
        onClick={() => toggleMenu("/")}
      >
        <Link href="/admin/product" className="menu-link">
          <span className="menu-icon flex-grow-0">
            <FaBox size={collapsed && !menuHover ? 22 : 18} />
          </span>
          <div className="text-box flex-grow font-bold text-base">
            Product
          </div>
        </Link>
      </li>

      <li
        className={`single-sidebar-menu ${
          activeMenu.activeItem === "/" ? "menu-item-active" : ""
        }`}
        onClick={() => toggleMenu("/")}
      >
        <Link href="/admin/user" className="menu-link">
          <span className="menu-icon flex-grow-0">
            <FaUser size={collapsed && !menuHover ? 22 : 18} />
          </span>
          <div className="text-box flex-grow font-bold text-base">
            User
          </div>
        </Link>
      </li>

      <li
        className={`single-sidebar-menu ${
          activeMenu.activeItem === "/" ? "menu-item-active" : ""
        }`}
        onClick={() => toggleMenu("/")}
      >
        <Link href="/admin/order" className="menu-link">
          <span className="menu-icon flex-grow-0">
            <FaReceipt size={collapsed && !menuHover ? 22 : 18} />
          </span>
          <div className="text-box flex-grow font-bold text-base">
            Order
          </div>
        </Link>
      </li>

      <li
        className={`single-sidebar-menu ${
          activeMenu.activeItem === "/" ? "menu-item-active" : ""
        }`}
        onClick={() => toggleMenu("/")}
      >
        <Link href="/admin/payment" className="menu-link">
          <span className="menu-icon flex-grow-0">
            <MdPayment size={collapsed && !menuHover ? 22 : 18} />
          </span>
          <div className="text-box flex-grow font-bold text-base">
            Payment
          </div>
        </Link>
      </li>
    </>
  );
  return renderMenuItem();
};

export default SidebarMenuItems;
