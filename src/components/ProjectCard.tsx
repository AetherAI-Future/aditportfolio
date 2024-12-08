import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className={`bg-dark-light rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-primary/20 floating`} 
         style={{ animationDelay: `${index * 200}ms` }}>
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-gray-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium text-primary-light bg-primary-dark/20 rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-accent-purple hover:text-accent-blue transition-colors"
          >
            View Project <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;