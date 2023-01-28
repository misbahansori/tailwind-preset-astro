import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svgLoader from "vite-svg-loader";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    vue(),
  ],
  vite: {
    plugins: [svgLoader()],
  },
  output: "static",
});
