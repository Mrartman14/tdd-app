interface INewsEntity {
    title: string,
    text: string,
}

interface INewsEntityProps {
    title: string,
    text: string,
}

class NewsEntity implements INewsEntity {
    title: string;
    text: string;

    constructor(props: INewsEntityProps) {
        this.title = props.title;
        this.text = props.text;
    }
}

export {
    NewsEntity,
};