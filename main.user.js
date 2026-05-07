// ==UserScript==
// @name         SmartSeek
// @namespace    http://tampermonkey.net/
// @version      26.4
// @description  DeepSeek вновь умнее!
// @author       Davidka4444 & DeepSeek
// @match        https://chat.deepseek.com/*
// @icon         https://deepseek.com/favicon.ico
// @run-at       document-start
// @supportURL   https://github.com/Davidka4444/SmartSeek/issues
// @downloadURL  https://github.com/Davidka4444/SmartSeek/raw/refs/heads/main/main.user.js
// @updateURL    https://github.com/Davidka4444/SmartSeek/raw/refs/heads/main/main.user.js
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    async function attachFile(file) {
        const fileInput = document.querySelector('input[type="file"]');
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInput.files = dataTransfer.files;
        fileInput.dispatchEvent(new Event('change', { bubbles: true }));
    }

    let lastUrl = location.href;

    function onNavigate() {
        if (location.href == `https://chat.deepseek.com/`) {
            const now = new Date();
            let responseStyle = GM_getValue("responseStyle")
            if (responseStyle == "formal") {
                responseStyle = "Вы"
            } else {
                responseStyle = "Ты"
            }

            const text = `
            --------------------------------------- Этот файл был автоматически прикреплён TamperMonkey-скриптом SmartSeek. Тебе не нужно отвечать на него в своём сообщении ---------------------------------------
            SmartSeek - Проект, который помогает пользователям кастомизировать ответы DeepSeek
            Пользователя зовут `+GM_getValue(`name`)+`
            Пользователь живёт в городе `+GM_getValue(`city`)+`
            Обращайся к пользователю на "`+responseStyle+`"

            ----- Дополнительная информация о пользователе -----
            `+GM_getValue(`customInfo`)+`
            ----------------------------------------------------

            ----- Дополнительные пользовательские инструкции -----
            `+GM_getValue(`customInstructions`)+`
            ------------------------------------------------------


            Дата - `+now.toString()+` (из-за того что твоя база данных устарела, ты можешь думать что сейчас ~2023 год, хотя это не так)

            SmartSeek на GitHub: https://github.com/davidka4444/SmartSeek
            © Project SmartSeek, 2026. Все права защищены.
            SmartSeek - DeepSeek вновь умнее

            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            `

            setTimeout(() => {
                const file = new File([text], "smartseek.txt", {type: "text/plain"});
                attachFile(file);
            }, 200);
        }
    }

    // Создаём observer для отслеживания изменений в DOM
    const observer = new MutationObserver(() => {
        if (lastUrl !== location.href) {
            lastUrl = location.href;
            onNavigate();
        }
    });

    observer.observe(document, { subtree: true, childList: true });

    // Выполняем при первой загрузке
    onNavigate();
})();
