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
  basePath: "/admin",

  api: {
    projectId: "f9zwkku2",
    dataset: "production",
  },

  // Use basePath directly in the configuration
  // studioHost: "medront",

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      resolve,
      previewUrl: {
        origin: "http://localhost:4321",
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
