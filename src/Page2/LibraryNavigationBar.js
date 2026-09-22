
import { Outlet } from 'react-router-dom';

const LibraryCategory = () => {
    return (
        <div className='bg-white mt-5'>
            <div>
                <Outlet />
            </div>


        </div>

    )
}

export default LibraryCategory;