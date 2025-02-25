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
}

export default function HistoryCard({ data }: { data: HistoryCardProps }) {
  const { year, titleText, content, award, image } = data;
  const [showBack, setShowBack] = useState(false);
  const handleClick = () => setShowBack((prev) => !prev);

  return (
    <Frame $showBack={showBack} onClick={handleClick}>
      {!showBack ? (
        <InnerFrame $src={`/images/${image}`}>
          <Year>{year}</Year>
          <Picture>
            <PictureText>{titleText}</PictureText>
          </Picture>
          <Content>{content}</Content>
          {award && <Award>{award}</Award>}
        </InnerFrame>
      ) : (
        <BackFrame>
          <div>유니버스</div>
          <div>미니네이션</div>
          <div>토리스토리</div>
        </BackFrame>
      )}
    </Frame>
  );
}

const Frame = styled.div<{ $showBack: boolean }>`
  background-color: ${({ $showBack }) => ($showBack ? `white` : `white`)};

  border-radius: 0.5rem;
  width: 12rem;
  height: 20rem;
  padding: 1rem;
  box-shadow: 0px 10px 10px rgba(59, 45, 38, 0.1);
  cursor: pointer;
`;

const BackFrame = styled.div``;

const InnerFrame = styled.div<{ $src: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray.lightest};
  box-shadow: inset 0px 3px 3px rgba(141, 102, 83, 0.1);
  background-image: ${({ $src }) => `url(${$src})`};
  background-size: cover;
`;

const Year = styled.p`
  padding-top: 2rem;
  color: #91d7ea;
  font-weight: bold;
`;

const Picture = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PictureImg = styled.img`
  width: 5rem;
  fill: ${({ theme }) => theme.colors.text.secondary};
`;

const PictureText = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Content = styled.p`
  height: 4rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  word-break: keep-all;
  text-align: center;
`;

const Award = styled.p`
  font-size: 0.8rem;
  color: #717171;
`;
