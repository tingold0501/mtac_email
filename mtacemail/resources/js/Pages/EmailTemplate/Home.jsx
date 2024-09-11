import React from "react";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import en from './src/locale/en';
import loadBlocks from './src/blocks';
import loadCommands from './src/commands';
const Home = (editor, opts = {}) => {
    const options = {
        ...{
          i18n: {},
          // default options
          tailwindPlayCdn: 'https://cdn.tailwindcss.com',
          plugins: [],
          config: {},
          cover: `.object-cover { filter: sepia(1) hue-rotate(190deg) opacity(.46) grayscale(.7) !important; }`,
          changeThemeText: 'Change Theme',
          openCategory: 'Blog',
        }, ...opts
      };
    
      // Add blocks
      loadBlocks(editor, options);
      // Add commands
      loadCommands(editor, options);
      // Load i18n files
      editor.I18n && editor.I18n.addMessages({
        en,
        ...options.i18n,
      });
    
      const appendTailwindCss = async (frame) => {
        const iframe = frame.view.getEl();
    
        if (!iframe) return;
    
        const { tailwindPlayCdn, plugins, config, cover } = options;
        const init = () => {
          iframe.contentWindow.tailwind.config = config;
        }
    
        const script = document.createElement('script');
        script.src = tailwindPlayCdn + (plugins.length ? `?plugins=${plugins.join()}` : '');
        script.onload = init;
    
        const cssStyle = document.createElement('style');
        cssStyle.innerHTML = cover;
    
        // checks iframe is ready before loading Tailwind CSS - issue with firefox
        const f = setInterval(() => {
          const doc = iframe.contentDocument;
          if (doc && doc.readyState && doc.readyState === 'complete') {
            doc.head.appendChild(script);
            doc.head.appendChild(cssStyle);
            clearInterval(f);
          }
        }, 100)
      }
    
      editor.Canvas.getModel()['on']('change:frames', (m, frames) => {
        frames.forEach(frame => frame.once('loaded', () => appendTailwindCss(frame)));
      });
    const escapeName = (name) => `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, '-');

    window.editor = grapesjs.init({
        height: '100%',
        container: '#gjs',
        showOffsets: true,
        fromElement: true,
        noticeOnUnload: false,
        storageManager: false,
        selectorManager: { escapeName },
        plugins: ['grapesjs-tailwind'],
        pluginsOpts: {
            'grapesjs-tailwind': { /* Test here your options  */ }
        }
    });
    editor.Panels.addButton('options', {
        id: 'update-theme',
        className: 'fa fa-adjust',
        command: 'open-update-theme',
        attributes: {
            title: 'Update Theme',
            'data-tooltip-pos': 'bottom',
        },
    });
    return <div id="gjs"></div>;
};

export default Home;
