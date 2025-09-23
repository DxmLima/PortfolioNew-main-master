import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `getMDXComponent` in the app directory, you need to make sure that `esbuild` is installed
    providerImportSource: "@mdx-js/react",
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)