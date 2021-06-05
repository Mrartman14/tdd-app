import React from "react";
import { render, unmountComponentAtNode } from 'react-dom';

import { shallow, configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { NewsEntity } from '../../../../features/news/domain/entities/news_entity';
import { NewsCard } from '../../../../features/news/presentation/components/news_card/news_card';

configure({ adapter: new Adapter() });

const container: Element = document.createElement('div');
const fakeData = new NewsEntity({
    title: 'test title',
    text: 'test text',
});

beforeEach(() => {
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
});

describe('should newscard renders well', () => {
    it('should render a title', () => {
        act(() => {
            shallow(<NewsCard data={fakeData} />, container);
        });
        expect(container.textContent).toContain(fakeData.title);
    });

    it('should render a text', () => {
        act(() => {
            render(<NewsCard data={fakeData} />, container);
        });

        const textContainer = document.querySelector('.news-card__text');
        expect(textContainer?.textContent).toBe(fakeData.text);
    });
});

