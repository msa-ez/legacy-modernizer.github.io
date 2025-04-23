---
description: ''
sidebar: 'started'
---
<div class="container mt-4 mb-4">

## 사용 방법

**1. [Legacy Modernizer](http://modernizer-app.uengine.io/) 에 접속합니다.**

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/01.png">
<br><br>

**2. [Anthropic Console](https://console.anthropic.com/settings/keys) 사이트를 통해 API 키를 발급받아서 입력합니다.**

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/02.png">
<br>

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/03.png">
<br><br>

**3. PL/SQL 코드를 다운받아 압축을 풉니다. ([샘플 스토어드 프로시져 파일](https://www.uengine.org/images/sample_stored_procedure_file_new.zip))**

**4. PL/SQL 코드를 자바로 변환하기 위해, 다운받은 샘플 스토어드 프로시져 파일을 아래와 같이 드래그 & 드롭하여 업로드합니다.**

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/04.png">
<br>

- 분석 대상은 **스토어드 프로시저(SP)** 파일이며, 다음과 같은 파일들을 함께 업로드하는 것이 필요합니다.
    - **SP_프로시저명**: 주요 분석 대상
    - **DDL_테이블명**: 테이블 정의
    - **SEQ_시퀀스명**: 시퀀스 정의
- ⚠️ **파일명 규칙은 필수**입니다. (`SP_`, `DDL_`, `SEQ_` 형식)
- 특히 **DDL 파일은 정확도 향상에 매우 중요**하며, 업로드 여부에 따라 분석 품질에 큰 차이가 발생할 수 있습니다.
<br><br>

**5. 해당 파일을 분석해서 그래프 형태로 시각화 합니다.**

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/05.png">
<br>

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/06.png">
<br>

- 스토어드 프로시저 및 함수, 테이블의 흐름을 그래프 형태로 시각화되어 확인할 수 있습니다.
<br><br>

**6. 그래프 시각화에서 각 노드를 클릭하면 해당 노드에 관련된 정보를 확인할 수 있고, 노드를 더블 클릭하면 각각 해당되는 구성을 하나씩 펼쳐서 볼 수 있습니다.**

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/07.png">
<br>

- 업로드된 스토어드 프로시저는 다음과 같은 구조로 자동 분석됩니다.
<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/07-1.png" style="margin-top: 10px;">

  - `SPEC` 노드: 함수의 **입력 매개변수**
  - `DECLARE` 노드: **지역 변수**
  - `TRY-EXCEPTION` 노드: **예외 처리 흐름**
  - 기타 노드들: **비즈니스 로직 흐름**
  - 각 노드에는 **summary 정보**가 포함되어 있어, 역할 및 기능을 쉽게 파악할 수 있습니다.
<br><br>

**7. 클릭 시, 같은 테이블 또는 함수 노드들이 '하이라이트'되어 한눈에 연관성을 파악할 수 있습니다.**

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/08.png">
<br>

- 이를 통해 **어떤 프로시저가 어떤 테이블이나 함수를 호출하고 있는지 시각적으로 추적**이 가능합니다.
<br><br>

**8. 각 노드에 관한 상세정보창은 접었다 펼쳤다 할 수 있으며, 마우스 스크롤을 통해 확대/축소하여 전체적인 흐름을 볼 수 있습니다.**
<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/09.png">
<br>

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/10.png">
<br><br>

**9. '데이터 삭제' 버튼을 누르면 저장된 그래프 데이터를 삭제하고 다시 분석이 가능합니다.**

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/11.png">
<br>

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/12.png">
<br>

- 같은 내용의 그래프 트리가 존재하면 분석을 하지않고 그대로 반환하기 때문에, **분석중 그만두었거나 새로고침으로 인해 끊겼다면 삭제하고 다시 진행해주세요.**
<br><br>

**10. CONVERT TARGET PROJECT 버튼을 누르면 변환이 시작되며, 그래프 정보를 단계별로 사용하여 필요한 자바 클래스 파일을 생성합니다.**

<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/13.png">
<br>
<img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/14.png">
<br>

<img src="https://ju0735.github.io/uengine-new.github.io/images/demo-corporate/use-04.jpg">
<br>

- 변환 결과는 **ZIP 파일 형태로 다운로드** 받을 수 있으며, **IDE 편집기(예: IntelliJ, Eclipse 등)**에서 쉽게 열어볼 수 있습니다.
- Java 프로젝트 구조는 다음과 같이 구성됩니다.
    - `Command`, `Controller`, `Entity`, `Repository`, `Service`
    - 각 클래스는 실제 프로시저의 비즈니스 로직을 반영한 메서드들로 구성됩니다.
    
</div>