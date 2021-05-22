import { NewsEntity } from "../../domain/entities/news_entity";
import { INewsRepository } from "../../domain/repositories/news_repository";

class NewsRepository implements INewsRepository {
    getAllNews() {
        // TODO: REPLACE MOCK with real API
        return new Promise<NewsEntity[]>((resolve) => {
            const mockEntity1 = new NewsEntity({ title: 'test title1', text: 'test text1' });
            const mockEntity2 = new NewsEntity({ title: 'test title2', text: 'test text2' });
            resolve([mockEntity1, mockEntity2]);
        });
    }
}

const newsRepository = new NewsRepository();

export {
    newsRepository,
};