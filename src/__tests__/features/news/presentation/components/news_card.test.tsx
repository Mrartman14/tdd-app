import { shallow, configure, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { act } from 'react-dom/test-utils';

import { NewsEntity } from '../../../../../features/news/domain/entities/news_entity';
import { NewsCard } from '../../../../../features/news/presentation/components/news_card/news_card';

configure({
    adapter: new Adapter(),
});

const fakeData = new NewsEntity({
    title: 'test title',
    text: 'test text',
});

function setupComponent(props: NewsEntity) {
    const component = shallow(<NewsCard data={props} />);
    return component;
}

describe('should newscard renders well', () => {
    let component: ShallowWrapper;

    beforeEach(() => {
        component = setupComponent(fakeData);
    });
    
    afterEach(() => {
        //
    });

    it('should render a root component element', () => {
        let rootEl: ShallowWrapper;
        act(() => {
            rootEl = component.find('.news-card');
        });
        expect(rootEl!.length).toBe(1);
    });

    it('should render a title', () => {
        let title: ShallowWrapper;
        act(() => {
            title = component.find('.news-card__title');
        });
        expect(title!.text()).toContain(fakeData.title);
    });

    it('should render a text', () => {
        let textContainer: ShallowWrapper;
        act(() => {
            textContainer = component.find('.news-card__text');
        });
        expect(textContainer!.text()).toBe(fakeData.text);
    });

    it('snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});

