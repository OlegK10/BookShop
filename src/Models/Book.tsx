export interface IBookApiResponse {
    id?: string;
    title?: string;
    author?: string;
    isbn?: string;
    price?: number;
    categoryIds?: string[];
    description?: string;
    coverImage?: string;
}

export interface IBookApiRequest {
    title: string;
    author: string;
    isbn: string;
    categoryIds?: string[];
    price: number;
    description: string;
    coverImage: string;
}

export interface IBookInProductsPanel {
    bookName: string;
    price: string | number;
    author: string;
    year: string | number;
    image: string;
}