export interface Book {
    id: number;
    title: string;
    author: string;
    cover: string;
  }

  export interface Trade {
    id: number;
    book: Book;
    offeredBy: string;
    status: 'pending' | 'accepted' | 'declined';
    createdAt: string;
  }

  export interface OutgoingTrade extends Trade {
    offeredTo: string;
}
