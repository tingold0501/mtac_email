import grapesjs from 'grapesjs';
import GjsEditor, { Canvas } from '@grapesjs/react';

export default function Home() {
  // const onEditor = (editor: Editor) => {
  //   console.log('Editor loaded', { editor });
  // };

  return (
    <GjsEditor
      grapesjs="https://unpkg.com/grapesjs"
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      options={{
        height: '100vh',
        storageManager: false,
      }}
      plugins={[
        {
          id: 'gjs-blocks-basic',
          src: 'https://unpkg.com/grapesjs-blocks-basic',
        },
        
      ]}
      
      // onEditor={onEditor}
    >
    
    </GjsEditor>
  );
}

