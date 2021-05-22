import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { NewsEntity } from "../../../../features/news/domain/entities/news_entity";
import { NewsCard } from "../../../../features/news/presentation/components/news_card/news_card";

let container: Element = document.createElement('div');
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = document.createElement('div');
});

it("renders with or without a name", () => {
    const mockData = new NewsEntity({
        title: 'test title',
        text: 'test text',
    });

    act(() => {
        render(<NewsCard data={mockData} />, container);
    });
    expect(container.textContent).toContain(mockData.title);
    // toBe for exact same text
    // expect(container.textContent).toBe(mockData.title);
});
