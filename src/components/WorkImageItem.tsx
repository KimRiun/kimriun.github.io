import styled from 'styled-components';

interface WorkImageItemProps {
  src: string;
  alt: string;
  caption: string;
}

export default function WorkImageItem({ src, alt, caption }: WorkImageItemProps) {
  return (
    <WorkImageItemContainer>
      <img src={src} alt={alt} />
      <p>{caption}</p>
    </WorkImageItemContainer>
  );
}

const WorkImageItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 100%;
    height: auto;
  }

  p {
    color: ${({ theme }) => theme.colors.gray.default};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    img {
      width: 70%;
    }
  }
`;
