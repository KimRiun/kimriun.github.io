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
  backData: { title: string; contents: string[] }[];
}

export default function HistoryCard({ data }: { data: HistoryCardProps }) {
  const { year, titleText, content, award, image, backgroundColor, backData } = data;
  const [showBack, setShowBack] = useState(false);
  const handleClick = () => setShowBack((prev) => !prev);

  return (
    <Frame $showBack={showBack} $backgroundColor={backgroundColor} onClick={handleClick}>
      {!showBack ? (
        <InnerFrame $backgroundColor={backgroundColor}>
          <Year>{year}</Year>
          <Title $image={`/images/${image}`}>
            <TitleText>{titleText}</TitleText>
          </Title>
          <Content>{content}</Content>
          {award && <Award>{award}</Award>}
        </InnerFrame>
      ) : (
        <BackFrame $image={`/images/${image}`}>
          <BackContent>
            {backData.map((item, index) => (
              <div key={index}>
                <b>{item.title}</b>
                <ul>
                  {item.contents.map((content, contentIndex) => (
                    <li key={contentIndex}>{content}</li>
                  ))}
                </ul>
              </div>
            ))}
          </BackContent>
        </BackFrame>
      )}
    </Frame>
  );
}

const Frame = styled.div<{ $showBack: boolean; $backgroundColor: string }>`
  position: relative;
  background-color: ${({ $showBack, $backgroundColor }) =>
    $showBack ? $backgroundColor : 'white'};
  border-radius: 0.5rem;
  width: 14rem;
  height: 24rem;
  padding: 1rem;
  box-shadow: 0px 10px 10px rgba(59, 45, 38, 0.1);
  cursor: pointer;
`;

const BackFrame = styled.div<{ $image: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.7rem;
`;

const InnerFrame = styled.div<{ $backgroundColor: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  box-shadow: inset 0px 3px 3px rgba(141, 102, 83, 0.1);
  position: relative;
`;

const Year = styled.p`
  width: 100%;
  padding-top: 2rem;
  color: #89ccd8;
  font-size: large;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.div<{ $image: string }>`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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
  }
`;

const TitleText = styled.p`
  z-index: 1;
  font-size: x-large;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  /* color: ${({ theme }) => theme.colors.text.primary}; */
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
