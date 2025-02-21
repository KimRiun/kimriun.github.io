import styled from 'styled-components';
import SectionHead from '../components/SectionHead';
import ProjectItem from '../components/ProjectItem';
import projectData from '../data/projectData.json';

export default function ProjectsPage() {
  return (
    <ProjectsPageContainer>
      <SectionHead title='Projects' color='primary' />
      <ProjectList>
        {projectData.map((data) => (
          <ProjectItem key={data.id} data={data} />
        ))}
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
  gap: 5rem;

  & > div {
    border-bottom: solid;
    border-color: ${({ theme }) => theme.colors.gray.lighter};
  }

  & > div:last-child {
    border-bottom: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    width: 100%;
    & > div {
      border-bottom: none;
    }
  }
`;
