import { act } from "react-dom/test-utils";

import { NewsEntity } from "../../../../features/news/domain/entities/news_entity";
import { INewsRepository } from "../../../../features/news/domain/repositories/news_repository";
import { GetAllNews } from "../../../../features/news/domain/usecases/get_all_news";

const mockData: NewsEntity[] = [
    {
        text: 'mock text1',
        title: 'mock title1',
    },
    {
        text: 'mock text2',
        title: 'mock title2',
    },
];

class MockNewsRepository implements INewsRepository {
    getAllNews() {
        return Promise.resolve(mockData);
    };
}

it('gets news data', async () => {
    const
        repository = new MockNewsRepository(),
        usecase = new GetAllNews(repository);

    let result: NewsEntity[];

    jest.spyOn(repository, 'getAllNews').mockImplementation(() => {
        return Promise.resolve(mockData);
    });

    await act(async () => {
        result = await usecase.action();
    });

    expect(repository.getAllNews).toHaveBeenCalledTimes(1);
    result!.forEach((newsItem, index) => {
        expect(newsItem.text).toBe(mockData[index].text);
    });

    jest.spyOn(repository, 'getAllNews').mockRestore();
});

// THIS CODE FOR DATA REPOSITORY TESTS

// it('gets news data', async () => {
//     const mockData: NewEntity[] = [
//         {
//             text: 'mock text',
//             title: 'mock title',
//         },
//     ];

//     let newsDataResult: NewEntity[];

//     jest.spyOn(global, 'fetch').mockImplementation(() => {
//         const mockResponse = {
//             json: () => Promise.resolve(mockData),
//         };

//         return Promise.resolve(mockResponse as Response);
//     });

//     await act(async () => {
//         newsDataResult = await (await fetch('some url')).json();
//     });

//     expect(fetch).toHaveBeenCalledTimes(1);
//     expect((newsDataResult[0] as NewEntity).text).toBe(mockData[0].text);

//     jest.spyOn(global, 'fetch').mockRestore();
// });

