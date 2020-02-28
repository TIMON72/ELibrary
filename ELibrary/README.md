# Приложение  .net core с применением react-redux

## Настройка БД

* В проекте 'ELibrary' в файле `appsettings.json` у параметра `LocalConnection` укажите строку подключения к БД
* Выполните команду в диспетчере пакетов NuGet `Add-Migration InitialCreate -Project DBRepository` для инициализации таблиц исходя из классов в проекте 'Models'
* Компилируйте проект и обновите список таблиц
* Добавьте в таблицу БД 'Users' новою строку (пользователя): 'Login':'admin', 'Password':'jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=', 'Role':'Admin'.

## Работа с БД через Postman

Адресная строка к контроллерам выглядит следующим образом: `[адрес сервера]/api/[название контроллера]/[название операции]`

Возможны следующие операции

* Авторизация пользователя (POST): `[адрес сервера]/api/Identity/AuthorizationUser`
BODY (raw): 
```
{
	"Login":"admin",
	"Password":"admin"
}
```
* Добавить нового пользователя (POST): `[адрес сервера]/api/ELib/RegistrationUser`
BODY (raw):
```
{
	"Login":"reader",
	"Password":"reader",
	"Role":"Reader"
}
```
* Удалить пользователя (DELETE): `[aдрес сервера]/api/ELib/DeleteUser/[id]`
* Добавить книгу (POST): `[aдрес сервера]/api/ELib/AddBook`
BODY (raw):
```
{
	"Author":"author1",
	"Category" : "category1",
	"Genre" : "genre1",
	"Name" : "name1",
	"Year" : "2018-01-01 00:00:00.0000000"
}
```
* Редактировать книгу (POST): `[aдрес сервера]/api/ELib/EditBook`
BODY (raw):
```
{
	"BookId":"1",
	"Author":"authorEdit",
	"Category" : "categoryEdit",
	"Genre" : "genreEdit",
	"Name" : "nameEdit",
	"Year" : "2019-01-01 00:00:00.0000000"
}
```
* Удалить книгу (DELETE): `[aдрес сервера]/api/ELib/DeleteBook/[id]`
* Получить список всех книг (GET): `[адрес сервера]/api/ELibQuery/GetAllBook`

Чтобы задействовать роли пользователь на доступ к какой-либо операции, необходимо:
- в проекте 'ELibrary' в контроллерах `Controllers/ELibController.cs` и `Controllers/ELibQueryController.cs` расскомментировать/добавить аттрибут `[Authorization]`
- в каждом запросе вставлять токен пользователя в Authorization