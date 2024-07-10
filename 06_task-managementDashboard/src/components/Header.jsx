import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-purple-600 text-white">
      <h1 className="text-xl">Dashboard</h1>
      <div className="flex items-center">
        <input type="text" placeholder="Search Task" className="p-2 rounded-md"/>
        {/* search icon */}
      </div>
      <div>
        {/* notification icon */}
        <div>
          <h1>Name</h1>
          <p>job</p>
        </div>
        <div>
          {/* image */}
        </div>
      </div>
    </div>
  );
};

export default Header;
