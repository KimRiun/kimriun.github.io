# KimRiun 웹 포트폴리오

> 💡밝고 개성있는 나만의 포트폴리오

![Image](https://github.com/user-attachments/assets/9adc7d09-73f1-495c-8604-e138caf04365)

지금까지 해왔던 프로젝트를 정리하고 싶은 마음에 [포트폴리오 웹사이트](https://kimriun.github.io/) 기획을 시작하였습니다.
웹이나 모바일에서 언제든지 볼 수 있도록 반응형 웹으로 개발하고 배포하였습니다.

## 규모

<b>기간</b> : 2025-01-06 ~ 2025-03-01 (약 2개월. 이후 넣고 싶은게 생길 때마다 조금씩 추가)

<b>인원</b> : 1명

<b>기술</b> : React, TypeScript, Styled-Components, Jotai

## 과정

아이디어, 와이어프레임, UI 설계, 개발, 배포 단계로 진행하였습니다.

<figure>
  <img src = "https://github.com/user-attachments/assets/de24c633-8aeb-4ae0-850b-6d891a04fc16" width="400px" height="auto" caption="Figma">
  <figcaption>
    Figma
  </figcaption>
</figure>

## 구성

### 첫 화면

<img src = "https://github.com/user-attachments/assets/eed4e708-4648-4d51-af64-57a4525b91e0" width="645px" height="auto">
<img src = "https://github.com/user-attachments/assets/0e047e9f-e981-4125-a070-7592c7585acd" width="141px" height="auto">
<img src = "https://github.com/user-attachments/assets/305a81be-fd5b-4bb9-b5f8-8514d7cef11c" width="500px" height="auto">

- 제가 생활하는 방을 소재로 하여 사물들이 말하는 컨셉을 떠올렸습니다.
- 그 중 가장 많은 시간을 보내는 컴퓨터 책상을 디자인 하였고, 사물의 배치와 크기는 1.618:1 황금 비율을 고려하였습니다.
- 밝은 느낌을 주는 노란색을 메인으로 전체 분위기를 유지하고, 호기심을 유발할 수 있는 메일 형태로 자기소개를 넣었습니다. 창문에는 저의 만트라를 적어두었습니다.

### History 화면

<img src = "https://github.com/user-attachments/assets/40f23b28-35e2-453e-ae83-5db0d2c9c594" width="645px" height="auto">

- 벽에 걸린 액자처럼 디자인 하였고, 액자에는 직접 찍은 사진의 투명도를 낮춰 삽입하였습니다.
- 대학 생활부터 최근까지 수행했던 일들을 간략히 적어두었습니다.

### Project 화면

<img src = "https://github.com/user-attachments/assets/7f49a560-9088-4e50-b90f-e03051bdd60c" width="645px" height="auto">

- 빠르게 핵심 정보를 전달하는 것이 중요하다고 생각하여 깔끔한 구성으로 가독성을 높이고자 하였습니다.
- 모바일에서도 가독성을 유지할 수 있게 세로로 레이아웃이 배치되도록 반응형으로 만들었습니다.

### Review 화면

<img src = "https://github.com/user-attachments/assets/718c7899-1de8-4399-b820-92a923e5a555" width="645px" height="auto">

- 포트폴리오를 만들 때 고려하거나 느꼈던 점들을 적어두었습니다.

# 이슈

### 1. 첫 화면 - font FOUT 현상

- 창문에 적힌 글자 폰트가 로드되기 전, 시스템 폰트로 표시되어 글자가 깜빡이는 것처럼 보여 UX가 혼란스러운 문제가 있었습니다.
- font-display를 swap이 아닌 block으로 수정하여 해결하였습니다.

### 2. 첫 화면 - 모달 열리기 전 렌더 방지

- 메일 모달을 여는 이벤트가 아님에도 불구하고, 메일 버튼에 적용된 애니메이션이 동작할 때마다 메일 모달이 렌더되는 문제가 있었습니다.
- 메일 모달에 React.memo를 이용하여 해결하였습니다.

### 3. History 화면 - 액자가 돌아갈 때 자연스럽게 앞뒷면 표시하기

- 앞면과 뒷면이 뒤바뀌는 중에는 content가 표시되지 않는 문제가 있었습니다.
- 앞면과 뒷면 상태를 변수로 관리하고 position 등 css를 수정하여 해결하였습니다.
