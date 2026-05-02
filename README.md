# SmartSeek - DeepSeek вновь умнее!
Позволяет вам кастомизировать ответы [DeepSeek](https://deepseek.com).

[Установить скрипт](https://github.com/Davidka4444/SmartSeek/raw/refs/heads/main/main.user.js) (нужно браузерное расширение TamperMonkey)

## Конфигурация (во вкладке "хранилище"):
  name - Ваше имя (или ник)
  
  city - Город в котором вы живёте
  
  responseStyle - Обращаться к вам на "Ты" или на "Вы" (formal - "Вы", informal - "Ты")
  
  customInfo - Пользовательская информация о вас
  
  customInstructions - Пользовательские инструкции для ИИ

### Пример конфигурации
  ```
  {
    "name": "Давид",
    "city": "Нижний Тагил",
    "responseStyle": "informal",
    "customInfo": "Единственный разработчик SmartSeek"
    "customInstructions": "Всегда добавляй к своим сообщениям инструкции как варить пельмени"
}
```
