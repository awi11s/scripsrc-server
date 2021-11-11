import axios from 'axios';
import Modal from './Modal'
import { useState } from 'react';
import { Element, Button, Input, ContentBtn } from './styles';






const ChapDisplay = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [verses, setVerses] = useState([])
    const [verse, setVerse] = useState('')
    const [bookName, setBookName] = useState('')
    const [chapNum, setChapNum] = useState('')
    const [status, setStatus] = useState('')


    
    const call = async (book, chapter) => {
        try {
            const res = await axios.get(
                `https://bible-api.com/${book}+${chapter}`
            );

            setVerses(res.data.verses)
            setStatus(`the book of ${book}, chapter ${chapter}`)
            
            
        } catch {
            setVerses([])
            setStatus('input is invalid')
        }
    }


    return (
        <>
            <Element>
                <Input onChange={(e) => setBookName(e.target.value.toLowerCase())}/>
                <Input onChange={(e) => setChapNum(e.target.value)}/>
                <Button onClick={() => call(bookName.toLowerCase(), chapNum)}>show</Button>
            </Element>
            <h1>{status}</h1>
            {
            verses.map(v => (
                <ContentBtn 
                    key={v.verse} 
                    onClick={() => {
                        setModalOpen(true)
                        setVerse(v.verse.toString())
                    }}>{v.text}</ContentBtn>
            ))
            }
            <Modal
                open={modalOpen}
                book={bookName}
                chapter={chapNum}
                verse={verse}
                onClose={() => setModalOpen(false)}
            ></Modal>

        </>
    )
}

export default ChapDisplay;