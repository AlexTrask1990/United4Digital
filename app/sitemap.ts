import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://iggouz5qrl5zhod7muhpijjv4q.srv.us/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://iggouz5qrl5zhod7muhpijjv4q.srv.us/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://iggouz5qrl5zhod7muhpijjv4q.srv.us/cookie-policy',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://iggouz5qrl5zhod7muhpijjv4q.srv.us/terms',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}