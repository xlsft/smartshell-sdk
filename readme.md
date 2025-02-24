<br/>
<br/>
<div align="middle">
    <picture>
        <source media="(prefers-color-scheme: dark)"  width="400px" srcset="https://i.imgur.com/iWwMeW6.png">
        <img alt="SmartShell SDK Logo" width="400px" src="https://i.imgur.com/o1b5on9.png">
    </picture>
</div>

#
 
<h4 align="center">
    <strong>Smartshell SDK</strong> - Современное, полностью типизированное, динамически генерирующееся,<br>постоянно актуальное SDK для взаимодействия с публичным API ERP системы управления компьютерными клубами SmartShell  
</h4>
<br/>
<p align="right">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/CEBivQF.png">
        <img alt="SmartShell SDK Logo" src="https://i.imgur.com/TC31MjL.png">
    </picture>
</p>

<h2><strong>🔗 Содержание</strong></h2>

* <a href="#start">Быстрый старт</a>
* <a href="#status">Статус проекта</a>
* <a href="#developers">Разработчикам</a>
* <a href="#license">Лицензия</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax">GraphQL: Syntax Highlighting for VS Code</a>

<h2 id="start"><strong>💾 Быстрый старт</strong></h2>

Установите пакет `smartshell-sdk` с помощью вашего пакетного менеджера. Для хранения пакета используется `JSR` - реестр пакетов доступный во всех пакетных менеджерах экосистемы JS и TS

```
# PNPM
pnpm dlx jsr add @xlsoftware/smartshell-sdk

# Deno
deno add jsr:@xlsoftware/smartshell-sdk

# NPM
npx jsr add @xlsoftware/smartshell-sdk

# Bun
bunx jsr add @xlsoftware/smartshell-sdk

# Yarn
yarn dlx jsr add @xlsoftware/smartshell-sdk
```

Импортируйте пакет в свой проект

```ts
import { Shell } from "@xlsoftware/smartshell-sdk";
// ..or with jsr deno import
import { Shell } from "jsr:@xlsoftware/smartshell-sdk";
```

Создайте инстанс класса `Shell`. Можно указать данные для авторизации, изменить хост (scope) api, или сделать инстанс анонимным для запроса публичной информации без нужды в авторизации

```ts
// Shell instance
const shell = await new Shell({
    credentials: { login: '79998887766', password: 'password123' }
})

// Anonymous instance
const shell = await new Shell({
    anonymous: true
})

// Client-sided login
const client = await new Shell({
    host: 'mobile-auth'
    credentials: { login: '79998887766', password: 'password123' }
})
```

🎉 Отлично! При инициализации нового инстанса автоматически происходит авторизация и все доступные вам операции можно вызывать через SDK без дополнительной настройки!


<h2 id="status"><strong>🟢 Статус проекта</strong></h2>

Проект находится в beta стадии, хоть и можно считать последние релизы стабильными, нужно будет проверять на ошибки в некоторых edge кейсах. Подробная документация с примерами в процессе разработки. Генерация запросов к API полностью функционирует и создает валидные модули. Особенности работы бека SmartShell нужно проверять. Надеемся команда SmartShell заинтересуется проектом и не останется в стороне). Связь с разработчиком: https://t.me/xlsoftware

<h2 id="license"><strong>💻 Разработчикам</strong></h2>

Для обновления API SDK используйте следующую команду

```
deno task update
```

Она автоматически сгенерирует новые модули, обновит старые, обновит типизацию под новую схему, создаст референсы и документацию для каждого модуля или типа и обновит индексацию модулей. После исполнения скрипта апи полностью готово к использованию.


<h2 id="license"><strong>📜 Лицензия</strong></h2>

[MIT](https://github.com/xlsft/smartshell-sdk/blob/main/LICENSE)

<br/>

SmartShell SDK - свободный проект с открытым исходным кодом и не имеет отношения к SmartShell.
Торговая марка "SmartShell" принадлежит ООО "Смарт Шелл", ОГРН: 1217800044330, ИНН: 7801696720

<div align="center">
  <a href="https://t.me/xlsoftware" target="_blank" rel="noreferrer">
    <picture>
        <source media="(prefers-color-scheme: dark)" width="200px" srcset="https://i.imgur.com/PO4nXai.png">
        <img alt="SmartShell SDK Logo" width="200px" src="https://i.imgur.com/HV5RENN.png">
    </picture>
  </a>
</div>
