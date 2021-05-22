import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { act } from "react-dom/test-utils";

import { NewsEntity } from "../../../../features/news/domain/entities/news_entity";
import { NewsList } from "../../../../features/news/presentation/views/news_list/news_list";

const container: Element = document.createElement('div');
const fakeData: NewsEntity[] = [
    {
        title: 'test title 1',
        text: 'test text 1',
    },
    {
        title: 'test title 2',
        text: 'test text 2',
    },
];

beforeEach(() => {
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
});

describe('should news list component renders well', () => {
    it('should news list makes well snapshot', () => {
        act(() => {
            render(<NewsList data={fakeData} />, container);
        });
    
        expect(container.textContent).toMatchSnapshot();
    });

    it('should renders right count of news cards', () => {
        act(() => {
            render(<NewsList data={fakeData} />, container);
        });

        const newsCards = container.querySelectorAll('.news-card');
        expect(newsCards.length).toBe(fakeData.length);
    });
});
