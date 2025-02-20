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
  padding: 1rem;

  & > div {
    padding: 1rem 0.5rem;
  }
`;

const SubTitle = styled.p`
  font-size: large;
  font-weight: bold;
  padding-bottom: 0.5rem;
  border-bottom: solid;
  border-color: ${({ theme }) => theme.colors.gray.lighter};
`;
