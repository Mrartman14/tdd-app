interface INewsModel {
    title: string,
}

interface INewsModelProps {
    title: string,
}

class NewsModel implements INewsModel {
    title: string;

    constructor(props: INewsModelProps) {
        this.title = props.title;
    }
}

export {
    NewsModel,
};