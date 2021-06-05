import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { act } from "react-dom/test-utils";

import { NewsEntity } from "../../../../features/news/domain/entities/news_entity";
import { NewsList } from "../../../../features/news/presentation/views/news_list/news_list";

configure({
    adapter: new Adapter(),
});

const fakeData: NewsEntity[] = [
    {
        title: 'test title 1',
        text: 'test text 1',
    },
    {
        title: 'test title 2',
        text: 'test text 2',
    },
    {
        title: 'test title 3',
        text: 'test text 3',
    },
];

function setupComponent(props: NewsEntity[]): ShallowWrapper {
    const component = shallow(<NewsList data={props} />);
    return component;
}

describe('should news list component renders well', () => {
    let component: ShallowWrapper;
    beforeEach(() => {
        component = setupComponent(fakeData);
    });
    
    afterEach(() => {
        //
    });

    it('should renders right count of news cards', () => {
        const newsCardsElements = component.find('.news-list');
        expect(newsCardsElements.children().length).toBe(fakeData.length);
    });

    it('should news list makes well snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});
