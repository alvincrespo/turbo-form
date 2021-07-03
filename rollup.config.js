import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

import { version } from "./package.json"
const year = new Date().getFullYear()
const banner = `/*\nFoxglove ${version}\nCopyright © ${year} Technology, LLC\n */`

export default [
  {
    input: "src/index.ts",
    output: [
      {
        name: "Turbo Form",
        file: "dist/turbo-form.es5-umd.js",
        format: "umd",
        sourcemap: true,
        banner
      }
    ],
    plugins: [
      resolve(),
      typescript({ target: "es5", downlevelIteration: true })
    ],
    watch: {
      include: "src/**"
    }
  },

  {
    input: "src/index.ts",
    output: [
      {
        name: "Turbo Form",
        file: "dist/turbo-form.es2017-umd.js",
        format: "umd",
        sourcemap: true,
        banner
      },
      {
        file: "dist/turbo-form.es2017-esm.js",
        format: "es",
        sourcemap: true,
        banner
      }
    ],
    plugins: [
      resolve(),
      typescript()
    ],
    watch: {
      include: "src/**"
    }
  },

  // TODO: Learn what this does!
  // {
  //   input: "src/tests/functional/index.ts",
  //   output: [
  //     {
  //       file: "dist/tests/functional.js",
  //       format: "cjs",
  //       sourcemap: true
  //     }
  //   ],
  //   plugins: [
  //     resolve(),
  //     typescript()
  //   ],
  //   external: [
  //     "http",
  //     "intern"
  //   ],
  //   watch: {
  //     include: "src/tests/**"
  //   }
  // },

  // TODO: Learn what this does!
  // {
  //   input: "src/tests/unit/index.ts",
  //   output: [
  //     {
  //       name: "tests_unit",
  //       file: "dist/tests/unit.js",
  //       format: "iife",
  //       sourcemap: true,
  //       globals: {
  //         intern: "intern"
  //       }
  //     }
  //   ],
  //   plugins: [
  //     resolve(),
  //     typescript()
  //   ],
  //   external: [
  //     "intern"
  //   ],
  //   watch: {
  //     include: "src/tests/**"
  //   }
  // },

  // TODO: Learn what this does!
  // {
  //   input: "src/tests/server.ts",
  //   output: [
  //     {
  //       file: "dist/tests/server.js",
  //       format: "cjs",
  //       sourcemap: true
  //     }
  //   ],
  //   plugins: [
  //     resolve(),
  //     typescript()
  //   ],
  //   external: [
  //     "express",
  //     "multer",
  //     "path",
  //     "url"
  //   ],
  //   watch: {
  //     include: "src/tests/**"
  //   }
  // }
]
