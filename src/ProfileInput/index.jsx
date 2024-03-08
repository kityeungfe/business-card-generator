import React from 'react';
import BusinessCardPreview from '../BusinessCardPreview';
import Card from '../Card';
import TextInput from '../TextInput';
import FileInput from '../FileInput';
import Dropdown from '../Dropdown';

/**
 * User profile input component
 * @description - This is the user profile input component for the business card generator
 * @param {*} profile - user profile object 
 * @returns user profile input component
 */
function ProfileInput({ profile, onChange }) {

    const onInputChange = (e) => {
        onChange({
            ...profile,
            [e.target.name]: e.target.value
        });
    }

    const onFileChange = (e, key) => {
        let file = e.target.files[0]
        let reader = new FileReader()

        reader.onloadend = () => {
            onChange({
                ...profile,
                [key]: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    const onStyleChange = (e) => {
        onChange({
            ...profile,
            cardStyle: e.target.value
        });
    }

    return (
        <React.Fragment>
            <Card title={'Profile'}>
                <div className='grid grid-cols-1 sm:grid-cols-3'>
                    {/* company name */}
                    <TextInput 
                        inputName={'company'}
                        title={'company'} 
                        placeholder={'Kit Studio'} 
                        type={'text'} 
                        value={profile.company} 
                        onChange={onInputChange} 
                    />
                    {/* user name */}
                    <TextInput 
                        inputName={'name'}
                        title={'name'} 
                        placeholder={'Kit.Yeung'} 
                        type={'text'} 
                        value={profile.name} 
                        onChange={onInputChange} 
                    />
                    {/* phone */}
                    <TextInput 
                        inputName={'telephone'}
                        title={'telephone'} 
                        placeholder={'95412877'} 
                        type={'tel'} 
                        value={profile.telephone} 
                        onChange={onInputChange} 
                    />
                    {/* email */}
                    <TextInput 
                        inputName={'email'}
                        title={'email'} 
                        placeholder={'kit.yeung@example.com'} 
                        type={'email'} 
                        value={profile.email} 
                        onChange={onInputChange} 
                    />
                    {/* address */}
                    <TextInput 
                        inputName={'address'}
                        title={'address'} 
                        placeholder={'USA, New York, 5th Ave, 1234'} 
                        type={'text'} 
                        value={profile.address} 
                        onChange={onInputChange} 
                    />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* logo upload */}
                    <FileInput 
                        inputName={'logo'}
                        title={'logo'} 
                        onChange={(e) => onFileChange(e, 'logo')} 
                    />
                    {/* qr code */}
                    {/* <FileInput 
                        inputName={'qrCode'}
                        title={'qrCode'} 
                        onChange={(e) => onFileChange(e, 'qrCode')}
                    /> */}
                </div>
                {/* style */}
                <Dropdown onChange={onStyleChange} />
            </Card>
        </React.Fragment>
    );
}

export default ProfileInput;