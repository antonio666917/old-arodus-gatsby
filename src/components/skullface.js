import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import skullface from "../images/arod-icon.png"
// import facepic from "../images/facepic.png"

const StyledSkullface = styled.h1`
  color: white;
  text-shadow: 1px 2px 0px rgba(0, 0, 0, 1);
  line-height: 1;

  a {
    line-height: 1;
    font-size: 1.8rem;
    text-decoration: none;
    color: var(--color-white);
  }

  img {
    &.skull {
      height: 42px;
      width: 42px;
    }
  }

  .skullface {
    height: 100%;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    padding-top: 10rem;

    a {
      font-size: 3rem;
      &:hover {
        img {
          &.face {
            opacity: 0.4;
            transition: opacity 0.5s;
          }
        }
      }
    }

    img {
      transition: opacity 0.2s;

      &.skull {
        height: 80px;
      }
      &.face {
        opacity: 0;
        width: 154px;
      }
    }

    .skullface {
    }
  }
`
const Skullface = ({ handleClick }) => {
  // let count = 0
  // const logMouseActivity = () => {
  //   count++
  //   talk()
  //   return
  // }

  // const talk = () => {
  //   if (count === 4) {
  //     alert("are you bored?")
  //   }
  // }

  return (
    <StyledSkullface>
      <Link to="/" onClick={handleClick}>
        <div className="skullface">
          {/* <div className="skullface" onMouseOver={logMouseActivity}> */}

          <img
            className="skull"
            src={skullface}
            alt="A skull with horn-rimmed eyeglasses"
          />
          {/* <img
            className="face"
            src={facepic}
            alt="A smiling man with horm-rimmed eyeglasses"
          /> */}
        </div>
      </Link>
    </StyledSkullface>
  )
}

export default Skullface
