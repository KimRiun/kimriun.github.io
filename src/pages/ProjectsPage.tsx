import styled from 'styled-components';
import SectionHead from '../components/SectionHead';
import ProjectItem from '../components/ProjectItem';

export default function ProjectsPage() {
  return (
    <ProjectsPageContainer>
      <SectionHead title='Projects' color='primary' />
      <ProjectList>
        <ProjectItem></ProjectItem>
      </ProjectList>
    </ProjectsPageContainer>
  );
}

const ProjectsPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
`;

const ProjectList = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    width: 100%;
  }
`;
