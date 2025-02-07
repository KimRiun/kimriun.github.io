import React from 'react';
import InfoPage from './InfoPage';
import HistoryPage from './HistoryPage';
import ProjectsPage from './ProjectsPage';
import FooterPage from './FooterPage';

export default function MainPage() {
  return (
    <div className='w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth'>
      <div className='snap-start'>
        <InfoPage />
      </div>
      <div className='snap-start'>
        <HistoryPage />
      </div>
      <div className='snap-start'>
        <ProjectsPage />
      </div>
      <div className='snap-start'>
        <FooterPage />
      </div>
    </div>
  );
}
