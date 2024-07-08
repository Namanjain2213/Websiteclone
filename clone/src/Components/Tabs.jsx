import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className='gap-4 flex mt-4'>
      <button   onClick={() => setActiveTab('signin')} className={activeTab === 'signin' ? 'active text-blue-500 font-semibold' : '' }>Sign In</button>
      <button onClick={() => setActiveTab('joinin')} className={activeTab === 'joinin' ? 'active text-blue-500 font-bold  ' : ''}>Join In</button>
     
    </div>
  );
};

export default Tabs;
