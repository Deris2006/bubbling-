Instrucciones de Código para Gemini CLI: Ejercicio 2
Genera el código HTML, CSS y JavaScript para crear una galería interactiva. El objetivo es demostrar el uso de delegación de eventos (Event Bubbling) para manejar interacciones de manera eficiente y el uso de stopPropagation() para prevenir la propagación.

1. Estructura de la Galería (HTML)
Crea un contenedor principal para la galería. Dentro, incluye al menos 6 tarjetas de imágenes. Cada tarjeta debe contener:

Una Imagen.

Un Título.

Un Botón "Me gusta" (corazón), que debe tener un contador visible.


Un Botón "Eliminar" (X).

Un Área de descripción que inicialmente esté oculta y sea expandible.

2. Implementación de Eventos (JavaScript)
Implementa la lógica interactiva de la galería utilizando los siguientes eventos:

Delegación de Eventos (click):

Adjunta un único listener de click al contenedor principal de la galería.

Usa el objeto event.target para identificar qué botón se ha clickeado (Me gusta o Eliminar) y manejar la acción correspondiente.

Doble Click (dblclick):

Aplica dblclick a la imagen para ampliarla y mostrarla en un modal.

El modal debe poder cerrarse al hacer clic fuera de la imagen ampliada o con un botón de cerrar.

Efectos al pasar el Mouse (mouseover y mouseout):

Usa mouseover y mouseout en la tarjeta de imagen para mostrar/ocultar el área de descripción.

Prevención de Propagación (stopPropagation()):

Aplica stopPropagation() a los botones (Me gusta y Eliminar) para evitar que el clic en ellos active cualquier evento definido en los elementos padres (demostrando la prevención del Bubbling).

3. Lógica Funcional

Botón "Me gusta": Al hacer clic, debe cambiar su color y aumentar el contador asociado.


Botón "Eliminar": Al hacer clic, debe remover la tarjeta completa de la galería.

4. Funcionalidad Adicional (scroll)
Agrega un listener para el evento scroll en la ventana (window).

Cuando el usuario se haya desplazado hacia abajo más de 300px, debe mostrar un botón "Volver arriba" en la esquina de la pantalla.
