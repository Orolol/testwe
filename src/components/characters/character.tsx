import { useEffect, useState } from 'react';
import { Character, getCharacter } from '../../hooks/books';
import { CharacterInfoStyled, CharacterStyled } from './character.style';

interface characterProps {
  characterUrl: string;
  search: string;
  display: boolean | undefined;
  selection: (char: Character | null) => void;
  selectedChar: Character | null;
}

export const CharacterComponent: React.FunctionComponent<characterProps> = ({
  characterUrl,
  selection,
  selectedChar,
  display,
  search,
}) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getCharacter(characterUrl);
      response && setCharacter(response);
      setIsLoading(false);
    }
    fetchData();
  }, [characterUrl]);

  const isSearched = () => {
    if (!search || character?.name?.toLowerCase().includes(search)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {display && isSearched() && (
        <CharacterStyled
          onClick={() =>
            selection(selectedChar === character ? null : character)
          }
          highlighted={selectedChar?.name === character?.name}
        >
          <CharacterInfoStyled
            className={isLoading ? 'skeleton' : ''}
            style={{ fontSize: '20px' }}
          >
            {isLoading ? 'Loading ...' : character?.name}
          </CharacterInfoStyled>

          <CharacterInfoStyled>
            Birth : {character?.born ? character?.born : 'Unknown'}
          </CharacterInfoStyled>
          <CharacterInfoStyled>
            {character?.died && 'Death : ' + character?.died}
          </CharacterInfoStyled>

          {selectedChar?.name === character?.name && (
            <>
              {character?.titles && character?.titles.length > 1 && (
                <CharacterInfoStyled style={{ fontSize: '12px' }}>
                  {'Known as  : ' + character?.titles.join(' or ')}
                </CharacterInfoStyled>
              )}
              <CharacterInfoStyled style={{ fontSize: '12px' }}>
                {character?.culture + ' ' + character?.gender}
              </CharacterInfoStyled>
              {character?.playedBy && (
                <CharacterInfoStyled
                  style={{ fontSize: '10px', fontStyle: 'italic' }}
                >
                  {'played by ' + character?.playedBy}
                </CharacterInfoStyled>
              )}
            </>
          )}
        </CharacterStyled>
      )}
    </>
  );
};
