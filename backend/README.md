# How To Get Drunk - Fast (Backend)

## Project Setup

### Run locally

```sh
go run cmd/api/main.go serve
```

On Windows:

```sh
$env:CGO_ENABLED='0'; go run cmd/api/main.go serve; $env:CGO_ENABLED=''
```

### Build for production

```sh
go build cmd/api/main.go
```
