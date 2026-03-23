declare module "vite-plugin-to-webp" {
  import type { Plugin } from "vite";
  import type { WebpOptions, ResizeOptions } from "sharp";

  export function vitePluginWebp(options: {
    cwd: string[];
    webpOptions?: WebpOptions;
    withThumbnail?: boolean;
    keepOriginal?: boolean;
    thumbnailOptions?: ResizeOptions;
  }): Plugin;
}
