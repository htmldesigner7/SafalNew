import React from 'react';
import BlogDetail from '../components/BlogDetail';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Next.js 15+ requires params to be awaited
  const resolvedParams = await params;
  return <BlogDetail id={resolvedParams.id} />;
}
