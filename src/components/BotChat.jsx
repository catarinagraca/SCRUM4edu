import React, { useEffect } from 'react';

export default function BotChat() {
  useEffect(() => {
    // Evitar duplicar o script se o componente renderizar novamente
    if (document.getElementById('botschool-script')) return;

    const script = document.createElement('script');
    script.id = 'botschool-script';
    script.src = 'https://webchat-cc.ng.botschool.ai/loader.js';
    script.async = true;
    
    // Adicionar os atributos necessários do BOTSchool
    script.setAttribute('data-channel-id', '01a1c1e1-13b1-7158-96a6-e2b1696a55ce');
    script.setAttribute('data-endpoint', 'https://api-cc.ng.botschool.ai');

    document.body.appendChild(script);

    // Opcional: Limpar o script caso o componente seja desmontado
    return () => {
      const existingScript = document.getElementById('botschool-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // O widget injeta-se automaticamente na página
}