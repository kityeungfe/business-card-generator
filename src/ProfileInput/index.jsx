import React from 'react';
import BusinessCardPreview from '../BusinessCardPreview';
import Card from '../Card';

/**
 * User profile input component
 * @description - This is the user profile input component for the business card generator
 * @param {*} profile - user profile object 
 * @returns user profile input component
 */
function ProfileInput({ label, value, onChange }) {
  return (
    <React.Fragment>
        <Card title={'Profile'}>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-4'>
                {/* user name */}
                <section>
                    <label>{'name'}</label>
                    <input value={value} onChange={onChange} />
                </section>
                {/* email */}
                <section>
                    <label>{'email'}</label>
                    <input value={value} onChange={onChange} />
                </section>
                {/* phone */}
                <section>
                    <label>{'tel'}</label>
                    <input value={value} onChange={onChange} />
                </section>
                {/* address */}
                <section>
                    <label>{'address'}</label>
                    <input value={value} onChange={onChange} />
                </section>
            </div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'></div>
            {/* logo upload */}
            <section>
                <label>{'logo'}</label>
                <input value={value} onChange={onChange} />
            </section>
            {/* qr code */}
            <section>
                <label>{'qr code'}</label>
                <input value={value} onChange={onChange} />
            </section>
            {/* style */}
            <section>
                <label>{'style'}</label>
                <input value={value} onChange={onChange} />
            </section>
        </Card>
    </React.Fragment>
  );
}

export default ProfileInput;