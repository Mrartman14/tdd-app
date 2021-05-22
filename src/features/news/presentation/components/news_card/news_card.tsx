import React from 'react';

import { NewsEntity } from '../../../domain/entities/news_entity';

import './news_card.css';

interface NewCardProps {
    data: NewsEntity;
}

class NewsCard extends React.PureComponent<NewCardProps> {
    render() {
        return (
            <div className="news-card">
                <div className="news-card__title">
                    {this.props.data.title}
                </div>
                <div className="news-card__text">
                    {this.props.data.text}
                </div>
            </div>
        );
    }
}

export {
    NewsCard,
};