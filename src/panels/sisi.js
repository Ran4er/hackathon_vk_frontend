import vkBridge from '@vkontakte/vk-bridge';

let CheckDolboeb = () => {
    let dataUser;

    vkBridge.send('VKWebAppGetAuthToken', {
        app_id: 52463583, // Замените на ваш app_id
        scope: 'friends,photos', // Задайте необходимые права доступа
      })
        .then(data => {
          if (data.access_token) {
            dataUser = data.access_token;
            console.log('Токен пользователя:', data.access_token);
          }
        })
        .catch(error => {
          console.error('Ошибка при получении токена:', error);
        });

    fetch('/check_token', {
        method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ dataUser }),
      }) .then(response => response.json())
      .then(data => {
          // Handle response from the parser
          if (data.success) {
              alert('Product successfully created!');
          } else {
              alert('Failed to create product.');
          }
      })
      .catch(error => console.error('Error:', error));
}