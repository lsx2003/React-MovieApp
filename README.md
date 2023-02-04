# 사이드 프로젝트

[프로젝트 요약] 리액트를 활용하여 실시간으로 영화 순위 등 정보를 제공하는 간단한 웹사이트 입니다.

[AWS 정적 배포] AWS S3 활용하여 버킷에 업로드한 상태 입니다. 아래의 URL을 통해 접근 가능합니다.

- http://lmh-repo-deploy1.s3-website.ap-northeast-2.amazonaws.com/

[Synology NAS] 가상 컨테이너(도커)를 활용하여 Express 서버 가동 중 입니다.

# React, Express를 활용한 영화 순위 앱

[Client] React를 활용하여 화면을 구성 했습니다.

- 페이지로 로딩되면 Server로 데이터 fetching을 합니다.
- 스크롤 조작에 따라 영화 포스터가 이동합니다.

[Server] Express를 활용한 API

- Client 요청에 따라 외부 API로 요청을 보내고 응답 받은 데이터를 Client에서 사용할 수 있는 데이터 형태로 변환 후 응답 합니다.

[외부 API]

- 포스터와 영화 순위를 동시에 제공하는 API가 없어서 API 요청을 두 번 진행해서 처리했습니다.
- 네이버 영화 API(포스터 데이터)
- KOIBS(일일 영화 순위)

[향후 계획] 검색 기능 및 영화 정보 제공 기능 추가 구현할 계획입니다.
