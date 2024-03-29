# [사이드 프로젝트]
# React, Express를 활용한 영화 순위 앱

**[프로젝트 요약]** 리액트를 활용하여 실시간으로 영화 순위 등 정보를 제공하는 간단한 웹사이트 입니다.

**[AWS 정적 배포]** AWS S3 활용하여 버킷에 업로드한 상태 입니다. 아래의 URL을 통해 접근 가능합니다.

- http://lmh-repo-deploy1.s3-website.ap-northeast-2.amazonaws.com/

**[Synology NAS]** 가상 컨테이너(도커)에서 Express 서버를 가동하고 있습니다.

# 화면 및 기능 구현

**[Client]** React를 활용하여 화면을 구성 했습니다.

- 페이지가 로딩되면 Server로 데이터 fetching을 합니다.
- gsap 라이브러리를 사용하여 스크롤 조작에 따라 영화 포스터 이동을 구현했습니다.

**[Server]** Express를 활용한 API

- Client 요청에 따라 외부 API로 요청을 보내고 응답 받은 데이터를 Client에서 사용할 수 있는 데이터 형태로 변환 후 응답합니다.

**[외부 API]**

- 포스터와 영화 순위를 동시에 제공하는 API가 없어서 두 개의 API를 조합해서 처리했습니다.
- 네이버 영화 API(포스터 데이터)
- KOIBS(일일 영화 순위)

**[발생문제]** CORS 에러 해결 및 렌더링 최적화 문제

- 브라우저에서 API로 데이터를 바로 요청할 경우 CORS 에러가 발생하여, Express로 API 서버를 구축한 후 서버에서 외부 API 데이터를 fetching하는 방식으로 문제를 해결했습니다.
- useCallback hookd과 React.memo를 사용하여 최적화 했습니다. 프로그램이 가벼운 관계로 다른 최적화 방식은 사용하지 않았습니다. 

**[향후 계획]** 영화 세부정보 제공 기능 추가 구현
