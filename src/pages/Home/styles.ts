import styled from 'styled-components';

export const HomeContainer = styled.section`
  > span {
    display: block;
    max-width: 70rem;
    width: 100%;
    margin: 0px auto;

    font-weight: 600;
    font-size: 1.125rem;
    line-height: 150%;
    color: ${(props) => props.theme['gray-subtitle']};
    padding: 1.875rem 0;

    @media (max-width: 576px) {
      padding: 2.5rem;
    }
  }
`;

export const HeaderContainer = styled.header`
  padding: 3rem 0;
  background: #eff3f6;

  > div {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    max-width: 70rem;
    width: 100%;
    margin: 0px auto;
    align-items: center;

    @media (max-width: 576px) {
      flex-direction: column;
      padding: 0 24px;
      gap: 24px;
    }

    h2 {
      font-size: 2rem;
      max-width: 200px;
      color: ${(props) => props.theme['gray-title']};

      @media (max-width: 576px) {
        max-width: 100%;
      }
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 25.188rem;
  width: 100%;
  height: 2.875rem;
  background: ${(props) => props.theme['white']};
  border-radius: 122px;
  padding: 0 1.563rem;

  svg {
    color: #9ebae1;
  }

  input {
    border: 0;
    width: 100%;
    color: ${(props) => props.theme['input-placeholder']};

    &::placeholder {
      color: ${(props) => props.theme['input-placeholder']};
    }
  }
`;

export const PokemonList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.2rem;

  max-width: 70rem;
  width: 100%;
  margin: 0px auto;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 0 2.5rem;
  }
`;
