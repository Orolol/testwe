import { useEffect, useState } from 'react';
import { Book, Character, getBooks } from '../../hooks/books';
import { CharacterComponent } from '../characters/character';
import { CharacterListStyled } from '../characters/character.style';
import { BookComponent } from './book';
import { BookListStyled, PageContent } from './book.style';

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [characters, setCharacters] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getBooks();
      response && setBooks(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setSelectedChar(null);
  }, [characters]);

  const isDisplayed = (char: string) => {
    if (selectedChar === null) return true;

    if (
      selectedChar.father === char ||
      selectedChar.mother === char ||
      selectedChar.url === char ||
      selectedChar.spouse == char
    ) {
      return true;
    }
  };

  return (
    <PageContent>
      <BookListStyled>
        <input
          type='text'
          placeholder='search character'
          onBlur={(e) => {
            setSearch(e.target.value);
            e.target.value = '';
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              setSearch((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = '';
            }
          }}
        />
        {books.map((b) => (
          <BookComponent
            book={b}
            key={b.isbn}
            setChar={setCharacters}
            highlighted={!!b.characters.find((c) => c === selectedChar?.url)}
          ></BookComponent>
        ))}
      </BookListStyled>
      <CharacterListStyled>
        {characters.map((c) => (
          <CharacterComponent
            selection={setSelectedChar}
            characterUrl={c}
            key={c}
            selectedChar={selectedChar}
            display={isDisplayed(c)}
            search={search}
          />
        ))}
      </CharacterListStyled>
    </PageContent>
  );
};
