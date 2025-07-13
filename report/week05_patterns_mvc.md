# 프로그래밍 아키텍처 패턴 비교: MVC, MVP, MVVM

소프트웨어 개발에서 아키텍처 패턴은 코드의 구조를 체계화하고, 유지보수성을 높이며, 확장성을 확보하는 데 중요한 역할을 함. 특히 사용자 인터페이스(UI)를 갖는 애플리케이션 개발에 널리 사용되는 대표적인 패턴으로 MVC, MVP, MVVM이 있다. 
이 세 가지 패턴은 UI와 비즈니스 로직을 분리하는 것을 목표로 하지만, 각기 다른 방식으로 책임과 상호작용을 정의

## 1. MVC (Model-View-Controller)
### 💠구조

Model: 데이터 및 비즈니스 로직을 담당. 데이터의 상태를 관리하고, 변경 시 알림을 보냄.

View: 사용자에게 정보를 표시. Model의 데이터를 받아 UI로 렌더링.

Controller: 사용자의 입력을 받아 처리하고, Model과 View를 연결하는 중재자 역할.

### 💠특징

각 구성요소의 역할이 명확하게 분리되어 유지보수와 확장성이 뛰어남.

View와 Model이 서로 직접적으로 연결될 수 있음(의존성 존재).

Controller를 통해 사용자 입력이 처리되고, Model의 변화가 View에 반영됨.

코드의 재사용성과 테스트 용이성이 높음.

View와 Controller가 강하게 결합될 수 있음

## 2. MVP (Model-View-Presenter)
### 💠구조

Model: 데이터와 비즈니스 로직을 담당.

View: UI를 담당하며, 사용자 입력을 Presenter에 전달.

Presenter: View와 Model 사이의 중개자. 사용자 입력을 받아 Model을 갱신하고, 결과를 View에 전달.

### 💠특징

View와 Model이 직접적으로 연결되지 않고, Presenter를 통해서만 상호작용함.

View와 Presenter는 1:1 관계가 일반적이며, Presenter는 View를 인터페이스로 제어.

UI와 로직의 분리가 명확해 테스트와 유지보수가 쉬움.

안드로이드 등에서 많이 사용되며, UI 변경에 유연하게 대응 가능.

Presenter가 비대해지기 쉬움 (복잡한 로직 몰림)
 
## 3. MVVM (Model-View-ViewModel)
### 💠구조

Model: 데이터 및 비즈니스 로직을 담당.

View: UI를 담당하며, ViewModel에 바인딩하여 데이터와 상호작용.

ViewModel: View와 Model 사이에서 데이터를 가공하여 View에 전달. View와의 데이터 바인딩(Data Binding)이 특징.

### 💠특징

View와 ViewModel이 데이터 바인딩을 통해 자동으로 동기화됨(이벤트 기반). -> 디버깅이 어려울 수 있음

ViewModel은 View에 대한 참조 없이, 상태와 명령만을 노출.

코드의 재사용성, 테스트 용이성, 유지보수성이 높음.

여러 View가 하나의 ViewModel을 공유할 수 있음.

WPF, Xamarin, 안드로이드 등에서 널리 사용됨.

![구조 그림](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Ual_l5eFZLOYR-lagZe00Q.png)

## 📊 패턴 비교 요약표
| 항목      | MVC                   | MVP                   | MVVM                      |
| ------- | --------------------- | --------------------- | ------------------------- |
| 중재자     | Controller            | Presenter             | ViewModel                 |
| View 책임 | UI 표시 + 이벤트 전달        | UI 표시만 (Passive View) | UI 표시 + 데이터 바인딩           |
| 테스트 용이성 | 중간                    | 높음                    | 높음                        |
| 바인딩 방식  | 수동 (직접 코드로 연결)        | 수동                    | 자동 (Data Binding)         |
| 적합한 환경  | 전통적인 웹, 단순 구조 앱       | 안드로이드 앱, 데스크탑 앱       | SPA, .NET 앱, 바인딩 지원 프레임워크 |
| 단점      | Controller가 비대해질 수 있음 | 인터페이스 많아짐             | 바인딩 디버깅이 어려움              |


이미지 출처: [https://sgc109.github.io/2020/07/18/compound-pattern-feat-mvc/](https://medium.com/delightroom/mvc-mvp-mvvm-mvi-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90-%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C%EC%97%90%EC%84%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-1-2442a4189c79)
