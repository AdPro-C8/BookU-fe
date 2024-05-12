"use client";

import { useEffect, useState } from 'react';

interface Book {
    id: string;
    title: string;
    author: string;
    publisher: string;
    publishDate: string;
    isbn: string;
    pageCount: number;
    category: string;
    downloadCount: number;
    photoUrl: string;
}

export default function Books() {
    const BOOKLIST_API_URL = process.env.NEXT_PUBLIC_BOOKLIST_API_URL!;

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetch(`${BOOKLIST_API_URL}/book`)
            .then(response => response.json())
            .then(data => setBooks(data))
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Publish Date</th>
                    <th>ISBN</th>
                    <th>Page Count</th>
                    <th>Category</th>
                    <th>Download Count</th>
                    <th>Photo Cover URL</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publisher}</td>
                        <td>{book.publishDate}</td>
                        <td>{book.isbn}</td>
                        <td>{book.pageCount}</td>
                        <td>{book.category}</td>
                        <td>{book.downloadCount}</td>
                        <td>{book.photoUrl}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
