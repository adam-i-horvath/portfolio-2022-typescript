import axios from 'axios';
import React from 'react';

import styled from 'styled-components';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button } from '@mui/material';

const ProjectStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  margin: 40px;
  .title {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--green);
    border: 4px solid var(--lightgray);
  }

  .title a {
    text-decoration: none;
    color: #ffffff;
  }

  .items {
    background-color: var(--darkgray);
    padding: 20px;
    color: #000;
    border: 4px solid var(--lightgray);
  }
  .items div {
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .items a {
    color: #fff;
    text-decoration: none;
    text-align: center;
  }
  .items .github {
    background-color: var(--green);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 0;
  }
  .ssh__container {
    display: flex;
  }
  .ssh {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;
  }

  .ssh__button {
    background-color: var(--green);
  }

  .ssh__button:hover {
    background-color: var(--green);
  }

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

interface Types {
  id: number;
  name: string;
  html_url: string;
  description: string;
  size: string;
  fork: boolean;
  created_at: string;
  ssh_url: string;
  default_branch: string;
  private: boolean;
  language: string;
}

const address = 'https://api.github.com/users/adam-i-horvath/repos';

const Projects = (): JSX.Element => {
  const [post, setPost] = React.useState<any[]>([]);
  React.useEffect(() => {
    axios
      .get(address)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!post) return <p>Nincs elem.</p>;

  return (
    <>
      <ProjectStyle>
        <h1 className="title">
          <p>Content API:</p>
          <a href={address}>
            Click here <OpenInNewIcon />
          </a>
        </h1>

        {post &&
          post.map((posts: Types) => (
            <div className="items" key={posts.id}>
              <div className="id">ID: {posts.id}</div>
              <div className="name">Name: {posts.name.toUpperCase()}</div>
              <div className="description">
                Description: {posts.description ? posts.description : '--'}
              </div>
              <div className="size">Size: {posts.size + ' KB'}</div>
              <div className="language">
                Language: {posts.language ? posts.language : '--'}
              </div>
              <div className="fork">Fork: {posts.fork.toString()}</div>
              <div className="created_at">
                Created:&nbsp;
                {posts.created_at.substr(0, 10).replaceAll('-', '.') + '.'}
              </div>
              <div className="branch">Branch: {posts.default_branch}</div>
              <div className="private">Private: {posts.private.toString()}</div>
              <div className="ssh__container">
                <div className="ssh">SSH: {posts.ssh_url}</div>
                <Button
                  variant="contained"
                  className="ssh__button"
                  sx={{ boxShadow: 0 }}
                  onClick={() => {
                    navigator.clipboard.writeText(posts.ssh_url);
                    alert('Copied to clipboard!');
                  }}
                >
                  Copy
                </Button>
              </div>
              <Button
                variant="contained"
                href={posts.html_url}
                className="github"
                sx={{ boxShadow: 0 }}
              >
                GitHub repository:
                <GitHubIcon />
              </Button>
            </div>
          ))}
      </ProjectStyle>
    </>
  );
};

export default Projects;
