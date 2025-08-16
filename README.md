# 🎉 Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y divertida.

## 📋 Descripción

Esta aplicación permite agregar nombres de amigos a una lista y realizar un sorteo aleatorio para determinar quién será el amigo secreto. Perfecta para organizar intercambios de regalos en Navidad, cumpleaños o cualquier ocasión especial.

## ✨ Características

- **Agregar amigos**: Añade nombres a tu lista de participantes
- **Validación de duplicados**: Evita agregar el mismo nombre dos veces
- **Lista visual**: Muestra todos los amigos agregados en tiempo real
- **Sorteo aleatorio**: Selecciona un amigo secreto de manera completamente aleatoria
- **Interfaz limpia**: Diseño simple y fácil de usar
- **Validaciones**: Alertas para campos vacíos y listas vacías

## 🚀 Cómo usar

1. **Agregar amigos**:
   - Escribe el nombre de un amigo en el campo de entrada
   - Haz clic en el botón "Añadir"
   - El nombre aparecerá en la lista de amigos

2. **Sortear amigo secreto**:
   - Asegúrate de tener al menos un amigo en la lista
   - Haz clic en el botón "Sortear amigo"
   - El resultado aparecerá debajo del botón


## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica de la página
- **CSS3**: Estilos y diseño responsivo
- **JavaScript**: Lógica de la aplicación y manipulación del DOM

## 📝 Funcionalidades técnicas

### Funciones principales:

- `agregarAmigo()`: Agrega un nuevo amigo a la lista
- `mostrarAmigos()`: Actualiza la visualización de la lista de amigos
- `sortearAmigo()`: Realiza el sorteo aleatorio
- `limpiarcaja()`: Limpia el campo de entrada
- `asignarTextoElemento()`: Función utilitaria para actualizar elementos HTML

### Validaciones implementadas:

- ✅ Campos vacíos
- ✅ Nombres duplicados
- ✅ Lista vacía al sortear