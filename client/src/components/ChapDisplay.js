import axios from 'axios';
import { useState } from 'react';

import Modal from './Modal'
import { 
    INPUT_STYLES,
    CONTENTBTN_STYLES, 
    FORM_STYLE, 
    BUTTON_STYLES } from '../style/styles';






const ChapDisplay = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [verses, setVerses] = useState([])
    const [verse, setVerse] = useState(0)
    const [bookName, setBookName] = useState('')
    const [chapNum, setChapNum] = useState(0)
    const [status, setStatus] = useState('')


    
    const call = async (book, chapter) => {
        try {
            const res = await axios.get(
                `https://bible-api.com/${book}+${chapter}`
            );

            setVerses(res.data.verses)
            setStatus(`book of ${book} - chapter ${chapter}`)
            
            
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
                    // making sure that the chapter is a number before a bad req is sent to the server
                    onChange={(e) => setChapNum(e.target.value)}/>
                <button style={BUTTON_STYLES} onClick={() => call(bookName.trim(), chapNum)}>show</button>
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
                // once assured that chapter field is a number, then it can be packaged as a string for the server request
                chapter={chapNum.toString()}
                verse={verse}
                onClose={() => setModalOpen(false)}
            ></Modal>

        </>
    )
}

export default ChapDisplay;