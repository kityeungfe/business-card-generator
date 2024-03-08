import { useEffect, useState } from 'react'
import ProfileInput from './ProfileInput'
import BusinessCardPreview from './BusinessCardPreview'
import html2canvas from 'html2canvas';
import Result from './Result';
/**
 * Business card generator application
 * @author Kit.Yeung
 * @version 1.1
 * @since 2024-02-26
 * @updated 2024-02-28
 * @description This is the main component of the application
 * @returns Component of generate the business card
 */
function App() {
    const [name, setName] = useState()
    const [profile, setProfile] = useState({
        company: 'Kit Studio',
        name: 'Kit.Yeung',
        email: 'kit.yeung@example.com',
        telephone: '95412877',
        address: 'USA, New York, 5th Ave, 1234',
        logo: '',
        qrCode: '',
        cardStyle: 'bg-gradient-to-r from-purple-500 to-pink-500'
    })
    const [preview, setPreview] = useState(null)

    useEffect(() => {
        html2canvas(document.querySelector("#capture")).then(function(canvas) {
            setPreview(canvas.toDataURL('image/png'))
        });
    }, [])

    useEffect(() => {
        html2canvas(document.querySelector("#capture")).then(function(canvas) {
            setPreview(canvas.toDataURL('image/png'))
        });
    }, [profile])

    return (
        <>
            <ProfileInput 
                profile={profile}
                onChange={(profile) => setProfile(profile)}
            /> 
            <BusinessCardPreview profile={profile}/>
            <Result preview={preview}/>
        </>
    )
}

export default App
