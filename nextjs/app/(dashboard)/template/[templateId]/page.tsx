import React from "react";

export default async function TemplatePage({
  params,
}: {
  params: { templateId: string };
}) {
  const { templateId } = await params;
  return <div>Template Page {templateId}</div>;
}
