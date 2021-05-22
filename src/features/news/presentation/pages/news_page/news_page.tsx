import React from 'react';

import { newsRepository } from '../../../data/repositories/data_news_repository';
import { NewsEntity } from '../../../domain/entities/news_entity';

import { NewsList } from '../../views/news_list';
import { Layout } from '../../../../../core/components/layout/layout';

interface NewsPageState {
    news: NewsEntity[],
}

class NewsPage extends React.PureComponent {
    state: NewsPageState;

    constructor(props: Object) {
        super(props);

        this.state = {
            news: [],
        };
    }

    async componentDidMount() {
        const news = await newsRepository.getAllNews();

        this.setState({ news });
    }

    render() {
        return (
            <Layout>
                <NewsList data={this.state.news} />
            </Layout>
        );
    }
}

export { NewsPage };