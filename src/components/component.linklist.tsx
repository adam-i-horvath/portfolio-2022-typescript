import { Link } from 'react-router-dom';

const LinkList = () => {
  return (
    <>
      <Link to="about">About</Link>
      <Link to="projects">Projects</Link>
      <Link to="contact">Contact</Link>
    </>
  );
};

export default LinkList;
