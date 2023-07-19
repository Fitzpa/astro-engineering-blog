import { getImage } from 'astro:assets'
import Github from '@/assets/images/tech-stack/github.svg'
import Git from '@/assets/images/tech-stack/git.svg'
import TypeScript from '@/assets/images/tech-stack/Typescript_logo_2020.svg'
import Solid from '@/assets/images/tech-stack/Solidjs.svg'
import SolidMobile from '@/assets/images/tech-stack/Solidjs-mobile.svg'
import Tailwind from '@/assets/images/tech-stack/tailwind.svg'
import TailwindMobile from '@/assets/images/tech-stack/tailwind-mobile.svg'
import Vite from '@/assets/images/tech-stack/Vitejs-logo.svg'
import Vercel from '@/assets/images/tech-stack/vercel.svg'
import VercelMobile from '@/assets/images/tech-stack/vercel-mobile.svg'
import Svelte from '@/assets/images/tech-stack/Svelte_Logo.svg'
import React from '@/assets/images/tech-stack/react.svg'
import NextJs from '@/assets/images/tech-stack/Nextjs-logo.svg'
import Gatsby from '@/assets/images/tech-stack/Gatsby-Logo.svg'
import GatsbyMobile from '@/assets/images/tech-stack/Gatsby-mobile.svg'
import GraphQL from '@/assets/images/tech-stack/GraphQL_Logo.svg'
import Apollo from '@/assets/images/tech-stack/apollo-graphql.svg'
import ApolloMobile from '@/assets/images/tech-stack/apollo-graphql-mobile.svg'
import CSS from '@/assets/images/tech-stack/css.svg'
import Sass from '@/assets/images/tech-stack/sass.svg'
import HTML from '@/assets/images/tech-stack/html.svg'
import Jest from '@/assets/images/tech-stack/jest.svg'
import JestMobile from '@/assets/images/tech-stack/jest-mobile.svg'
import TestingLibrary from '@/assets/images/tech-stack/testing-library.svg'
import MUI from '@/assets/images/tech-stack/material-ui.svg'
import JavaScript from '@/assets/images/tech-stack/javascript.svg'
import Node from '@/assets/images/tech-stack/Node.js_logo.svg'
import Zustand from '@/assets/images/tech-stack/zustand-64b6db63b7bb9.webp'

const github = await getImage({src: Github})
const git = await getImage({src: Git})
const typescript = await getImage({src: TypeScript})
const solid = await getImage({src: Solid})
const solidMobile = await getImage({src: SolidMobile})
const tailwind = await getImage({src: Tailwind})
const tailwindMobile = await getImage({src: TailwindMobile})
const vite = await getImage({src: Vite})
const vercel = await getImage({src: Vercel})
const vercelMobile = await getImage({src: VercelMobile})
const svelte = await getImage({src: Svelte})
const react = await getImage({src: React})
const nextjs = await getImage({src: NextJs})
const gatsby = await getImage({src: Gatsby})
const gatsbyMobile = await getImage({src: GatsbyMobile})
const graphQL = await getImage({src: GraphQL})
const apollo = await getImage({src: Apollo})
const apolloMobile = await getImage({src: ApolloMobile})
const css = await getImage({src: CSS})
const sass = await getImage({src: Sass})
const html = await getImage({src: HTML})
const jest = await getImage({src: Jest})
const jestMobile = await getImage({src: JestMobile})
const testingLibrary = await getImage({src: TestingLibrary})
const mui = await getImage({src: MUI})
const javascript = await getImage({src: JavaScript})
const node = await getImage({src: Node})
const zustand = await getImage({src: Zustand})


export const techStack: Array<{
  name: string;
  src: string;
  link: string;
  mobileSrc?: string;
}> = [
  {
    name: "github",
    src: github.src,
    link: "https://github.com/",
  },
  {
    name: "git",
    src: git.src,
    link: "https://git-scm.com/",
  },
  {
    name: "typescript",
    src: typescript.src,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "solid",
    src: solid.src,
    mobileSrc: solidMobile.src,
    link: "https://www.solidjs.com/",
  },
  {
    name: "tailwindcss",
    src: tailwind.src,
    mobileSrc: tailwindMobile.src,
    link: "https://tailwindcss.com/",
  },
  {
    name: "vite",
    src: vite.src,
    link: "https://vitejs.dev/",
  },
  {
    name: "vercel",
    src: vercel.src,
    mobileSrc: vercelMobile.src,
    link: "https://vercel.com/",
  },
  {
    name: "svelte",
    src: svelte.src,
    link: "https://svelte.dev/",
  },
  {
    name: "react",
    src: react.src,
    link: "https://react.dev/",
  },
  {
    name: "nextjs",
    src: nextjs.src,
    link: "https://nextjs.org/",
  },
  {
    name: "gatsby",
    src: gatsby.src,
    mobileSrc: gatsbyMobile.src,
    link: "https://www.gatsbyjs.com/",
  },
  {
    name: "graphql",
    src: graphQL.src,
    link: "https://graphql.org/",
  },
  {
    name: "apollo",
    src: apollo.src,
    mobileSrc: apolloMobile.src,
    link: "https://www.apollographql.com/",
  },
  {
    name: "css",
    src: css.src,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "sass",
    src: sass.src,
    link: "https://sass-lang.com/",
  },
  {
    name: "html",
    src: html.src,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "jest",
    src: jest.src,
    mobileSrc: jestMobile.src,
    link: "https://jestjs.io/",
  },
  {
    name: "testing library",
    src: testingLibrary.src,
    link: "https://testing-library.com/",
  },
  {
    name: "material-ui",
    src: mui.src,
    link: "https://mui.com/",
  },
  {
    name: "javascript",
    src: javascript.src,
    link: "https://www.w3schools.com/js/default.asp",
  },
  {
    name: "nodejs",
    src: node.src,
    link: "https://nodejs.org/en",
  },
  {
    name: "zustand",
    src: zustand.src,
    link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
  },
];
