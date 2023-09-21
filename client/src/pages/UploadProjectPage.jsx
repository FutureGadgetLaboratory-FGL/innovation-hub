import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Nav from '../components/nav/Nav';
import UploadProject from '../components/UploadProject';

const UploadProjectPage = () => {
    return (
			<>
				<div className="flex ">
					<Sidebar />
					<div className="w-[83%]">
						<Nav />
						<UploadProject/>
					</div>
				</div>
			</>
		);
}

export default UploadProjectPage;
