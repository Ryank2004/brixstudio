import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server", // mag blijven staan, adapter regelt de rest
  adapter: netlify(),
});

  
