document.getElementById('urlForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    const urlInput = document.getElementById('url-input');
    const resultDiv = document.getElementById('result');
    
    const originalUrl = urlInput.value;
  
    try {
      const response = await fetch('http://localhost:3000/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ originalUrl })
      });
  
      if (response.ok) {
        const data = await response.json();
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<p>URL Encurtada: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a></p>`;
      } else {
        throw new Error('Falha ao encurtar a URL');
      }
    } catch (error) {
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  });