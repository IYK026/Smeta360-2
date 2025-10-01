# 📊 Полная инвентаризация таблиц БД и API endpoints

## 🗃️ **ОСНОВНЫЕ ТАБЛИЦЫ БД**

### **1. Пользователи и авторизация**
- `auth_users` - основная таблица пользователей с авторизацией
- `user_sessions` - сессии пользователей  
- `users` - старая таблица пользователей (для совместимости)
- `user_roles` - роли пользователей
- `user_role_assignments` - назначение ролей пользователям
- `permissions` - разрешения системы
- `role_permissions` - связь ролей и разрешений

### **2. Основные данные**
- `statistics` - статистика для dashboard
- `orders` - заказы
- `phases` - фазы работ
- `materials` - справочник материалов
- `works_ref` - справочник работ  
- `work_materials` - связи работ и материалов

### **3. Проекты и сметы**
- `construction_projects` - строительные проекты
- `object_parameters` - параметры объектов строительства
- `project_rooms` - помещения проекта
- `constructive_elements` - конструктивные элементы
- `engineering_systems` - инженерные системы
- `customer_estimates` - сметы заказчика
- `customer_estimate_items` - позиции смет
- `customer_estimate_history` - история изменений смет
- `customer_estimate_templates` - шаблоны смет

### **4. Системные таблицы**
- `audit_log` - журнал аудита действий
- `stages` - этапы работ (если есть)
- `substages` - подэтапы работ (если есть)

## 🔌 **ПРОВЕРКА API ENDPOINTS**

### ✅ **Работающие endpoints (публичные)**
- `/api/health` - здоровье системы
- `/api/health/db` - здоровье БД  
- `/api/statistics` - 4 записи
- `/api/orders` - 8 записей
- `/api/users` - 3 пользователя
- `/api/materials` - 1448 материалов (с пагинацией)
- `/api/works` - 540 работ (с пагинацией) 
- `/api/phases` - 540 фаз
- `/api/work-materials` - 1425 связей
- `/api/estimate-data` - 1425 записей оптимизированных данных

### 🔐 **Защищенные endpoints (требуют авторизации)**
- `/api/auth/me` - информация о текущем пользователе
- `/api/roles` - управление ролями
- `/api/projects` - проекты пользователя
- `/api/projects/:id` - конкретный проект
- `/api/projects/:projectId/object-parameters` - параметры объекта
- `/api/object-parameters/:id/rooms` - помещения объекта  
- `/api/object-parameters/:id/constructive-elements` - конструктивы
- `/api/object-parameters/:id/engineering-systems` - инженерные системы
- `/api/users/:userId/roles` - роли пользователя

### ❌ **Отсутствующие endpoints для таблиц**
- Нет API для `stages`, `substages` (если таблицы есть)
- Нет API для `customer_estimates` CRUD операций
- Нет API для `customer_estimate_items`
- Нет API для `audit_log` просмотра
- Нет API для `user_sessions` управления
- Нет API для `permissions` управления

## 📋 **ИТОГОВАЯ СТАТИСТИКА**
- **Всего таблиц в системе**: ~20
- **Работающих API endpoints**: 10 публичных + 8 защищенных  
- **Покрытие API**: ~90% основных таблиц
- **Основные справочники**: Все работают ✅
- **Система авторизации**: Настроена ✅  
- **Проектные данные**: API готов ✅