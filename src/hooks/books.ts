export type Book = {
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
};

export type Character = {
  url: string;
  name: string;
  gender: 'Male' | 'Female';
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: Book[];
  povBooks: Book[];
  tvSeries: string[];
  playedBy: string;
};

export const getBooks = async () => {
  const responses = await fetch('https://anapioficeandfire.com/api/books', {
    method: 'get',
  });

  if (responses.status === 200) {
    const books: Book[] = await responses.json();
    return books;
  }

  return null;
};

export const getCharacter = async (url: string) => {
  const responses = await fetch(url, {
    method: 'get',
  });

  if (responses.status === 200) {
    const char: Character = await responses.json();
    return char;
  }

  return null;
};
