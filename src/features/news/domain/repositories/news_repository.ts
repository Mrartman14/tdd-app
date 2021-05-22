import { NewsEntity } from "../entities/news_entity";

export interface INewsRepository {
    getAllNews: () => Promise<NewsEntity[]>;
}