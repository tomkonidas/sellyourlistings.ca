import React from "react"

import SEO from "../components/seo"
import "../styles/global.css"

const ThanksPage = () => {
  const {
    form: { success },
  } = require("../../content/data/contact.json")

  return (
    <>
      <SEO title="Thanks for your Submission!" />
      <div className="bg-gray-100 min-h-screen h-100 flex flex-col justify-center items-center">
        <div className="mt-1/6 flex items-center">
          <h1 className="px-4 text-5xl font-semibold border-brand border-r-4">
            Thanks
          </h1>
          <p className="px-4 text-xl font-medium">{success}</p>
        </div>
      </div>
    </>
  )
}

export default ThanksPage
