# Multiple NextJS App with Monorepo

참고용으로 구성한 monorepo sample입니다. 참고하시되 상황에 맞춰 재구성하시면 됩니다.

## scripts

세부 scripts에 대한 내용은 root의 package.json을 참고.

`--filter` 옵션을 통해 어떤 repo에서 명령어를 실행할지 등록하고 사용하는 것이 편리합니다. filter 옵션의 값은 repo의 `폴더명` 또는 package.json에서 지정한 `name` 입니다.

```sh
# 내부 패키지(repo) 설치
# 반드시 --workspace 옵션을 사용
pnpm --filter ui add @repo/router --workspace
```

root의 package.json > scripts에 `--filter`를 포함한 축약형 명령어를 미리 지정해놓고 사용하기

```json
// root: package.json
// pwd: /monorepo-root
"scripts": {
    "ui": "pnpm --filter @repo/ui"
}
...
```

```sh
# 위에서 축약형을 지정했으므로 아래와 같은 명령어로 패키지 설치/삭제가 가능
pnpm ui add lodash
```

root에서 의존성을 설치하고 관리 할 수도 있습니다. 아래 표는 루트에 의존성을 설치하는 판단 기준입니다.

| 판단 기준                            | 루트 (--workspace-root) | 개별 패키지 (--filter) |
| ------------------------------------ | :---------------------: | :--------------------: |
| 모든 패키지가 공통으로 사용          |           ✅            |           ❌           |
| 빌드, 테스트, 린팅 등 개발 도구      |           ✅            |           ❌           |
| 프로덕션 환경에서 사용               |           ❌            |           ✅           |
| 패키지마다 버전이 다를 가능성이 있음 |           ❌            |           ✅           |
| 특정 패키지의 내부 구현에만 필요     |           ❌            |           ✅           |

> 위 표는 참고용으로 보시기 바랍니다.
> 추가로 `next`는 개별 실행 도구 이기 때문에 루트에 설치할 수 없습니다.

## dev server 실행

각각의 nextjs 앱이 각각의 PORT로 local server를 실행합니다.
nodemon을 통해 express를 실행하여 3000포트로 접속하면 분류에 따른 각각의 NextJS 앱에 접속할 수 있습니다.

```sh
# root에서 실행 해야 합니다.
pnpm run dev
```

## repo 분류 (괄호 내용은 name)

- packages
    - ui (`@repo/ui`)
    - router (`@repo/router`)
    - prettier-config (`@config/prettier`)
    - typescript-config (`@config/typescript`)
- apps
    - devserver
    - inquiry (`@web/inquiry`)
    - asset-management (`@web/asset-management`)
    - product-subscription (`@web/product-subscription`)

> repo를 나누는 기준은 프로젝트마다 다를 수 있습니다.
> 다양한 monorepo의 사례를 찾아보고 햔재에 맞는 구성을 찾는 것이 좋습니다.

### 그룹명을 활용한 naming

아래 내용은 예시 입니다. naming은 자유롭게 지정하는 것이 가능하므로 원하는대로 만들면 됩니다.

- 설정: `@config`
- 기타: `@repo`
- 웹페이지: `@web`

> 자유롭게 만들 수 있지만 프로젝트 진행 중 폴더명, package.json의 name을 변경하면  
> `pnpm-locak.yaml`의 기록이 자동으로 현행화 되지 않으므로 모든 패키지에서 node_module을 다시 설치 해야합니다.

다시 설치하기

```sh
rm -rf pnpm-lock.yaml node_modules
# 또는
pnpm dlx rimraf pnpm-lock.yaml node_modules # universal os

pnpm install
```

## turborepo

turborepo에 대한 주의사항

- turbo 패키지는 global 보다 local로 설치하여 package.json > scripts로 사용하는 것이 추후 번거로움을 줄여줄 수 있습니다.
- 상세한 명령어는 pnpm을 이용한 명령어를 이용하는 것이 더 나은 선택일 수 있습니다.
- `turborepo LSP` 플러그인 사용을 권장. turbo.json 구성에 많은 도움을 받을 수 있습니다.
- dev, build, lint 명령어는 turbo에서 전체 패키지를 순회하는 명령어로 자주 쓰이므로 커스텀된 명령어를 사용하지 말고 일반적인 명령어를 사용하는게 좋습니다.
