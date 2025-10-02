# UI-гайд лендинга SMETA360

## Общие принципы дизайна

### 🎨 Цветовая схема (Material-UI)
```css
primary.main: #1976d2     /* Основной синий */
primary.light: #42a5f5    /* Светло-синий */
secondary.main: #dc004e   /* Акцентный красный */
success.main: #2e7d32     /* Зеленый для результатов */
background.paper: #ffffff /* Белый фон */
grey.50: #fafafa         /* Светло-серый фон */
```

### 📝 Типографика
- **Шрифт:** Roboto (системный Material-UI)
- **H1:** 2.5-4.5rem (адаптивно)
- **H2:** 2-3rem (заголовки секций)
- **H4-H6:** 1.25-2rem (подзаголовки)
- **Body1:** 1rem (основной текст)

### 📏 Отступы и размеры

#### Секции
```css
padding-top: 10rem     /* py: 10 */
padding-bottom: 10rem  /* py: 10 */
```

#### Контейнеры
```css
max-width: lg (1200px) /* Основные секции */
max-width: md (960px)  /* CTA, центрированный контент */
```

#### Карточки
```css
padding: 3-4rem        /* Внутренние отступы */
border-radius: 8px     /* Скругления */
hover: translateY(-8px) /* Эффект поднятия */
```

## Компонентная структура

### 📱 Адаптивность
```javascript
// Breakpoints Material-UI
xs: 0px      // Мобильные
sm: 600px    // Планшеты
md: 900px    // Десктопы
lg: 1200px   // Большие экраны
```

### 🔧 Переиспользуемые стили
```css
/* Заголовки секций */
.section-title {
  fontSize: { xs: '2rem', md: '3rem' }
  fontWeight: 'bold'
  color: 'primary.main'
}

/* Карточки с hover */
.hover-card {
  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  '&:hover': {
    transform: 'translateY(-8px)'
    boxShadow: 6
  }
}

/* CTA кнопки */
.cta-button {
  px: 4, py: 1.5
  fontSize: '1.1rem'
  borderRadius: 2
  textTransform: 'none'
}
```

## Правила длины контента

### 📝 Текстовые лимиты
- **Заголовки H1:** до 60 символов
- **Подзаголовки:** до 120 символов
- **Описания карточек:** до 200 символов
- **FAQ ответы:** до 300 символов

### 🖼️ Изображения (плейсхолдеры)
- **OG изображение:** 1200x630px
- **Иконки секций:** Material-UI (2rem размер)
- **Логотип:** Текстовый + иконка (опционально)

## Accessibility (A11y)

### ♿ Обязательные требования
- **Контраст:** WCAG AA (минимум 4.5:1)
- **Фокус-стили:** Видимые outline для навигации с клавиатуры
- **Иерархия заголовков:** H1 → H2 → H3 (без пропусков)
- **Alt-тексты:** Для всех изображений
- **ARIA-labels:** Для интерактивных элементов

### ⌨️ Навигация с клавиатуры
```javascript
// Tab-порядок
Header navigation → Hero CTA → Section anchors → Footer links
```

### 📱 Touch-friendly
```css
/* Минимальные размеры касания */
min-height: 44px  /* Кнопки и ссылки */
min-width: 44px   /* Иконки */
```

## Производительность

### 🚀 Оптимизация изображений
- **Формат:** WebP с fallback на PNG/JPG
- **Размеры:** Retina-готовые (2x)
- **Lazy loading:** Для изображений ниже fold

### 📦 Компонентов
- **Lazy loading:** Все секции через React.lazy
- **Material-UI:** Tree shaking для иконок
- **Fonts:** Roboto через Google Fonts API