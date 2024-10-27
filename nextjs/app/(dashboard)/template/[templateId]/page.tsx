import React from "react";

interface TemplatePageProps {
  params: { templateId: string };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { templateId } = await params;
  return <div>Template Page {templateId}</div>;
}
