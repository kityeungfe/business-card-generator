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
            <div className='m-1 grid grid-cols-1 sm:grid-cols-4'>
                {/* user name */}
                <section>
                    <label className='m-1'>{'name'}</label>
                    <input value={value} onChange={onChange} />
                </section>
                {/* email */}
                <section>
                    <label className='m-1'>{'email'}</label>
                    <input value={value} onChange={onChange} />
                </section>
                {/* phone */}
                <section>
                    <label className='m-1'>{'tel'}</label>
                    <input value={value} onChange={onChange} />
                </section>
                {/* address */}
                <section>
                    <label className='m-1'>{'address'}</label>
                    <input value={value} onChange={onChange} />
                </section>
            </div>
            <div className='m-1 grid grid-cols-1 sm:grid-cols-2'>
                {/* logo upload */}
                <section>
                    <label className='m-1'>{'logo'}</label>
                    <input type='text' value={value} onChange={onChange} />
                </section>
                {/* qr code */}
                <section>
                    <label className='m-1'>{'qr code'}</label>
                    <input value={value} onChange={onChange} />
                </section>
            </div>
            {/* style */}
            <section className='m-1'>
                <label className='m-1'>{'style'}</label>
                <input value={value} onChange={onChange} />
            </section>
        </Card>
    </React.Fragment>
  );
}

export default ProfileInput;