import styled from 'styled-components';
import SectionHead from '../components/SectionHead';
import ReviewContent from '../components/ReviewContent';
import PaperTopSVG from '@images/paperTop.svg';

export default function ReviewPage() {
  return (
    <ReviewPageContainer>
      <SectionHead title='Review' color='default' />
      <PaperTopImage src={PaperTopSVG} />
      <Paper>
        <ReviewContent title='기획' images={['/images/review0.png']}>
          <p>
            2025년 1월 6일, 지금까지 해왔던 프로젝트를 정리하고 싶은 마음에 포트폴리오 웹사이트
            기획을 시작하였습니다.
          </p>
          <p>웹이나 모바일에서 언제든지 볼 수 있도록 반응형 웹으로 개발하고 배포하였습니다.</p>
        </ReviewContent>
        <ReviewContent title='첫화면' images={['/images/review2.gif', '/images/review1.png']}>
          <p>제가 생활하는 방을 소재로 하여 사물들이 말하는 컨셉을 떠올렸습니다.</p>
          <p>
            그 중 가장 많은 시간을 보내는 컴퓨터 책상을 디자인 하였고, 사물의 배치와 크기는 1.618:1
            황금 비율을 고려하였습니다.
          </p>
        </ReviewContent>
        <ReviewContent title='History 화면' images={['/images/review3.gif']}>
          <p>
            벽에 걸린 액자처럼 디자인 하였고, 액자에 직접 찍은 사진의 투명도를 낮춰 삽입하였습니다.
          </p>
          <p>액자 뒷면에는 지금까지 수행한 일들을 간략히 적어두었습니다.</p>
        </ReviewContent>
        <ReviewContent title='Project 화면' images={['/images/review4.png']}>
          <p>빠른 정보 전달이 중요하다고 생각하여 깔끔한 구성으로 가독성을 높이고자 하였습니다.</p>
          <p>
            모바일에서도 가독성을 유지할 수 있게 세로로 레이아웃이 배치되도록 반응형으로
            만들었습니다.
          </p>
        </ReviewContent>
      </Paper>
    </ReviewPageContainer>
  );
}

const ReviewPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const PaperTopImage = styled.img`
  width: 80%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
  }
`;

const Paper = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem;
  gap: 5rem;
  background-color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
    gap: 4rem;
  }
`;
