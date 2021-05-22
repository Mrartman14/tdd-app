import React from 'react';

import { NewsEntity } from '../../../domain/entities/news_entity';
import { NewsCard } from '../../components/news_card/news_card';

import './news_list.css';

interface NewCardProps {
    data: NewsEntity[];
}

class NewsList extends React.PureComponent<NewCardProps> {
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