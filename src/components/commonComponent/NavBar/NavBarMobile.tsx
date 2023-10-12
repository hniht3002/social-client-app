import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import { AiOutlineSave } from 'react-icons/ai';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

function NavBarMobile() {
  const [activeRoute, setActiveRoute] = useState(''); // Sử dụng state để theo dõi route hiện tại
  const location = useLocation(); // Sử dụng useLocation từ react-router-dom để lấy thông tin về route hiện tại

  const className = 'grid grid-cols-5 ml-2 mt-8 font-bold text-xl cursor-pointer hover:bg-gray-100 hover:text-blue-600 p-2 rounded-lg fade-out pl-6';
  const classIcon = 'mt-1';

  // Kiểm tra xem route hiện tại có phải là route đã được chọn hay không
  const isRouteActive = (route:any) => {
    return location.pathname === route ? 'text-blue-500 bg-gray-200' : '';
  };

  return (
    <div className='w-full pt-12 pb-4 border-r-2 border-gray-200 h-[100vh] sm:hidden'>
      <nav>
        <Link to='/' onClick={() => setActiveRoute('/')}>
          <div className={`${className} ${isRouteActive('/')}`}>
            <AiOutlineHome className={classIcon} />
            <p>Home</p>
          </div>
        </Link>
        <Link to='/trend' onClick={() => setActiveRoute('/trend')}>
          <div className={`${className} ${isRouteActive('/trend')}`}>
            <BiTrendingUp className={classIcon} />
            <p>News</p>
          </div>
        </Link>
        <Link to='/friend' onClick={() => setActiveRoute('/friend')}>
          <div className={`${className} ${isRouteActive('/friend')}`}>
            <FaUserFriends className={classIcon} />
            <p>Friend</p>
          </div>
        </Link>
        <Link to='/save' onClick={() => setActiveRoute('/save')}>
          <div className={`${className} ${isRouteActive('/save')}`}>
            <AiOutlineSave className={classIcon} />
            <p>Save</p>
          </div>
        </Link>
      </nav>
      <Routes>
        <Route path='/'></Route>
        <Route path='/friend'></Route>
        <Route path='/trend'></Route>
        <Route path='/group'></Route>
        <Route path='/save'></Route>
      </Routes>
    </div>
  );
}

export default NavBarMobile;
