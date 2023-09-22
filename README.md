# orday-front-end

## 커밋 메세지 컨벤션

### 커밋 형식

커밋 메세지 형식은 다음을 따릅니다.

```bash
type: subject #issue-number

body

footer
```

- `type` : 커밋의 종류를 나타냅니다. 종류는 하단 커밋 종류를 참고해주세요.
- `subject` : 커밋의 요약을 나타냅니다.
- `issue-number` : 관련된 이슈 번호를 나타냅니다.
- `body` : 커밋의 자세한 내용을 나타냅니다. (선택)
- `footer` : 커밋과 관련된 이슈를 닫거나, 어떤 변경을 가져오는지 등 추가적인 정보를 나타냅니다. (선택)

<br/>

예시는 다음과 같습니다.

> Carousel 컴포넌트를 스타일링하여 구현

```bash
feat: Carousel 컴포넌트 구현 #123

* 캐러셀 컴포넌트를 구현했습니다. 스타일링 중에 style.css를 수정했습니다.

* Close #123
```


### 커밋 종류 (type)

- `feat` : 새로운 기능
- `fix` : 버그 수정
- `docs` : 문서만 변경
- `design` : CSS 등 사용자 UI 디자인만 일부 변경되는 경우
- `style` : 코드에 영향을 주지 않는 변경 (공백, 세미콜론, 코드 포맷팅 등)
- `refactor` : 코드 리팩토링
- `test` : 테스트 코드 추가, 삭제, 기존 테스트 수정
- `rename` : 파일, 폴더 이름 변경 또는 이동
- `remove`: 파일 삭제 작업만 수행하는 경우
- `chore` : 빌드 스크립트 수정, assets image, 패키지 매니저 등 
