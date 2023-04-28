import React, { useState, useEffect } from 'react';
import WebEditor from './WebEditor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIconName } from '@fortawesome/free-solid-svg-icons';
import "../css/webeditor.css"

function App() {
  const [srcDoc, setSrcDoc] = useState('')
  const [html, setHtml] = useState("<h1>Weclome to Codeit</h1>")
  const [css, setCss] = useState("h1{\n\tcolor:red\n}");
  const [js, setJs] = useState("// type your Javascript here...");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
        <style>${css}</style>
        <body>${html}</body>
        <script>${js}</script>
        </html>
      `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])
  return (
    <>
    <h2 className='pane-heading'>Web Compiler</h2>
      <div className='web-container'> 
        <div className='left-cont'>
          <div className="ide-cont html-cont">
            <WebEditor
              language="html"
              displayName="HTML"
              value={html}
              onChange={setHtml}
              />
          </div>
          <div className="ide-cont css-cont">
            <WebEditor
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss}
              />
          </div>
          <div className="ide-cont js-cont">
            <WebEditor
              language="javascript"
              displayName="JAVASCRIPT"
              value={js}
              onChange={setJs}
              />
          </div>
        </div>
        <div className="pane">
          <iframe
            className='dev-output'
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            />
        </div>
      </div>
    </>
  )
}

export default App;