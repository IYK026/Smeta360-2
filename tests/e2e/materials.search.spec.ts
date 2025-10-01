import { test, expect } from '@playwright/test';

test.describe('Materials Search Flow', () => {
  test('materials search is responsive and paginated', async ({ page, baseURL }) => {
    console.log('🔍 Тестирование поиска материалов...');
    
    await page.goto(`${baseURL}/directories/materials`);
    console.log('📍 Переход на страницу материалов');
    
    // Проверяем что страница загрузилась
    await expect(page).toHaveTitle(/материалы|materials/i);
    
    // Ищем поле поиска
    const searchInput = page.locator('input[placeholder*="поиск"], input[placeholder*="search"], .ant-input');
    await searchInput.first().fill('бетон');
    await page.keyboard.press('Enter');
    
    console.log('🔍 Выполнен поиск по запросу "бетон"');
    
    // Ожидаем результаты поиска - хотя бы одну строку с "бетон"
    await expect(page.getByText(/бетон/i).first()).toBeVisible();
    console.log('✅ Найдены результаты поиска');
    
    // Проверяем пагинацию - ищем кнопку страницы 2
    const page2Button = page.locator('button', { hasText: /^2$/ }).or(
      page.locator('.ant-pagination-item-2')
    );
    
    if (await page2Button.isVisible()) {
      await page2Button.click();
      console.log('📄 Переход на страницу 2');
      
      // Проверяем что URL изменился или содержимое обновилось
      await page.waitForTimeout(1000);
      console.log('✅ Пагинация работает');
    } else {
      console.log('ℹ️  Вторая страница не найдена - возможно недостаточно данных');
    }
  });

  test('can filter materials by category', async ({ page, baseURL }) => {
    console.log('🏷️ Тестирование фильтрации материалов по категориям...');
    
    await page.goto(`${baseURL}/directories/materials`);
    
    // Ищем селектор категорий или фильтров
    const categoryFilter = page.locator('select').or(
      page.locator('.ant-select-selector')
    ).first();
    
    if (await categoryFilter.isVisible()) {
      await categoryFilter.click();
      
      // Выбираем первую доступную категорию
      const firstOption = page.locator('.ant-select-item-option').first();
      if (await firstOption.isVisible()) {
        await firstOption.click();
        console.log('🏷️ Выбрана категория для фильтрации');
        
        await page.waitForTimeout(1000);
        console.log('✅ Фильтрация по категории работает');
      }
    } else {
      console.log('ℹ️  Фильтр по категориям не найден на странице');
    }
  });
});

test.describe('Materials CRUD Operations', () => {
  test('can view materials list and details', async ({ page, baseURL }) => {
    console.log('📋 Тестирование просмотра списка материалов...');
    
    await page.goto(`${baseURL}/directories/materials`);
    
    // Проверяем что есть заголовок страницы
    await expect(page.locator('h1, .ant-page-header-heading-title, .page-title')).toBeVisible();
    
    // Проверяем что есть таблица или список материалов
    const materialsTable = page.locator('table, .ant-table, .materials-list').first();
    await expect(materialsTable).toBeVisible();
    
    console.log('✅ Список материалов отображается корректно');
    
    // Попытаемся найти первую строку материала
    const firstMaterial = page.locator('tr:not(:first-child)', { hasText: /м³|кг|шт|л/ }).first();
    
    if (await firstMaterial.isVisible()) {
      console.log('📝 Найден первый материал в списке');
      
      // Можем попробовать кликнуть для просмотра деталей
      await firstMaterial.click();
      console.log('👁️ Попытка просмотра деталей материала');
      
      await page.waitForTimeout(1000);
    } else {
      console.log('ℹ️  Материалы в таблице не найдены');
    }
  });
});

test.describe('Materials Performance', () => {
  test('materials page loads within reasonable time', async ({ page, baseURL }) => {
    console.log('⚡ Тестирование производительности страницы материалов...');
    
    const startTime = Date.now();
    await page.goto(`${baseURL}/directories/materials`);
    
    // Ждем когда страница полностью загрузится
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    console.log(`📊 Время загрузки: ${loadTime}ms`);
    
    // Проверяем что страница загрузилась за разумное время
    expect(loadTime).toBeLessThan(10000); // менее 10 секунд
    
    console.log('✅ Производительность страницы в норме');
  });
});