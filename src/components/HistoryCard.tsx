import { useState } from 'react';
import styled from 'styled-components';

interface HistoryCardProps {
  id: number;
  year: string;
  titleImage?: string;
  alt?: string;
  titleText?: string;
  content: string;
  award?: string;
  image: string;
  backgroundColor: string;
  backContents: { title: string; contents: string[] }[];
}

export default function HistoryCard({ data }: { data: HistoryCardProps }) {
  const { year, titleText, content, award, image, backgroundColor, backContents } = data;
  const [showBack, setShowBack] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => setShowBack((prev) => !prev);

  return (
    <CardContainer>
      <Frame $showBack={showBack} $backgroundColor={backgroundColor} onClick={handleClick}>
        <InnerFrame
          $backgroundColor={backgroundColor}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Year>{year}</Year>
          <Title $image={`/images/${image}`} $isHovered={isHovered}>
            <TitleText>{titleText}</TitleText>
          </Title>
          <Content>{content}</Content>
          {award && <Award>{award}</Award>}
        </InnerFrame>
        <BackFrame $image={`/images/${image}`} $backgroundColor={backgroundColor}>
          <BackContent>
            {backContents.map(({ title, contents }, index) => (
              <div key={index}>
                <b>{title}</b>
                <ul>
                  {contents.map((content, contentIndex) => (
                    <li key={contentIndex}>{content}</li>
                  ))}
                </ul>
              </div>
            ))}
          </BackContent>
        </BackFrame>
      </Frame>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  perspective: 1000px; /* 3D 효과를 위한 원근감 */
`;

const Frame = styled.div<{ $showBack: boolean; $backgroundColor: string }>`
  position: relative;
  width: 14rem;
  height: 24rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 10px rgba(59, 45, 38, 0.1);
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
  transform: ${({ $showBack }) => ($showBack ? 'rotateY(-180deg)' : 'rotateY(0deg)')};
  cursor: pointer;
`;

const BackFrame = styled.div<{ $image: string; $backgroundColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backface-visibility: hidden;
  transform: rotateY(-180deg);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ $image }) => `url(${$image})`};
    background-size: cover;
    background-position: bottom;
    border-radius: 0.5rem;
    opacity: 0.06;
  }
`;

const BackContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.7rem;
  word-break: keep-all;
`;

const InnerFrame = styled.div<{ $backgroundColor: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  box-shadow: inset 0px 3px 3px rgba(141, 102, 83, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  backface-visibility: hidden;
`;

const Year = styled.p`
  width: 100%;
  padding-top: 2rem;
  color: #89ccd8;
  font-size: large;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.div<{ $image: string; $isHovered: boolean }>`
  position: relative;
  width: 100%;
  height: 9rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ $image }) => `url(${$image})`};
    background-size: cover;
    background-position: bottom;
    opacity: 0.5;
    transform: ${({ $isHovered }) => ($isHovered ? 'scale(1.1)' : 'scale(1)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const TitleText = styled.p`
  z-index: 1;
  font-size: x-large;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  opacity: 0.8;
`;

const Content = styled.p`
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: medium;
  color: ${({ theme }) => theme.colors.text.primary};
  word-break: keep-all;
  text-align: center;
`;

const Award = styled.p`
  font-size: small;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
`;
