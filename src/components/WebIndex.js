import React, { useState, useEffect } from 'react';
import WebEditor from './WebEditor'
import useLocalStorage from '../hooks/useLocalStorage'
import '../css/webeditor.css'

function WebIndex() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [srcDoc])

  return (
    <>
      <div className="pane top-pane">
        <WebEditor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <WebEditor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <WebEditor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default WebIndex;