import siteData from "../data/siteData.json";
import { slugify } from "../lib/Slugify";

export default function jsonLDGenerator({ type, post, url }) {
  const siteUrl = import.meta.env.SITE || "http://localhost:4321";

  if (type === "post" && post) {
    const ldData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      headline: post.title,
      description: post.description,
      image: post.image ? post.image.src : undefined,
      author: {
        "@type": "Person",
        name: post.author,
        url: `${siteUrl}/author/${slugify(post.author)}`,
      },
      datePublished: post.date,
      // Optionally add dateModified if available
      ...(post.updatedDate && { dateModified: post.updatedDate }),
    };

    // Optionally add publisher details if available in siteData
    if (siteData.publisher) {
      ldData.publisher = {
        "@type": "Organization",
        name: siteData.publisher.name,
        ...(siteData.publisher.logo && {
          logo: {
            "@type": "ImageObject",
            url: siteData.publisher.logo,
          },
        }),
      };
    }

    return `<script type="application/ld+json">${JSON.stringify(ldData)}</script>`;
  }

  const websiteData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: siteData.title,
    url: siteUrl,
  };

  return `<script type="application/ld+json">${JSON.stringify(websiteData)}</script>`;
}
