# 타입스크립트

- 핸드북에서 컴파일 옵션을 확인할 수 있다.
- (링크)[https://typescript-kr.github.io/pages/compiler-options.html]
- ES5는 우리가 사용하는 기존 자바스크립트, ES6는 ES2015를 의미한다.

(글로벌로 설치하면)
tsc 명령어로 typescript 컴파일러 옵션을 볼 수 있다.

타입스크립트 자체가 이전 자바스크립트부터 최근 자바스크립트까지 다 적용한다.

ts파일을 컴파일하여 js로 바꿔준다.
tsc *.ts 명령어를 이용.
별다른 옵션이 없으면 같은 디렉토리에 위치한다

# target
- --target 옵션으로 지원하고자 하는 ECMA Script 문법을 선택할 수 있다 (default는 es5)
~~~bash
    tsc hello.ts --target es6
~~~

# lib
- 사용할 라이브러리를 지정하는 옵션
- 지정하지 않는다면 target에서 지정한 빌드 할 ECMA Script 버전을 기준으로 지정한다. (default)
- 현재 버전에 없을 경우 별도의 Polyfill을 사용해야 하는데, 이 경우 lib옵션으로 지정할 수 있다.
- ES5의 기본값은 dom, es5, scripthost
- ES6의 기본값은 dom, dom.iterable, es6, scripthost
- 축약해서 사용하고 싶은 경우 es2015를 쓸 수 있다. (es2015.promise, es2015.iterable 등..)
- 참고로 ES6는 ES2015와 동일하고, ES5는 우리가 기존에 쓰던 자바스크립트다.
- 이러한 라이브러리들은 typescript 설치 시 설치된다.
~~~bash
    tsc hello.ts --lib es5,es2015.promise,dom --target es5
~~~

# module
- 기본적으로 ES5는 common.js 모듈 시스템을 사용(node에서 ES6 Module import 명령어 실행불가)
- 모듈을 위한 생성코드를 설정할 때 사용된다. (import, export) 
- 타겟과 별도로 실행시킬 때 옵션을 준다.
- 아래 예시는 ES6로 컴파일 하는 동시에 module import 시스템은 commonjs(ES5)를 이용한다는 뜻이다.
- import 에서 require로 변환 시키는 것을 볼 수 있다. 나머지 옵션으로는 es6 등 지정가능.

~~~bash
    tsc hello.ts --lib es5,es2015.promise,dom --target es6 --module commonjs
~~~

위에 주었던 옵션들은 --showconfig 옵션으로 json형태로 확인 가능(tsconfig.json)

# tsconfig.json
- 타입스크립트 compile 시 옵션들을 파일로 부여한 파일
- 설정에 따라 자바스크립트 파일이 컴파일 됨
- 프로젝트 최상단에 위치

~~~js
// include는 컴파일 시 어떤 파일들을 포함시킬 지
// exclude는 컴파일 제외 폴더
/* compilerOptions는 위에서 지정했던 옵션들
    module은 모듈 import 할 버전을 의미.
    rootDir은 소스코드가 위치하는 최상단 루트 디렉토리
    outDir은 컴파일 후 확인 가능한 디렉토리
    target은 컴파일 버전
    noImplicitAny:true
    타입을 정의하지 않으면 parameter가 any로 변환되는것을 금지 (true)
*/
{
    "include":[
        "src/**/*.ts"
    ],
    "exclude":[
        "node_modules"
    ],
    "compilerOptions": {
        "module": "commonjs",
        "rootDir": "src",
        "outDir": "dist",
        "target": "ES5",
        "lib": ["ES6", "DOM"],
        "removeComments":true,
        "noImplicitAny":true
    }
}
~~~


설정 후 tsc 명령어를 입력하면 해당 옵션에 따라 compile을 수행한다.