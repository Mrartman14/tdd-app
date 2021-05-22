import React from 'react';

import { NewsEntity } from '../../../domain/entities/news_entity';

import './newcard.css';

interface NewCardProps {
    data: NewsEntity;
}

class NewCard extends React.PureComponent<NewCardProps> {
    // constructor(props: NewCardProps) {
    //     super(props);
    // }

    render() {
        return (
            <div className="newcard">
                <div className="newcard__title">
                    {this.props.data.title}
                </div>
                <div className="newcard__text">
                    {this.props.data.text}
                </div>
            </div>
        );
    }
}

export {
    NewCard,
};