import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import View from './View';

import {articleService as mockArticleService } from '../services/articleServices'

jest.mock('../services/articleServices');

const sampleArticles = [
        {
            id: 1,
            headline:"Xmen 97 is Disney newest show",
            author:"everyones fav comic book nerd",
            createdOn: "2021-11-12T18:02:38-04:00 ",
            summary:'we are excited',
            body:"really exciting for all the fans of the show"
        },
        {
          id: 2,
          headline: "Are we in a simulation",
          author: "Mark Zuckky",
          createdOn: "2020-01-05T18:06:73-02:00",
          summary: "no but im building one",
          body: "muahahaha"
        },
        {
          id: 3,
          headline: "Enjoy your weekend like this",
          author: "Most Interesting Man Alive",
          createdOn: "2019-13-08T17:02:32-01:00",
          summary: "Go Hiking",
          body: "you will feel reconnected when you go back home"
        }
      ];


test("renders zero articles without errors", async () => {
    mockArticleService.mockResolvedValueOnce([]);
    const {queryAllByTestId}= render(<View />)
    await waitFor(() => {
        const articles = queryAllByTestId("article");
        fireEvent.load(articles)
        expect(articles).toHaveLength(0);
      });
});

test("renders three articles without errors", async ()=> {
    mockArticleService.mockResolvedValueOnce(sampleArticles);
    const {queryAllByTestId}= render(<View />)
    const articles = queryAllByTestId("article");
        fireEvent.load(articles)
  await waitFor(() => {
    expect(articles).toHaveLength(3);
  });
    
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.

// articleService.mockResolvedValueOnce();
//   render(<View />);
//   await waitFor(() => {
//     const articles = screen.queryAllByTestId("article");
//     expect(articles).toHaveLength(3);
//   });