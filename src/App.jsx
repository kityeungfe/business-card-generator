import { useEffect, useState } from 'react'
import ProfileInput from './ProfileInput'
import BusinessCardPreview from './BusinessCardPreview'
import html2canvas from 'html2canvas';
import Result from './Result';
/**
 * This is the main component of the application
 * 
 * @author Kit.Yeung
 * @version 1.0
 * @since 2024-02-26
 * @returns Component of generate the business card
 */
function App() {
    const [name, setName] = useState()
    const [profile, setProfile] = useState({})
    const [preview, setPreview] = useState(null)

    useEffect(() => {
        html2canvas(document.querySelector("#capture")).then(function(canvas) {
            setPreview(canvas.toDataURL("image/png"))
        });
    }, [])

    useEffect(() => {
        html2canvas(document.querySelector("#capture")).then(function(canvas) {
            setPreview(canvas.toDataURL("image/png"))
        });
    }, [name])

    return (
        <>
            <ProfileInput 
                label="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            /> 
            <BusinessCardPreview preview={preview}/>
            <Result preview={preview}/>
        </>
    )
}

export default App
