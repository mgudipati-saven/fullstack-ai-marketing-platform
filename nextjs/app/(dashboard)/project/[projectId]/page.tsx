import React from "react";

type Params = Promise<{ projectId: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
  const { projectId } = await params;
  return <div>Project Page {projectId}</div>;
}
