import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/lib/resolve";
import { enableVisualEditing } from "@sanity/visual-editing";

export default defineConfig({
  projectId: "f9zwkku2",
  dataset: "production",
  name: "default",
  title: "astro-env-studio",
  basePath: "/studio",
  api: {
    projectId: "f9zwkku2", // Must match your sanity.config.ts
    dataset: "production", // Must match your sanity.config.ts
  },

  // Use basePath directly in the configuration
  // studioHost: "medront",

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      resolve,
      previewUrl: {
        origin: "https://blooggss.netlify.app/",
        previewMode: {
          enable: "/",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
    enableVisualEditing(),
  ],

  schema: {
    types: schemaTypes,
  },
});
