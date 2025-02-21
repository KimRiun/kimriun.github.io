import styled from 'styled-components';

interface HistoryCardProps {
  year: string;
  titleImage?: string;
  alt?: string;
  titleText?: string;
  content: string;
  award?: string;
}

export default function HistoryCard({ item }: { item: HistoryCardProps }) {
  const { year, titleImage, alt, titleText, content, award } = item;

  return (
    <Frame>
      <InnerFrame>
        <Year>{year}</Year>
        <Picture>
          {titleImage ? (
            <PictureImg src={titleImage} alt={alt} />
          ) : (
            <PictureText>{titleText}</PictureText>
          )}
        </Picture>
        <Content>{content}</Content>
        {award && <Award>{award}</Award>}
      </InnerFrame>
    </Frame>
  );
}

const Frame = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  width: 12rem;
  height: 20rem;
  padding: 1rem;
  box-shadow: 0px 10px 10px rgba(59, 45, 38, 0.1);
`;

const InnerFrame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray.lightest};
  box-shadow: inset 0px 3px 3px rgba(141, 102, 83, 0.1);
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
