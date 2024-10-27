import React from "react";

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  return <div>Project Page {params.projectId}</div>;
}
