import React from "react";

export default function TemplatePage({
  params,
}: {
  params: { templateId: string };
}) {
  return <div>Template Page {params.templateId}</div>;
}
