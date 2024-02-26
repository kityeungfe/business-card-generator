import { useState } from 'react'
import ProfileInput from './ProfileInput'
import BusinessCardPreview from './BusinessCardPreview'
/**
 * This is the main component of the application
 * 
 * @author Kit.Yeung
 * @version 1.0
 * @since 2024-02-26
 * @returns Component of generate the business card
 */
function App() {
  const [isReady, setIsReady] = useState(false)
  const [name, setName] = useState()
  const [profile, setProfile] = useState({})

  return (
    <>
      {isReady ? 
        <BusinessCardPreview />
        :
        <ProfileInput 
          label="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        /> 
        }
    </>
  )
}

export default App
