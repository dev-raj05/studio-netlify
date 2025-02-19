# Booleanmaths Blog

Welcome to **Booleanmaths Blog** – a fast, SEO-optimized blog website built with [Astro](https://astro.build/) and [Sanity.io](https://www.sanity.io/). This repository contains the source code for the blog, including dynamic SEO components, JSON‑LD generation, and seamless integration with Sanity CMS for managing content.

## Features

- **Astro Framework:** Blazing-fast static site generation.
- **Sanity.io CMS:** Flexible, powerful content management.
- **SEO Optimized:** Dynamic meta tags, Open Graph, Twitter Cards, and JSON‑LD structured data.
- **Responsive Design:** Great experience on all devices.
- **Modern Development:** Utilizes best practices in web performance and accessibility.

## Prerequisites

Before getting started, ensure you have:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/booleanmaths-blog.git
   cd booleanmaths-blog
2. **Install Dependencies**

   ```Using npm or yarn
   npm install
   yarn install
   
3. **Configure Environment Variables**
   ```Create a .env file in the root directory with the following variables:
      # Astro Site URL (used for canonical URLs and other settings)
      SITE=https://yourwebsite.com
      # Sanity.io Configuration
      SANITY_PROJECT_ID=your-sanity-project-id
      SANITY_DATASET=production
      SANITY_API_TOKEN=your-sanity-api-token
   Note: Replace your-sanity-project-id, production, and your-sanity-api-token with your actual Sanity project details. For local development, you may use a preview token.

4 **(Optional) Set Up Sanity Studio**

   ```If your repository includes the Sanity Studio, navigate to the studio folder:
      cd studio
      npm install

   **Start the Sanity Studio locally:**
      npm run start
   -> You may need to configure your sanity.json if this is your first time setting it up.

5. **Development**
   
   
