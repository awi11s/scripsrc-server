import axios from 'axios';
import Modal from './Modal'
import { useEffect, useState } from 'react';
import { Header, Element, Button, Input, ContentBtn } from './styles';

const ChapDisplay = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const [verses, setVerses] = useState([])
    const [verse, setVerse] = useState(0)
    const [book, setBook] = useState('')
    const [chap, setChap] = useState('')
    const [error, setError] = useState('')
    
    const call = async (book, chapter) => {
        try {
            const res = await axios.get(
                `https://bible-api.com/${book}+${chapter}`
            );

            setVerses(res.data.verses)
            
        } catch {
            setVerses([])
            setError('pls give legit inputs')
        }
    }


    return (
        <>
        <Header>
            <Element>
                <Input onChange={(e) => setBook(e.target.value)}/>
                <Input onChange={(e) => setChap(e.target.value)}/>
                <Button onClick={() => call(book, chap)}>chapter</Button>
            </Element>
            <h1>{error}</h1>
            {
            verses.map(v => (
                <ContentBtn 
                    key={v.verse} 
                    onClick={() => {
                        setModalOpen(true)
                        setVerse(v.verse)
                    }}>{v.text}</ContentBtn>
            ))
            }

            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {`${book} ${chap}:${verse}`}
            </Modal>

        </Header>
        
        </>
    )
}

export default ChapDisplay;