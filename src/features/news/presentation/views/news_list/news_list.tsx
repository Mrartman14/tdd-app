import React from 'react';

import { NewsEntity } from '../../../domain/entities/news_entity';
import { NewsCard } from '../../components/news_card/news_card';

import './news_list.css';
interface NewsListProps {
    data: NewsEntity[];
}
class NewsList extends React.PureComponent<NewsListProps> {
    render() {
        const newsListView = this.props.data.map((item, i) => (
            <NewsCard data={item} key={i} />
        ));

        return (
            <div className="news-list">
                {newsListView}
            </div>
        );
    }
}

export {
    NewsList,
};