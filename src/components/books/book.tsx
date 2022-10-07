import { useEffect } from 'react';
import { Book } from '../../hooks/books';
import { BookStyled } from './book.style';

interface bookProps {
  book: Book;
  highlighted: boolean;
  setChar: (chars: string[]) => void;
}

export const BookComponent: React.FunctionComponent<bookProps> = ({
  book,
  setChar,
  highlighted,
}) => {
  return (
    <BookStyled
      onClick={() => setChar(book.characters)}
      highlighted={highlighted}
    >
      <p>{book.name}</p>
    </BookStyled>
  );
};
