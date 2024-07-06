import data from './projects.json';

const fs = require('fs');
const path = require('path');

export const getProjects = () => {
  return data
  .map((project) => {
    if (project.gallery_path) {
      return injectGallery(project);
    }
    return project;
  });
};

export default (req, res) => {
  const projects = getProjects();
  res.json(projects);
};

const injectGallery = (project) => {
  const galleryPath = path.join(process.cwd(), 'public', project.gallery_path);
  const files = fs.readdirSync(galleryPath);
  return {
    ...project,
    gallery: files
      .map((file) => `${project.gallery_path}/${file}`)
  };
}
