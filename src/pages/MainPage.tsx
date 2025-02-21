import styled from 'styled-components';
import InfoPage from './InfoPage';
import HistoryPage from './HistoryPage';
import ProjectsPage from './ProjectsPage';
import FooterPage from './FooterPage';
import { useRef } from 'react';

export default function MainPage() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const setSectionRef = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <MainContainer>
      <SnapSection ref={setSectionRef}>
        <InfoPage sectionsRef={sectionsRef} />
      </SnapSection>
      <SnapSection ref={setSectionRef}>
        <HistoryPage />
      </SnapSection>
      <SnapSection ref={setSectionRef}>
        <ProjectsPage />
      </SnapSection>
      <SnapSection ref={setSectionRef}>
        <FooterPage />
      </SnapSection>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const SnapSection = styled.div`
  scroll-snap-align: start;
`;
