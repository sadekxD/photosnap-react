import styled from "styled-components";

export const Container = styled.footer`
  text-align: center;
  padding: 5.6rem 33px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 6.4rem 3.9rem;
  }

  @media (min-width: 950px) {
    grid-template-columns: 1fr 9fr;
    text-align: left;
    padding: 6.5rem 8rem;
  }
`;

export const SocialsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.2rem 0 4.9rem;

  @media (min-width: 768px) {
    grid-column: 1 /2;
    grid-row: 3 /4;
    margin: 0;
    justify-content: flex-start;
  }

  li {
    cursor: pointer;

    stop {
      transition: stop-color 0.2s linear;
    }
  }

  li:hover {
    &.facebook linearGradient {
      stop:first-of-type {
        stop-color: #63afdb;
      }

      stop:last-of-type {
        stop-color: #6028f1;
      }
    }

    &.youtube linearGradient {
      stop:first-of-type {
        stop-color: #d3205a;
      }

      stop:last-of-type {
        stop-color: #ff5a5a;
      }
    }

    &.twitter linearGradient {
      stop:first-of-type {
        stop-color: #65ffeb;
      }

      stop:last-of-type {
        stop-color: #27718a;
      }
    }

    &.pinterest linearGradient {
      stop:first-of-type {
        stop-color: #f6c683;
      }

      stop:last-of-type {
        stop-color: #de3838;
      }
    }

    &.instagram linearGradient {
      stop:first-of-type {
        stop-color: #ffc593;
      }

      stop:nth-of-type(2) {
        stop-color: #bc7198;
      }

      stop:last-of-type {
        stop-color: #5a77ff;
      }
    }
  }

  li + li {
    margin-left: 1.3rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 12rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 3.2rem 0 7.2rem;
    grid-column: 1 /2;
    grid-row: 2 /3;
  }

  @media (min-width: 950px) {
    grid-column: 2 /3;
    margin: 0 0 0 10.9rem;
    flex-direction: column;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.3rem;
  line-height: 1.7rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;

  & + & {
    margin-top: 1.9rem;

    @media (min-width: 768px) {
      margin: 0 0 0 2.6rem;
    }

    @media (min-width: 950px) {
      margin: 1.9rem 0 0 0 !important;
    }
  }
`;

export const CustomLink = styled.span`
  font-size: 13px;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  margin-bottom: 3.2rem;

  &:hover img {
    margin-left: 9rem;
  }

  @media (min-width: 768px) {
    margin: 0;
    justify-self: end;
  }

  img {
    margin-left: 2rem;
    transition: margin-left 0.3s ease-in-out;
  }
`;

export const Copyright = styled.small`
  font-size: 15px;
  line-height: 20px;
  opacity: 0.5;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: 768px) {
    grid-column: 2 /3;
    grid-row: 3 /4;
    justify-self: end;
  }
`;
