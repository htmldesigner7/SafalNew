import React from 'react';
import BlogDetail from '../components/BlogDetail';

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the blog post data based on params.id
  // Here we&apos;ll just pass the ID or render a static component
  return <BlogDetail id={params.id} />;
}
