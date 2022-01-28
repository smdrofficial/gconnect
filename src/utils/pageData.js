// asstets
import pagesData from "@data/pagesData.json";

export const getPages = () => {
  return pagesData.map(({ path }) => ({
    params: { 
      id: path
    }
  }));
};

export const getPageData = (pagePath) => {
  return pagesData.find(({ path }) => path === pagePath);
};
