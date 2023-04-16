import React, { useState, useEffect, useRef } from 'react';
import WebEditor from './WebEditor'
import useLocalStorage from '../hooks/useLocalStorage'
import '../css/webeditor.css'

function WebIndex() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  const f1 = (val) => {
    setHtml(val);
  }
  const f2 = (val) => {
    setCss(val);
  }
  const f3 = (val) => {
    setJs(val);
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("inside ", html, css, js);
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <WebEditor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={f1}
        />
        <WebEditor
          language="css"
          displayName="CSS"
          value={css}
          onChange={f2}
        />
        <WebEditor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={f3}
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