import { Header, Element, Button, Input } from './styles';

const Head = () => {
    return (
        <Header>
            <Element>
                <Input />
                <Button>book</Button>
            </Element>
            <Element>
                <Input />
                <Button>chapter</Button>
            </Element>
        </Header>
    );
}

export default Head;