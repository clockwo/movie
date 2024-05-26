# Movie SPA

Movie SPA - это одностраничное приложение (SPA), разработанное с использованием TypeScript, React, React-Router-Dom и Redux-Toolkit. Приложение предоставляет пользователям возможность аутентификации, добавления фильмов в избранное, поиска фильмов с использованием API Кинопоиска и просмотра подробной информации о каждом фильме.

## Функциональные возможности

- **Аутентификация**: Пользователь может войти в систему, введя логин. Если логин не существует, он будет создан и сохранен.
- **Избранное**: Пользователь может добавлять фильмы в избранное и удалять их оттуда. Избранные фильмы сохраняются отдельно для каждого пользователя.
- **Поиск фильмов**: Поиск фильмов осуществляется с использованием API Кинопоиска.
- **Просмотр информации о фильме**: При клике на карточку фильма открывается страница с подробной информацией о фильме.

## Технологии

- **TypeScript**: Используется для типизации и улучшения качества кода.
- **React**: Библиотека для создания пользовательских интерфейсов.
- **React-Router-Dom**: Используется для маршрутизации в приложении.
- **Redux-Toolkit**: Используется для управления состоянием приложения.

## Структура проекта

├── README.md
├── bun.lockb
├── dist.zip
├── index.html
├── package.json
├── project_structure.txt
├── public
│   └── vite.svg
├── src
│   ├── app
│   │   ├── App.module.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── layout
│   │   │   └── Root
│   │   │       └── Root.tsx
│   │   └── providers
│   │       ├── router
│   │       │   └── routes.tsx
│   │       └── store
│   │           ├── localStorage.ts
│   │           ├── movies.slice.ts
│   │           ├── selectors
│   │           │   ├── favoritesLengthSelector.ts
│   │           │   ├── isFavoriteSelector.ts
│   │           │   └── loginedUserSelector.ts
│   │           ├── store.ts
│   │           └── users.slice.ts
│   ├── assets
│   │   ├── icons
│   │   │   ├── like.svg
│   │   │   ├── logo.svg
│   │   │   ├── search.svg
│   │   │   ├── star.svg
│   │   │   └── trash.svg
│   │   └── no-image-placeholder.png
│   ├── index.css
│   ├── interfaces
│   │   └── movie.interface.ts
│   ├── pages
│   │   ├── Error
│   │   │   ├── Error.module.css
│   │   │   ├── Error.props.ts
│   │   │   └── Error.tsx
│   │   ├── Favorites
│   │   │   └── Favorites.tsx
│   │   ├── Feed
│   │   │   ├── Feed.module.css
│   │   │   └── Feed.tsx
│   │   ├── Login
│   │   │   ├── Login.module.css
│   │   │   └── Login.tsx
│   │   └── Movie
│   │       ├── Movie.module.css
│   │       └── Movie.tsx
│   ├── reset.css
│   ├── shared
│   │   ├── components
│   │   │   ├── Button
│   │   │   │   ├── Button.module.css
│   │   │   │   ├── Button.props.ts
│   │   │   │   └── Button.tsx
│   │   │   ├── Heading
│   │   │   │   ├── Heading.module.css
│   │   │   │   ├── Heading.props.ts
│   │   │   │   └── Heading.tsx
│   │   │   ├── Input
│   │   │   │   ├── Input.module.css
│   │   │   │   ├── Input.props.ts
│   │   │   │   └── Input.tsx
│   │   │   ├── ItemList
│   │   │   │   ├── ItemList.module.css
│   │   │   │   ├── ItemList.props.ts
│   │   │   │   └── ItemList.tsx
│   │   │   ├── Paragraph
│   │   │   │   ├── Paragraph.module.css
│   │   │   │   ├── Paragraph.props.ts
│   │   │   │   └── Paragraph.tsx
│   │   │   └── Rating
│   │   │       ├── Rating.module.css
│   │   │       └── Rating.tsx
│   │   ├── helpers
│   │   │   └── RequireAuth.tsx
│   │   ├── hooks
│   │   │   ├── useApi.ts
│   │   │   ├── useAppNavigation.ts
│   │   │   └── useAuth.ts
│   │   └── interfaces
│   │       ├── movie.interface.ts
│   │       └── user.interface.ts
│   ├── types
│   │   ├── images.d.ts
│   │   └── index.d.ts
│   └── widgets
│       ├── Favorite
│       │   ├── Favorite.module.css
│       │   ├── Favorite.props.ts
│       │   └── Favorite.tsx
│       ├── Item
│       │   ├── Item.module.css
│       │   ├── Item.props.ts
│       │   └── Item.tsx
│       └── Navbar
│           ├── Navbar.module.css
│           └── Navbar.tsx
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts

