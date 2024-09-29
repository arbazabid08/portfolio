// @flow strict
import { personalData } from "@/utils/data/personal-data";

// Function to fetch the blog post data by slug
async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
}

// Function to generate static paths (required for static export)
export async function generateStaticParams() {
  // Fetch all the blogs from the API or statically define them
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const blogs = await res.json();

  // Map over the blog list and return the slugs
  return blogs.map(blog => ({
    slug: blog.slug, // This is the dynamic part of the URL
  }));
}

// BlogDetails component for rendering individual blog details
async function BlogDetails({ params }) {
  const slug = params.slug;  // Extract slug from the params
  const blog = await getBlog(slug);  // Fetch the specific blog by slug

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
}

export default BlogDetails;
