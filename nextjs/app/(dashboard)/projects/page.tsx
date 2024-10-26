import React from "react";

export default function ProjectsPage() {
  const projects = [
    { name: "Project 1", description: "Description 1" },
    { name: "Project 2", description: "Description 2" },
    { name: "Project 3", description: "Description 3" },
  ];
  return (
    <div>
      <h1>Projects Page</h1>
      <div>
        {projects.map((project, idx) => (
          <div key={idx}>{project.name}</div>
        ))}
      </div>
    </div>
  );
}
