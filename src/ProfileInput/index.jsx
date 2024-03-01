import React from 'react';
import BusinessCardPreview from '../BusinessCardPreview';
import Card from '../Card';
import TextInput from '../TextInput';
import FileInput from '../FileInput';

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

    const onFileChange = (type) => {
        console.log('onFileChange: ', type);
    }

    return (
        <React.Fragment>
            <Card title={'Profile'}>
                <div className='grid grid-cols-1 sm:grid-cols-4'>
                    {/* user name */}
                    <TextInput 
                        inputName={'name'}
                        title={'name'} 
                        placeholder={'Kit.Yeung'} 
                        type={'text'} 
                        value={profile.name} 
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
                    {/* phone */}
                    <TextInput 
                        inputName={'telephone'}
                        title={'telephone'} 
                        placeholder={'95412877'} 
                        type={'tel'} 
                        value={profile.telephone} 
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
                        placeholder={'Logo'}
                        value={profile.logo} 
                        onChange={() => {onFileChange('logo')}} 
                    />
                    {/* qr code */}
                    <FileInput 
                        inputName={'qrCode'}
                        title={'qrCode'} 
                        placeholder={'qrCode'}
                        value={profile.qrCode} 
                        onChange={() => {onFileChange('qr code')}}
                    />
                </div>
                {/* style */}
                <TextInput 
                    inputName={'cardStyle'}
                    title={'cardStyle'} 
                    placeholder={'cardStyle'} 
                    type={'text'} 
                    value={profile.cardStyle} 
                    onChange={onInputChange} 
                />
            </Card>
        </React.Fragment>
    );
}

export default ProfileInput;