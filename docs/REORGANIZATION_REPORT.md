# 🗂️ Реорганизация файловой структуры проекта

## 📅 Дата: 1 октября 2025

### 🎯 Цель реорганизации

Упорядочить файловую структуру проекта для улучшения навигации и организации документации, данных и логов.

---

## 📁 Новая структура папок

### `/docs/` - Документация
- **`/docs/api/`** - API документация (5 файлов)
- **`/docs/reports/`** - Технические отчеты (15+ файлов)  
- **`/docs/`** - Общая документация (7 файлов)

### `/data/` - Данные
- **`/data/sql/`** - SQL скрипты и тестовые данные (4 файла)
- **`/data/csv/`** - CSV файлы с каталогами (3 файла)

### `/logs/` - Логи
- **`/logs/`** - Все логи системы (6 файлов)

---

## 🔄 Перемещенные файлы

### API Документация (→ `/docs/api/`)
- `API.md`
- `CUSTOMER_ESTIMATES_API.md` 
- `DATABASE_API_INVENTORY.md`
- `OBJECT_PARAMETERS_API.md`
- `OBJECT_PARAMETERS_CUSTOMER_ESTIMATES_API.md`

### Технические отчеты (→ `/docs/reports/`)
- `REPORT_SMETA360_20250928.md` 
- `PROJECT_ANALYSIS_REPORT_2025_09_30.md`
- `CUSTOMER_ESTIMATES_IMPLEMENTATION_REPORT.md`
- `DATABASE_INTEGRATION_REPORT.md`
- `FINAL_OPTIMIZATION_REPORT.md`
- `FINAL_TESTING_REPORT.md`
- `STEP1_METRICS_BASELINE_REPORT.md`
- `STEP2_DATABASE_OPTIMIZATION_REPORT.md`
- `STEP3_BACKEND_ACCELERATION_REPORT.md`
- `STEP4_ADVANCED_CACHING_REPORT.md`
- `STEP5_FRONTEND_OPTIMIZATION_REPORT.md`
- `STEP_T1_TESTING_SETUP_REPORT.md`
- `TESTING_T3_REPORT.md`
- `T4_E2E_REPORT.md`
- `T4_FIX_REPORT.md`

### Общая документация (→ `/docs/`)
- `DEPLOYMENT.md`
- `DEVELOPMENT.md`
- `SECURITY_CRITICAL.md`
- `SECRETS_SETUP.md`
- `SERVER_COMMANDS.md`
- `CODE_OF_CONDUCT.md`
- `MATERIAL_PREVIEW_UPDATE.md`

### SQL и данные (→ `/data/sql/`)
- `create_works_ref_database.sql`
- `insert_test_data.sql`
- `insert_test_data_final.sql`
- `insert_test_data_fixed.sql`
- `insert_test_data.js`

### CSV данные (→ `/data/csv/`)
- `BDM (1).csv`
- `work_materials.strict.cleaned.csv`
- `works_ref_export.csv`

### Логи (→ `/logs/`)
- `api.log`
- `server.log`
- `server-backend.log`
- `server-full.log`
- `preview.log`
- `nohup.out`

---

## ✅ Выполненные изменения

### 1. Создание новых папок
```bash
mkdir -p docs/{api,reports} data/{sql,csv} logs/
```

### 2. Перемещение файлов
```bash
# API документация
mv API.md CUSTOMER_ESTIMATES_API.md DATABASE_API_INVENTORY.md OBJECT_PARAMETERS_API.md OBJECT_PARAMETERS_CUSTOMER_ESTIMATES_API.md docs/api/

# Отчеты
mv *REPORT*.md docs/reports/

# Общая документация  
mv DEPLOYMENT.md DEVELOPMENT.md SECURITY_CRITICAL.md SECRETS_SETUP.md SERVER_COMMANDS.md CODE_OF_CONDUCT.md MATERIAL_PREVIEW_UPDATE.md docs/

# SQL и данные
mv *.sql insert_test_data.js data/sql/

# CSV файлы
mv *.csv data/csv/

# Логи
mv *.log nohup.out logs/
```

### 3. Создание навигационных файлов
- **`/docs/README.md`** - Полная навигация по всей документации с категоризацией

### 4. Обновление конфигурационных файлов
- **`.gitignore`** - Добавлены правила для новых папок с логами
- **`README.md`** - Обновлена структура проекта с новыми папками

---

## 🎯 Результат реорганизации

### До реорганизации:
```
📂 / (корень) - 70+ файлов вперемешку
```

### После реорганизации:
```
📂 / (корень) - 15 основных файлов
📂 /docs/ - 33 файла документации, структурированно
📂 /data/ - 8 файлов данных, разделены по типам
📂 /logs/ - 6 файлов логов, изолированы
```

### Преимущества новой структуры:
✅ **Чистый корень проекта** - только основные файлы (package.json, README.md, конфиги)  
✅ **Логическая группировка** - документация, данные и логи разделены  
✅ **Простая навигация** - README.md файлы в каждой категории  
✅ **Безопасность** - логи изолированы и добавлены в .gitignore  
✅ **Масштабируемость** - структура готова к росту проекта  

---

## 🚀 Использование новой структуры

### Для разработчиков:
```bash
# Документация API
ls docs/api/

# Технические отчеты  
ls docs/reports/

# Руководства
ls docs/
```

### Для администраторов:
```bash
# Логи системы
tail -f logs/server.log

# Данные для БД
ls data/sql/

# CSV каталоги
ls data/csv/
```

---

*Реорганизация выполнена: 1 октября 2025*  
*Все файлы сохранены, структура оптимизирована для разработки*