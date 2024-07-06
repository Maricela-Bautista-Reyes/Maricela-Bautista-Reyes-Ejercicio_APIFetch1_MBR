document.addEventListener('DOMContentLoaded', function() {
    const btnReadUsers = document.getElementById('btnReadUsers');
    const loader = document.getElementById('loader');
    const usersContainer = document.getElementById('usersContainer');
    const userTableBody = document.getElementById('userTableBody');

    btnReadUsers.addEventListener('click', function() {
        // Mostrar loader y ocultar contenedor de usuarios
        loader.style.display = 'block';
        usersContainer.classList.add('d-none');

        // Fetch de los datos
        fetch('https://reqres.in/api/users?delay=3')
            .then(response => response.json())
            .then(data => {
                // Limpiar contenido anterior
                userTableBody.innerHTML = '';

                // Mostrar datos en la tabla
                data.data.forEach(user => {
                    const row = `<tr>
                        <td>${user.id}</td>
                        <td>${user.first_name}</td>
                        <td>${user.last_name}</td>
                        <td>${user.email}</td>
                        <td><img src="${user.avatar}" class="avatar"></td>
                                            
                        
                    </tr>`;
                    userTableBody.innerHTML += row;
                });

                // Ocultar loader y mostrar contenedor de usuarios
                loader.style.display = 'none';
                usersContainer.classList.remove('d-none');
            })
            .catch(error => {
                console.error('Error al recuperar los datos:', error);
                // Manejar errores aquí (p. ej., mostrar un mensaje de error)
            });
    });
});

