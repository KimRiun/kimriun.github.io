import { useState } from 'react';
import { FaAward } from 'react-icons/fa6';
import styled from 'styled-components';

interface ProjectInfoProps {
  title: string;
  description: string;
  award?: boolean;
  tags: Array<{ id: number; name: string }>;
}

export default function ProjectInfo({ title, description, award, tags }: ProjectInfoProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const maxLength = 125;

  const shortDescription = description.replace(/\n/g, ' ').slice(0, maxLength) + '...';
  const longDescription = description.split('\n');

  return (
    <ProjectInfoContainer>
      <ProjectTitle>
        <p>{title}</p>
        {award && <FaAward />}
      </ProjectTitle>

      {tags.length > 0 && (
        <TagList>
          {tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </TagList>
      )}
      <Description>
        {isExpanded ? (
          longDescription.map((item, i) => {
            return (
              <p key={i}>
                {item}
                <br />
              </p>
            );
          })
        ) : (
          <p>{shortDescription}</p>
        )}
      </Description>
      <ToggleButton onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? '접기' : '더보기'}
      </ToggleButton>
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
  font-size: 1rem;
  padding-top: 1rem;
`;

const ToggleButton = styled.button`
  padding: 1rem 0rem 0rem 0rem;
  color: ${({ theme }) => theme.colors.text.disabled};

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    width: 100%;
    padding: 0.5rem;
    margin-top: 1rem;
    font-size: 1rem;
    border: solid;
    border-color: ${({ theme }) => theme.colors.gray.lighter};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
