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
        <div className='flex'>
            <table className='table-auto flex-1 border-collapse border'>
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
                            <td className='border-collapse border'>{book.id}</td>
                            <td className='border-collapse border'>{book.title}</td>
                            <td className='border-collapse border'>{book.author}</td>
                            <td className='border-collapse border'>{book.publisher}</td>
                            <td className='border-collapse border'>{book.publishDate}</td>
                            <td className='border-collapse border'>{book.isbn}</td>
                            <td className='border-collapse border'>{book.pageCount}</td>
                            <td className='border-collapse border'>{book.category}</td>
                            <td className='border-collapse border'>{book.downloadCount}</td>
                            <td className='border-collapse border'>
                                <img alt={book.photoUrl} src={book.photoUrl}></img>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
