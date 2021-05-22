import React from 'react';

import { NewsEntity } from '../../domain/entities/news_entity';
import { NewCard } from '../components/newcard/newcard';


interface NewCardProps {
    data: NewsEntity[];
}

class NewsList extends React.PureComponent<NewCardProps> {
    render() {
        const newsListView = this.props.data.map((item, i) => (
            <NewCard data={item} key={i} />
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