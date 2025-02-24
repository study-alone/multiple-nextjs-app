# ui

이 repo에는 react 또는 nextjs에서 제공 되는 hook api, component를 소스코드 내에서 사용하고 있지만
고의적으로 `dependencies`에 포함 시키지 않았습니다.

이 repo를 사용하려는 호스트 프로젝트(또는 repo)에서 설치시 `next`, `react`, `react-dom` 설치를 확인합니다.
이 repo는 typescript를 사용하고 있고 호스트 프로젝트도 마찬가지 이기 때문에 `@type/react`, `@types/react-dom`, `@types/node`도 peerDepencies에 포함 됩니다.

설치 예시

```sh
# pwd: /root
pnpm --filter @repo/ui add react --save-peer
```
