import React from 'react';
import styled from 'styled-components';
import ToriStoryVideo from '@videos/toriStory.mp4';
import ToriStoryTogether from '@images/toriStoryTogether.gif';
import ToriStoryRandom from '@images/toriStoryRandom.gif';
import ToriStoryTotori from '@images/toriStoryTotori.gif';
import ProjectContent from './ProjectContent';
import WorkImageItem from './WorkImageItem';

import ProjectInfo from './ProjectInfo';
import { FaBuilding, FaFilePdf, FaReadme, FaUser } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa6';
import AboutItem from './AboutItem';

export default function ProjectItem() {
  const tags = ['라이프스타일', '습관추적'];
  const techs = ['React', 'TypeScript', 'Vite', 'pnpm', 'PWA', 'SWR', 'Jotai', 'Tailwind', 'MUI'];

  return (
    <ProjectItemContainer>
      <MainContainer>
        <Intro controls>
          <source src={ToriStoryVideo} type='video/mp4' />
        </Intro>
        <ProjectInfo
          title='토리스토리(ToriStory)'
          description='소소한 도전 과제를 달성하고 공유하며 마음의 평화를 찾도록 돕는 웹앱 서비스입니다.\n\n
          경쟁에 지친 청년들이 삶에 활력을 얻기를 바라며 만들었습니다. 예를 들어, 공원을
              산책하거나 하늘을 올려다보는 등의 작은 도전을 통해 일상의 여유를 느끼고, 긍정적인
              경험을 쌓으며 성공하는 습관을 만들어갈 수 있습니다. 또한, 이러한 도전 과제를 다른
              사람들과 공유하며 더욱 큰 동기부여를 얻고, 하루를 되돌아보는 감사 일기를 작성하며 삶의
              소중함을 느낄 수 있습니다.\n\n
              소소하지만 확실한 행복을 전하는 우리들의 이야기, 토리스토리.\n
              오늘을 행복하게 살아가며, 더 밝은 내일 속에서 스스로를 사랑하는 청년들이 많아지기를
              기대합니다.'
          tags={tags}
          award={true}
        />
        <ProjectContent subTitle='Work'>
          <WorkContainer>
            <WorkImageList>
              <WorkImageItem
                src={ToriStoryTogether}
                alt='공동 도전 참여하고 인증하기'
                caption='공동 도전 참여하고 인증하기'
              />
              <WorkImageItem
                src={ToriStoryRandom}
                alt='랜덤 도전 달성하기'
                caption='랜덤 도전 달성하기'
              />
              <WorkImageItem src={ToriStoryTotori} alt='티켓 뽑기' caption='티켓 뽑기' />
            </WorkImageList>
            <RoleContainer>
              <ul>
                <li>
                  도전 과제 컴포넌트를 만들고 관련된 화면을 개발했습니다. 도전 과제는 ‘공동’,
                  ‘랜덤’, ‘자유’ 유형으로 나뉘기 때문에 이들의 공통 컴포넌트를 만들고 각 유형별
                  특징에 맞게 구현했습니다.
                </li>
              </ul>
            </RoleContainer>
          </WorkContainer>
        </ProjectContent>
      </MainContainer>
      <SubContainer>
        <ProjectContent subTitle='Contribution'>
          <p>프론트엔드, 디자인</p>
        </ProjectContent>
        <ProjectContent subTitle='About'>
          <AboutList>
            <AboutItem icon={FaBuilding} content='삼성 청년 SW 아카데미' />
            <AboutItem icon={FaClock} content='7주 (2023.10 ~ 2023.11)' />
            <AboutItem icon={FaUser} content='6인 (FE 3, BE 3)' />
            <AboutItem
              icon={FaReadme}
              content='ReadMe'
              link='https://github.com/ToriStory/ToriStory'
            />
            <AboutItem
              icon={FaFilePdf}
              content='시나리오'
              link='https://drive.google.com/file/d/1G1xKcj68XbRPMhDQx9Y3GXxalC-C2RVO/view?usp=sharing'
            />
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

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    flex-direction: column;
  }
`;

const MainContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    width: 100%;
  }
`;
const Intro = styled.video`
  width: 100%;
  height: auto;

  /* @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  } */
`;

const WorkContainer = styled.div`
  width: 100%;
`;
const WorkImageList = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 2rem;

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
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    width: 100%;
  }
`;
