import { NewsEntity } from "../entities/news_entity";
import { INewsRepository } from "../repositories/news_repository";
import { Usecase } from '../../../../core/types/usecase';

class GetAllNews implements Usecase {
    private repository: INewsRepository;

    constructor(repo: INewsRepository) {
        this.repository = repo;
    }

    action(): Promise<NewsEntity[]> {
        return this.repository.getAllNews();
    }
}

export {
    GetAllNews,
};