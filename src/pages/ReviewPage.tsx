import styled from 'styled-components';
import SectionHead from '../components/SectionHead';

export default function ReviewPage() {
  return (
    <ReviewPageContainer>
      <SectionHead title='Review' color='default' />
    </ReviewPageContainer>
  );
}

const ReviewPageContainer = styled.div`
  width: 100%;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
`;
