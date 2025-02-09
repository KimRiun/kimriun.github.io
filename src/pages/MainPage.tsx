import styled from 'styled-components';
import InfoPage from './InfoPage';
import HistoryPage from './HistoryPage';
import ProjectsPage from './ProjectsPage';
import FooterPage from './FooterPage';

export default function MainPage() {
  return (
    <MainContainer>
      <SnapSection>
        <InfoPage />
      </SnapSection>
      <SnapSection>
        <HistoryPage />
      </SnapSection>
      <SnapSection>
        <ProjectsPage />
      </SnapSection>
      <SnapSection>
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
