import { useEffect } from "react"
import Card from "../Card"
import reactLogo from '../assets/react.svg'

function BusinessCardPreview({ profile }) {

  useEffect(() => {
    console.log(profile);
  }
  , [profile])

  return (
    <Card title={'Business Card Preview'}>
        {/* business card preview */}
        <section id="capture" className="p-1">
          <div className={`bg-gray-400 p-2 rounded flex max-w-80 min-h-40 ${profile.cardStyle}`}>
            <div className="flex-1">
              <p className="text-4xl mb-5">{profile.company}</p>
              <p className="">{profile.name}</p>
              <p className="">{profile.telephone}</p>
              <p className="">{profile.email}</p>
              <p className="">{profile.address}</p>
            </div>
            <div className="">
              <img src={profile.logo ? profile.logo : reactLogo} className="h-16 w-16" />
            </div>
          </div>
        </section>
    </Card>
  )
}

export default BusinessCardPreview