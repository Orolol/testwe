import styled from 'styled-components';

export const BookStyled = styled.button<{ highlighted: boolean }>`
  background-color: ${(props) => (props.highlighted ? 'lightpink' : 'white')};
  border: 1px solid lightblue;
  border-radius: 5px;
  padding: 0 5px 0 5px;
  cursor: pointer;
  width: 200px;

  :active,
  :hover {
    background-color: lightblue;
  }
`;
export const BookListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;
export const PageContent = styled.div`
  display: flex;
  gap: 25px;
`;
