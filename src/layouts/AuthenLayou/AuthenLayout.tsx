import {ReactNode} from 'react';
function AuthenLayout({children}:{children:ReactNode}) {
    return ( 
        <div className='bg-red-400 w-screen h-screen flex items-center justify-center'>
            
            <div className=''>
                {children}
            </div>
        
        </div>    
    );
}

export default AuthenLayout;