import React, { useEffect } from "react"

const GoogleTranslate = () => {
  const loadGoogleTranslateScript = async () => {
    return new Promise((resolve) => {
      const addScript = document.createElement("script")
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=onGoogleTranslateReady"
      )
      document.body.appendChild(addScript)
      addScript.onload = resolve
    })
  }

  const onGoogleTranslateReady = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: "en,hi,te,gu,kn",
      },
      "google_translate_element"
    )
  }

  useEffect(() => {
    const initGoogleTranslate = async () => {
      await loadGoogleTranslateScript()
    }

    // Expose onGoogleTranslateReady to global scope
    window.onGoogleTranslateReady = onGoogleTranslateReady

    initGoogleTranslate()
  }, [])

  return <div id="google_translate_element" style={{ marginTop: "20px" }}></div>
}

export default GoogleTranslate
