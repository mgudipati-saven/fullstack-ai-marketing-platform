import React from "react";

type Params = Promise<{ templateId: string }>;

export default async function TemplatePage({ params }: { params: Params }) {
  const { templateId } = await params;
  return <div>Template Page {templateId}</div>;
}
