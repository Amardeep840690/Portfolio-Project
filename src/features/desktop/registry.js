import aboutApp from './components/icon-function/about';
import resumeApp from './components/icon-function/resume';
import projectsApp from './components/icon-function/projects';
import contactApp from './components/icon-function/contact';

export const apps = [
  aboutApp,
  resumeApp,
  projectsApp,
  contactApp,
];

export const getAppById = (id) => apps.find((app) => app.id === id);
export const getAppByTitle = (title) => apps.find((app) => app.title === title);
