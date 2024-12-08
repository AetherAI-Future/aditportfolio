import React from 'react';
import { socialLinks } from '../data/socialLinks';
import { Github, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';

const iconComponents = {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Youtube
};

const SocialLinks: React.FC<{ className?: string }> = ({ className = '' }) => {
  const getIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
    return <IconComponent className="w-5 h-5 text-gray-700 hover:text-gray-900" />;
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.platform}
        >
          {getIcon(link.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;