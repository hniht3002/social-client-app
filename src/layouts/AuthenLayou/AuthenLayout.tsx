import {ReactNode} from 'react';
function AuthenLayout({children}:{children:ReactNode}) {
    return ( 
        <div className='bg-gray-50 dark:bg-gray-900'>
            <div className=''>
                {children}
            </div>
        </div>    
    );
}

export default AuthenLayout;