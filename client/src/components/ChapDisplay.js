import axios from 'axios';
import Modal from './Modal'
import { useState } from 'react';
import { Button, INPUT_STYLES,CONTENTBTN_STYLES, FORM_STYLE } from './styles';






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
            setStatus('provide correct book name and chapter number')
        }
    }


    return (
        <>
            <div style={FORM_STYLE}>
                <input 
                    placeholder="book name"
                    style={INPUT_STYLES} 
                    type='text' 
                    onChange={(e) => setBookName(e.target.value.toLowerCase())}/>
                <input 
                    placeholder="chapter #"
                    style={INPUT_STYLES} 
                    onChange={(e) => setChapNum(Number(e.target.value))}/>
                <Button onClick={() => call(bookName.toLowerCase(), chapNum)}>show</Button>
            </div>
            <h1>{status}</h1>
            {
            verses.map(v => (
                <button 
                style={CONTENTBTN_STYLES} 
                    key={v.verse} 
                    onClick={() => {
                        setModalOpen(true)
                        setVerse(v.verse.toString())
                    }}>{v.text}</button>
            ))
            }
            <Modal
                open={modalOpen}
                book={bookName}
                chapter={chapNum.toString()}
                verse={verse}
                onClose={() => setModalOpen(false)}
            ></Modal>

        </>
    )
}

export default ChapDisplay;