import React from 'react';
import html2canvas from 'html2canvas';

/**
 * User profile input component
 * @description - This is the user profile input component for the business card generator
 * @param {*} profile - user profile object 
 * @returns user profile input component
 */
function ProfileInput({ label, value, onChange }) {
  return (
    <React.Fragment>
        {/* title */}
        <h1>Business Card Generator</h1>
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
        {/* submit button */}
        <section>
            <button
                onClick={() => {
                    console.log('submit')
                    html2canvas(document.body).then(function(canvas) {
                        document.body.appendChild(canvas);
                    });
                }}
            >Submit to generate</button>
        </section>
    </React.Fragment>
  );
}

export default ProfileInput;