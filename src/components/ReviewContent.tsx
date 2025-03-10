import styled from 'styled-components';

interface ReviewContentProps {
  title: string;
  images?: string[];
}

export default function ReviewContent({
  title,
  images,
  children,
}: React.PropsWithChildren<ReviewContentProps>) {
  return (
    <ReveiwContentContainer>
      <Title>{title}</Title>
      {images && (
        <ImageContainer>
          {images.map((path, idx) => (
            <img key={idx} src={path} style={{ width: '100%', height: 'auto' }} />
          ))}
        </ImageContainer>
      )}
      <div>{children}</div>
    </ReveiwContentContainer>
  );
}

const ReveiwContentContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
  }
`;

const Title = styled.div`
  font-family: 'GangwonEdu';
  font-size: x-large;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
