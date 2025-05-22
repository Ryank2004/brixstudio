import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server", // mag blijven staan, adapter regelt de rest
  adapter: netlify(),
  integrations: [],
  vite: {
    define: {
      'process.env.CONTENTFUL_SPACE_ID': `"${process.env.CONTENTFUL_SPACE_ID}"`,
      'process.env.CONTENTFUL_ACCESS_TOKEN': `"${process.env.CONTENTFUL_ACCESS_TOKEN}"`,
    },
  },
});

  
