// Buscador de Admin

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
  
    const getURLParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const params = {};
  
      for (const [key, value] of searchParams) {
          params[key] = value;
      }
  
      return params;
    }

    // Función para cargar los valores del formulario desde los parámetros del query string
    
    const loadURLParams = () => {
      const urlParams = getURLParams();
  
      if (urlParams.search) {
        searchInput.value = urlParams.search;
      }
    };
  
    loadURLParams();

    // Función para enviar el formulario
  
    const submitForm = () => {
      const currentURL = window.location.origin + window.location.pathname;
        
      const params = new URLSearchParams();

      // Agrego parámetros search
      const searchValue = searchInput.value.trim().replace(/ /g, "");
      if (searchValue == "") {
        params.append('search', searchValue);
      };

      // Nuevo URL con los parámetros    
      const queryString = params.toString();

      const newURL = queryString ? `${currentURL}?${queryString}` : currentURL;
      window.location.href = newURL;
    };
    
    // Agrego eventos para enviar el formulario cuando se presiona enter

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            submitForm();
        };
    });
  });