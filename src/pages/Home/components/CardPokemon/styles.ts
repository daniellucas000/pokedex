import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* max-width: 17.875rem; */
  height: 19rem;
  background-color: ${(props) => props.theme['white']};
  box-shadow: 0px 10px 51px -5px rgba(183, 189, 193, 0.3);
  border-radius: 12px;
  cursor: pointer;
  /* padding: 1.25rem; */
  position: relative;

  &::before {
    content: '';
    width: 10.5rem;
    height: 10.5rem;
    border-radius: 50%;
    position: absolute;
    /* z-index: -1; */
    background-color: #ccd0d2;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 6.875rem;
    height: 6.875rem;

    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  > div {
    margin: 20px;

    span {
      color: ${props => props.theme['gray-subtitle']};
    }

    strong {
      color: ${(props) => props.theme['gray-title']};
    }
  }
`;
