# @repo/router

router, path, menu 정보 관리를 위한 repo

## Provider

```tsx
import { ProjectRouterProvider } from '@repo/router'

const ExampleComponent = () => {
	return <ProjectRouterProvider basePath="/example">{children}</ProjectRouterProvider>
}
```

## hooks

```tsx
import { useRouter } from '@repo/router'

const ExampleComponent = () => {
	const router = useRouter()

	const handleClick = () => {
		router.push('/main')
	}

	return (
		<button type="button" onClick={handleClick}>
			to main
		</button>
	)
}
```
