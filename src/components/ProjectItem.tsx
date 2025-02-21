import styled from 'styled-components';
import ProjectContent from './ProjectContent';
import WorkImageItem from './WorkImageItem';

import ProjectInfo from './ProjectInfo';
import { FaBuilding, FaFilePdf, FaReadme, FaUser } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa6';
import AboutItem from './AboutItem';

interface ProjectItemProps {
  id: number;
  videoPath: string;
  tags: { id: number; name: string }[];
  title: string;
  description: string;
  award?: boolean;
  workImages: { name: string; alt: string; caption: string }[];
  roles: string[];
  abouts: {
    workSpace: string;
    period: string;
    team: string;
    readMeLink: string;
    fileName?: string;
    filePath?: string;
  };
  techs: string[];
  contributions: string;
}

export default function ProjectItem({ data }: { data: ProjectItemProps }) {
  const {
    videoPath,
    tags,
    title,
    description,
    award,
    workImages,
    roles,
    abouts,
    techs,
    contributions,
  } = data;

  return (
    <ProjectItemContainer>
      <MainContainer>
        <Intro>
          <iframe
            src={`${videoPath}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
        </Intro>
        <ProjectInfo title={title} description={description} tags={tags} award={award} />
        <ProjectContent subTitle='Work'>
          <WorkContainer>
            <RoleContainer>
              {roles.length == 1 && <p>{roles[0]}</p>}
              {roles.length > 1 && (
                <ul>
                  {roles.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              )}
            </RoleContainer>
            {workImages.length > 0 && (
              <WorkImageList>
                {workImages.map((image) => (
                  <WorkImageItem
                    key={image.name}
                    src={`src/assets/images/${image.name}`}
                    alt={image.alt}
                    caption={image.caption}
                  />
                ))}
              </WorkImageList>
            )}
          </WorkContainer>
        </ProjectContent>
      </MainContainer>
      <SubContainer>
        <ProjectContent subTitle='Contribution'>
          <p>{contributions}</p>
        </ProjectContent>
        <ProjectContent subTitle='About'>
          <AboutList>
            <AboutItem icon={FaBuilding} content={abouts.workSpace} />
            <AboutItem icon={FaClock} content={abouts.period} />
            <AboutItem icon={FaUser} content={abouts.team} />
            <AboutItem icon={FaReadme} content='ReadMe' link={abouts.readMeLink} />
            {abouts.fileName && abouts.filePath && (
              <AboutItem icon={FaFilePdf} content={abouts.fileName} link={abouts.filePath} />
            )}
          </AboutList>
        </ProjectContent>
        <ProjectContent subTitle='Tech'>
          <div>{techs.join(', ')}</div>
        </ProjectContent>
      </SubContainer>
    </ProjectItemContainer>
  );
}

const ProjectItemContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 2rem;
  padding-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    flex-direction: column;
  }
`;

const MainContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    width: 100%;
  }
`;
const Intro = styled.div`
  position: relative;
  padding-bottom: 56.25%; // 16:9 비율
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const WorkContainer = styled.div`
  width: 100%;
`;
const WorkImageList = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding-top: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 2rem;
  }
`;
const RoleContainer = styled.div`
  padding: 2rem 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  word-break: keep-all;
`;

const AboutList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SubContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    width: 100%;
    gap: 1rem;
  }
`;
