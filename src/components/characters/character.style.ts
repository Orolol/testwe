import styled from 'styled-components';

export const CharacterStyled = styled.button<{ highlighted: boolean }>`
  border-radius: 5px;
  padding: 0 5px 0 5px;
  border: 1px solid black;
  cursor: pointer;
  background-color: ${(props) => (props.highlighted ? 'lightgrey' : 'white')};
`;
export const CharacterInfoStyled = styled.p`
  line-height: 24px;
  margin: 8px 0 5px 0;
  &.skeleton {
    color: grey;
    display: inline-block;
    -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300%
      100%;
    background-repeat: no-repeat;
    animation: shimmer 2.5s infinite;
    /* font-size: 50px; */
    /* max-width: 200px; */
  }
  @keyframes skeleton {
    100% {
      -webkit-mask-position: left;
    }
  }
`;

export const CharacterListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(auto, 300px);
  height: 97vh;
  width: 80%;
  overflow-y: auto;

  padding: 2%;
`;
