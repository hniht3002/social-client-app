import {ReactNode} from 'react'
function MainLayout({children}:{children: ReactNode}) {
    return (
        <>
            <h1>MainLayout</h1>
            {children}
        </>
    );
}

export default MainLayout;