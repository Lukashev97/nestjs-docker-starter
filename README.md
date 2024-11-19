### Документация по проекту

---

## 1. **Описание проекта**

Проект представляет собой API, созданный на основе **Nest.js**, с использованием **TypeScript**. Для деплоя используются контейнеры Docker, а также окружения для разработки, стейджинга и продакшена.

---

## 2. **Установка и настройка проекта**

### 2.1. **Клонирование репозитория**

Склонируйте проект из Git-репозитория:

```bash
git clone <URL_репозитория>
cd testapi
```

### 2.2. **Установка зависимостей**

Убедитесь, что у вас установлен **Node.js** (рекомендуемая версия: `18.x`) и менеджер пакетов `npm`.

Установите зависимости:

```bash
npm install
```

---

## 3. **Запуск проекта локально**

### 3.1. **Запуск без Docker**

1. Настройте `.env.development` файл в корне проекта (он уже добавлен в проект).

   Пример `.env.development`:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=example
   DB_NAME=testapi_dev
   ```

2. Запустите PostgreSQL локально (если не используется Docker) и создайте базу данных, указанную в `.env`.

3. Запустите проект:

   ```bash
   npm run start:dev
   ```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

---

### 3.2. **Запуск через Docker (локально)**

1. Настройте `docker-compose.dev.yml`. Пример файла уже добавлен в проект.

2. Соберите и запустите контейнеры:

   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

3. После запуска API будет доступен на [http://localhost:3000](http://localhost:3000).

---

## 4. **Развертывание на стейджинг**

### 4.1. **Подготовка к деплою**

1. Настройте файл `.env.staging`. Пример:
   ```env
   PORT=3000
   NODE_ENV=staging
   DB_HOST=db
   DB_PORT=5433
   DB_USER=postgres
   DB_PASSWORD=example
   DB_NAME=testapi_staging
   ```

2. Проверьте корректность файла `docker-compose.staging.yml`.

---

### 4.2. **Запуск контейнеров**

Выполните команду:

```bash
docker-compose -f docker-compose.staging.yml up -d --build
```

API будет доступен на сервере, на указанном порту.

---

## 5. **Развертывание в продакшен**

### 5.1. **Подготовка к деплою**

1. Настройте файл `.env.production`. Пример:
   ```env
   PORT=3000
   NODE_ENV=production
   DB_HOST=db
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=securepassword
   DB_NAME=testapi_prod
   ```

2. Проверьте корректность файла `docker-compose.prod.yml`.

---

### 5.2. **Запуск контейнеров**

Выполните команду:

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

Приложение будет развернуто в продакшене.

---

## 6. **Тестирование API**

### 6.1. **Swagger**

Для документации API используется **Swagger**. После запуска приложения Swagger доступен по адресу:

```
http://localhost:3000/api
```

### 6.2. **Юнит-тесты**

Чтобы запустить тесты, выполните:

```bash
npm run test
```

---

## 7. **Основные команды**

| Команда                        | Описание                                       |
|--------------------------------|-----------------------------------------------|
| `npm run start:dev`            | Запуск приложения в режиме разработки         |
| `docker-compose up --build`    | Сборка и запуск контейнеров                   |
| `npm run test`                 | Запуск юнит-тестов                            |
| `npm run build`                | Сборка приложения                             |
| `docker-compose logs -f`       | Просмотр логов Docker-контейнеров             |

---

## 8. **Обновление приложения**

1. Зайдите на сервер.
2. Перейдите в директорию с проектом:

   ```bash
   cd testapi
   ```

3. Обновите проект из репозитория:

   ```bash
   git pull origin main
   ```

4. Перезапустите контейнеры:

   ```bash
   docker-compose -f docker-compose.prod.yml up -d --build
   ```

---

## 9. **Резервное копирование базы данных**

Создание бэкапа:

```bash
docker exec -t <db-container-name> pg_dump -U postgres <db-name> > backup.sql
```

Восстановление бэкапа:

```bash
docker exec -i <db-container-name> psql -U postgres <db-name> < backup.sql
```

---

Если у вас есть дополнительные вопросы, пишите!