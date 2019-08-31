import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const StyledLinks = styled.ul`
  display: flex;
  flex-direction: column;
  background: var(--color-black);
  opacity: 0;
  padding: 2rem 0;
  transition: all 0.2s;
  max-height: 0;
  overflow: hidden;

  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      max-height: 600px;
      transition: all 0.2s;
    `}

  li {
  }

  a {
    display: block;
    padding: 2rem;
    color: var(--color-white);
    text-shadow: 1px 2px 0px rgba(0, 0, 0, 1);
    font-size: 2rem;
    text-decoration: none;
    font-weight: 100;

    &:hover {
      color: var(--color-purple);
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    background: transparent;
    opacity: 1;
    max-height: inherit;

    li {
      margin-left: 15px;
    }
    a {
      padding: 0;
      font-size: 1.6rem;
      line-height: 1;
      text-decoration: none;
      text-shadow: none;
      &:hover {
        color: var(--color-black);
      }
    }
  }
`

const Links = ({ isOpen, handleClick }) => {
  return (
    <StyledLinks isOpen={isOpen}>
      <li>
        <Link to="/about" onClick={handleClick}>
          About
        </Link>
      </li>
      <li>
        <Link to="/work" onClick={handleClick}>
          Work
        </Link>
      </li>
      <li>
        <Link to="/blog" onClick={handleClick}>
          Blog
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={handleClick}>
          Contact
        </Link>
      </li>
    </StyledLinks>
  )
}

export default Links
