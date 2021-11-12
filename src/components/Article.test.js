import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { screen,render } from '@testing-library/react';

const sampleArticle = {
    id: 3,
    headline:"Xmen 97 is Disney newest show",
    author:"everyones fav comic book nerd",
    createdOn: "2021-11-12T18:02:38-04:00 ",
    summary:'we are excited',
    body:"really exciting for all the fans of the show"
}

const anonArticle = {
    ...sampleArticle,
    author: "",
  };

test('renders component without errors', ()=> {
    render(<Article article={sampleArticle} />)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={sampleArticle} />);
    const headline = screen.getByText(/Xmen 97 is Disney newest show/i);
    const author = screen.getByText(/everyones fav comic book nerd/i);
    const summary = screen.getByText(/we are excited/i);
    const body = screen.getByText(/really exciting for all the fans of the show/i);
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={anonArticle}/>);
    const anonResponse= screen.getByText(/Associated Press/i);
    expect(anonResponse).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDeleteMock = jest.fn();
  render(<Article article={sampleArticle} handleDelete={handleDeleteMock}/>);
  const deleteButton = screen.getByTestId("deleteButton");
  userEvent.click(deleteButton);
  expect(handleDeleteMock).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.