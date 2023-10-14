import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import { AiOutlineSave } from 'react-icons/ai';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

function NavBarMobile() {
  const [activeRoute, setActiveRoute] = useState(''); // Sử dụng state để theo dõi route hiện tại
  const location = useLocation(); // Sử dụng useLocation từ react-router-dom để lấy thông tin về route hiện tại

  const className = 'p-2 font-bold text-xl cursor-pointer rounded-lg fade-out';
  const classIcon = 'mt-0 mx-auto';

  // Kiểm tra xem route hiện tại có phải là route đã được chọn hay không
  const isRouteActive = (route:any) => {
    return location.pathname === route ? 'text-blue-500 bg-gray-100' : '';
  };

  return (
    <div className='w-full hidden sm:block text-center'>
      <nav className='flex gap-2'>
        <Link to='/' onClick={() => setActiveRoute('/')}>
          <div className={`${className} ${isRouteActive('/')}`}>
            <AiOutlineHome className={classIcon} />
          </div>
        </Link>
        <Link to='/trend' onClick={() => setActiveRoute('/trend')}>
          <div className={`${className} ${isRouteActive('/trend')}`}>
            <BiTrendingUp className={classIcon} />
          </div>
        </Link>
        <Link to='/friend' onClick={() => setActiveRoute('/friend')}>
          <div className={`${className} ${isRouteActive('/friend')}`}>
            <FaUserFriends className={classIcon} />
          </div>
        </Link>
        <Link to='/save' onClick={() => setActiveRoute('/save')}>
          <div className={`${className} ${isRouteActive('/save')}`}>
            <AiOutlineSave className={classIcon} />
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
