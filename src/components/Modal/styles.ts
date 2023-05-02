import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  display: flex;
  min-width: 32rem;
  max-width: 44rem;
  height: 31.75rem;
  width: 100%;
  border-radius: 6px;
  /* padding: 2.5rem 3rem; */
  background: ${(props) => props.theme['white']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 576px) {
    max-width: 22rem;
    width: 100%;
    height: auto;
  }

  > div:nth-child(1) {
    background-color: #ccd0d2;
    display: flex;
    align-items: center;

    @media (max-width: 576px) {
      /* padding: 20px 0; */
    }

    img {
      position: relative;
      right: -2.5rem;
      max-width: 7rem;
      width: 100%;
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    padding: 2rem 5rem;

    > div {
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        font-size: 1rem;
        color: ${(props) => props.theme['gray-subtitle']};
      }
    }
  }
`;

export const Title = styled(Dialog.Title)`
  font-size: 1.75rem;
  color: ${(props) => props.theme['gray-title']};
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`;
