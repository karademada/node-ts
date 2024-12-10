# Test [Rollup]("https://rollupjs.org/") for build a NodeJS Rest API with Zod validation Typescript and clean architecture folders and supertest testing

```bash
mkdir node-ts

cd node-ts

pnpm init

pnpm add express zod

pnpm add -D rollup @rollup/plugin-typescript typescript tslib

pnpm add -D @types/express @types/node @rollup/plugin-commonjs @rollup/plugin-node-resolve jest supertest @types/jest ts-jest @types/supertest

pnpm install

pnpm dev
```