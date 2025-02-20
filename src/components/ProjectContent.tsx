import React from 'react';
import styled from 'styled-components';

interface ProjectContentProps {
  subTitle: string;
  children?: React.ReactNode;
}

export default function ProjectContent({ subTitle, children }: ProjectContentProps) {
  return (
    <ContentContainer>
      <SubTitle>{subTitle}</SubTitle>
      <div>{children}</div>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  & > div {
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: 1rem 0rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    padding: 1rem;
  }
`;

const SubTitle = styled.p`
  font-size: large;
  font-weight: bold;
  padding-bottom: 0.5rem;
  border-bottom: solid;
  border-color: ${({ theme }) => theme.colors.gray.lighter};
`;
