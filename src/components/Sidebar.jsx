import React from 'react'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-white/20 text-white shadow-lg'>
        <i>A</i>
        <i>B</i>
        <i>C</i>
        <i>D</i>
        <i>E</i>
    </div>
  );
};

const SidebarIcon = ({icon}) => (
    <div>
        {icon}
    </div>

);

export default Sidebar;