
document.addEventListener('DOMContentLoaded', function() {
    // 1. Crear y agregar el navbar
    createStaticNavbar();
    
    // 2. Activar la página actual
    highlightCurrentPage();
});

function createStaticNavbar() {
    const navbarHTML = `
        <header>
            <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">
                        <img src="images/image.png" alt="Logo" style="height: 30px; width: auto;" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link text-dark font-custom" href="index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark font-custom" href="productos.html">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark font-custom" href="contactanos.html">Contactanos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark font-custom" href="carrito.html">
                                    <img src="images/carrito.png" alt="Carrito" style="height: 24px; width: auto;">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;
    
    // Insertar el navbar al inicio del body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        
        // Remover clase active de todos
        link.classList.remove('active');
        
        // Verificar si es la página actual
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage.includes('index') && href === 'index.html')) {
            link.classList.add('active');
            link.style.fontWeight = 'bold';
        }
    });
}
