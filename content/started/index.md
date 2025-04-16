---
description: ''
sidebar: 'started'
---
# Legacy Modernizer

## 소개

<div style="position: relative; padding-bottom: 56.25%; padding-top: 0px; height: 0; overflow: hidden;">
	<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
        src="https://www.youtube.com/embed/-cMP4bCkiFc" 
        frameborder="0" crolling="no" frameborder="none" allowfullscreen="">
    </iframe>
</div>
<br>

AI 기반 레거시 모더나이저 도구는 기존의 복잡한 스토어드 프로시저를 현대적이고 클린한 자바 아키텍처로 변환하도록 설계되었습니다. 이 도구는 단순한 표면적 변환을 넘어, 구조적이고 문법적인 변화를 포함하여 공유 데이터베이스 절차 방식에서 견고한 객체 지향 모델로의 전환을 지원합니다.

핵심 변환 과정에서는 비즈니스 로직이 포함된 난해한 PL/SQL 코드를 도메인 전문가와 개발자가 쉽게 협업하고 유지할 수 있도록 유비쿼터스 언어를 사용하여 보다 접근하기 쉬운 형태로 전환합니다. 이를 통해 코드의 이해도와 유지보수성을 크게 향상시킵니다.

## Legacy Modernizer 동작 세부 구조
<img src="https://www.uengine.org/images/Legacy-Code-2-Clean-Code.jpg">

## legacy-modernizer의 기능 및 흐름
### 1. ANTLR를 활용한 구문 분석
스토어드 프로시저 파일의 내용 전체를 LLM (Large Language Model)에게 전달하게 되면, 최대 토큰 수를 넘어가기 때문에,  LLM (Large Language Model)에 데이터를 전달할 때, 토큰 제한과 문맥 유지를 고려하여 의미적으로 연결된 덩어리로 쪼개서 전달하는 것이 중요합니다. 

예를 들어 코드 내에서 각 블록(예: IF 문, SELECT 문, DECLARE)은 중간에서 잘라 전달하지 않고, 의미적으로 완전한 단위로 나누어 전달하게 되면, 문맥을 유지되고, 모델이 데이터를 정확하게 이해하고 처리할 수 있게 됩니다. 이를 위해 ANTLR (ANother Tool for Language Recognition) 같은 파싱 도구를 사용하여 코드의 구조를 파악하고, 이를 트리 구조로 변환하는 과정이 필요합니다.

<img src="https://github.com/user-attachments/assets/cfdd2696-292a-41fc-949f-c6f7c09f4292">

### 2. 그래프 형태로 시각화
스토어드 프로시저의 시각화 과정은 다음과 같이 진행됩니다. Antlr을 통해 생성된 구문 트리를 기반으로 스토어드 프로시저의 구조를 단계별로 분석합니다. 분석 과정에서 수집된 토큰들을 LLM에 전달하여 의미론적 정보를 추출하고, 이를 바탕으로 그래프 데이터베이스에 노드와 관계를 구성합니다. 최종적으로 생성된 그래프를 통해 사용자는 스토어드 프로시저의 구조와 로직을 보다 직관적으로 파악할 수 있습니다.

<img src="https://github.com/user-attachments/assets/c2b2b284-9f73-4ba0-b633-e863b6406949">

#### 그래프 데이터베이스(Graph Database)란?
* Graph Database 정의
그래프 데이터베이스는 데이터를 노드(Node)와 관계(Edge)로 표현하는 데이터베이스입니다. 노드는 개체를 나타내고, 관계는 이들 간의 연결을 표현합니다. 특히 복잡한 관계를 가진 데이터를 저장하고 조회하는데 최적화되어 있으며, 데이터 간의 관계를 직관적으로 모델링하고 탐색할 수 있습니다.

* 선택하게 된 이유
PL/SQL을 Java로 전환하는 과정에서 그래프 데이터베이스를 활용한 이유는 코드의 구조적 특성을 효과적으로 표현하기 위해서입니다. 벡터 데이터베이스가 텍스트의 의미적 유사성 분석에 강점이 있는 반면, 그래프 데이터베이스는 코드의 계층적 관계와 순차적 흐름을 더 명확하게 표현할 수 있습니다. 특히 프로시저 내의 제어 흐름, 변수 참조, 함수 호출 등의 관계를 노드와 엣지로 표현함으로써, Java 코드 생성에 필요한 구조적 정보를 효과적으로 활용할 수 있습니다.

### 3. 자바로 전환
그래프 데이터베이스에 저장된 구조화된 정보를 기반으로 Java 코드로의 변환이 단계적으로 이루어집니다. PL/SQL의 테이블 구조는 Java의 엔티티 클래스로 매핑되며, SELECT, INSERT와 같은 데이터 조작 구문은 JPA 리포지토리 인터페이스로 변환됩니다. 비즈니스 로직을 포함한 나머지 부분들은 서비스 클래스로 구현되어, 전체적으로 계층화된 Java 애플리케이션 구조를 형성하게 됩니다.

<img src="https://github.com/user-attachments/assets/64599fc7-b9d2-4a67-a0d9-d9ed8ec51abd">

<!-- ### 4. 테스트 검증
변환된 Java 코드의 정확성 검증을 위해 AI 기반의 JUnit 테스트 자동 생성 시스템을 구현했습니다. 사용자는 테스트에 필요한 초기 데이터(Given)와 검증하고자 하는 프로시저(When)를 선택할 수 있으며, 이를 기반으로 적절한 JUnit 테스트 케이스가 자동으로 생성됩니다. 이를 통해 PL/SQL에서 Java로 전환된 코드가 원래의 비즈니스 로직을 정확하게 구현하고 있는지 체계적으로 검증할 수 있습니다.

<img src="https://github.com/user-attachments/assets/881e0570-4030-4c59-a897-c2026879e744"> -->


<style>
.mobile-view {
    display: none;
}

@media screen and (max-width: 499px) {
    .responsive-table {
        display: none;
    }

    .mobile-view {
        display: block;
    }

    .mobile-view div {
        font-size: 16px;
        font-weight: bold;
        margin-top:20px;
    }
}
</style>