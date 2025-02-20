import React from 'react';
import { FaAward } from 'react-icons/fa6';
import styled from 'styled-components';

interface ProjectInfoProps {
  title: string;
  description: string;
  award?: boolean;
  tags: Array<String>;
}

export default function ProjectInfo({ title, description, award, tags }: ProjectInfoProps) {
  return (
    <ProjectInfoContainer>
      <ProjectTitle>
        <p>{title}</p>
        {award && <FaAward />}
      </ProjectTitle>

      {tags.length > 0 && (
        <TagList>
          {tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </TagList>
      )}
      <Description>
        {description.split('\\n').map((item) => {
          console.log(item);
          return (
            <p>
              {item}
              <br />
            </p>
          );
        })}
      </Description>
    </ProjectInfoContainer>
  );
}

const ProjectInfoContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.8rem;

  p {
    font-size: x-large;
    font-weight: bolder;
    line-height: 1rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    height: 1.5rem;
    width: auto;
  }
`;

const TagList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding-left: 0px;

  li {
    color: ${({ theme }) => theme.colors.gray.default};
    position: relative;
    padding-left: 1rem;

    &::before {
      content: '#';
      position: absolute;
      left: 0;
    }
  }
`;

const Description = styled.div`
  padding-top: 1rem;
`;
