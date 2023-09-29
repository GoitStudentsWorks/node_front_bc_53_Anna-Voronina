import styled from "styled-components";

export const PaginationContainer = styled.div`
  color: #111;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 0.9375;

  ul {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  li {
    width: 35px;
    height: 35px;
    padding: 10px 10px 10px 10px;
    border-radius: 50%;
    stroke-width: 1px;
    border: 1px solid #54adff;

    &.active {
      background-color: #54adff;
      color: white;
    }
    &.activeLink {
      background-color: #54adff;
      color: white;
    }

    &.previous {
      margin-right: 15px;
      color: #54adff;

      @media only screen and (min-width: 1280px) {
        margin-right: 32px;
      }

      &.disabled {
        color: rgba(17, 17, 17, 0.5);
        cursor: default;
      }
    }

    &.next {
      margin-left: 15px;
      color: #54adff;

      @media only screen and (min-width: 1280px) {
        margin-right: 32px;
      }

      &.disabled {
        color: rgba(17, 17, 17, 0.5);
        cursor: default;
      }
    }
  }
`;
