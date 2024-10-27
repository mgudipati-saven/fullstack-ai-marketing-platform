import React from "react";

interface ProjectPageProps {
  params: { projectId: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  return <div>Project Page {projectId}</div>;
}
