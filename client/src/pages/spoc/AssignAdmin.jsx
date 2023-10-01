import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AssignAdmin = () => {

const adminDetails = [
    {
        name:"University Admin 1",
        workEmail:"admin@outlook.com",
        email:"admin@gmail.com",
        profilePhoto:"https://picsum.photos/50",
        designation:"Assistant Professor"
    },
    {
        name:"University Admin 1",
        workEmail:"admin@outlook.com",
        email:"admin@gmail.com",
        profilePhoto:"https://picsum.photos/50",
        designation:"Assistant Professor"
    },
    {
        name:"University Admin 1",
        workEmail:"admin@outlook.com",
        email:"admin@gmail.com",
        profilePhoto:"https://picsum.photos/50",
        designation:"Assistant Professor"
    },
    {
        name:"University Admin 1",
        workEmail:"admin@outlook.com",
        email:"admin@gmail.com",
        profilePhoto:"https://picsum.photos/50",
        designation:"Assistant Professor"
    },
    {
        name:"University Admin 1",
        workEmail:"admin@outlook.com",
        email:"admin@gmail.com",
        profilePhoto:"https://picsum.photos/50",
        designation:"Assistant Professor"
    },
    {
        name:"University Admin 1",
        workEmail:"admin@outlook.com",
        email:"admin@gmail.com",
        profilePhoto:"https://picsum.photos/50",
        designation:"Assistant Professor"
    }
]



    return (
        <div className='flex max-h-screen overflow-hidden w-full gap-1'>

            <div className='shrink grow flex flex-col h-full mr-1 p-2 border rounded-md shadow-md'>
                <h1 className='text-center mt-32'>
                    Insert the form here
                </h1>
                <h1 className='text-center mb-32'>
                    inputs will be name,work email,create password, confirm password
                </h1>
            </div>

            {
                adminDetails.length===0?(<div className='shrink-0 h-full flex flex-col justify-center items-center '>
                    <h1 className='w-fit'>Assigned admins appear here!</h1><h2 className='w-fit'>No admins exist yet</h2>
                    </div>):
                (<div className=' min-h-screen flex flex-col overscroll-auto overflow-y-auto no-scrollbar overflow-x-hidden shrink-0'>
                    {adminDetails.map((item,index)=>{
                        return(
                            <div key={index} className='border mb-2 items-center rounded-md shadow-md hover:scale-95 cursor-pointer p-2 flex w-full'>
                                <img src={item.profilePhoto} className='rounded-full w-[20%] h-fit border m-2' alt="pfp"/>
                                <div className='h-full w-1/2 flex flex-col m-4'>
                                    <h1 className='font-semibold text-xl'>
                                        {item.name}
                                    </h1>
                                    <h2 className='font-semibold'>
                                        {item.designation}
                                    </h2>
                                    <p>{item.workEmail}</p>
                                </div>
                                <div className='w-[5%]'>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='hover:translate-x-2'/>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>)
            }
            
        </div>
    );
}

export default AssignAdmin;
