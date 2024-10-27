import React from "react";

export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = await params;
  return <div>Project Page {projectId}</div>;
}
