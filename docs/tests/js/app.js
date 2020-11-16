(() => {  
  const DOMAIN = 'https://pgmgent-1920-students.github.io/case1-pgm-website-baas-pgmgent-jarnvans';
  
  const loadBlog = async () => {
    const response = await fetch(`${DOMAIN}/data/blog/index.json`);
    const jsonData = await response.json();
    console.log(jsonData);
  }

  const loadTeachers = async () => {
    const response = await fetch(`${DOMAIN}/data/docenten/index.json`);
    const jsonData = await response.json();
    console.log(jsonData);
  }

  const loadStudents = async () => {
    const response = await fetch(`${DOMAIN}/data/studenten/index.json`);
    const jsonData = await response.json();
    console.log(jsonData);
  }

  loadBlog();
  loadTeachers();
  loadStudents();
})();