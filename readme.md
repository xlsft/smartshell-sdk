<br/>
<br/>
<div align="middle">
    <picture>
        <source media="(prefers-color-scheme: dark)"  width="400px" srcset="https://i.imgur.com/bFqB46L.png">
        <img alt="SmartShell SDK Logo" width="400px" src="https://i.imgur.com/2grxTqT.png">
    </picture>
</div>

#

<h4 align="center">
    <strong>Smartshell SDK</strong> - Source Development Kit for ERP management platform<br>for cyber sports arenas and computer clubs  
</h4>
<br/>
<p align="right">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/CEBivQF.png">
        <img alt="SmartShell SDK Logo" src="https://i.imgur.com/TC31MjL.png">
    </picture>
</p>

<h2 id="install"><strong>🔗 Useful Links</strong></h2>

* <a href="#license">License</a>
* <a href="#install">Installation</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax">GraphQL: Syntax Highlighting for VS Code</a>

<h2 id="license"><strong>💾 Installation</strong></h2>

```
# Node
npx jsr add @xlsoftware/smartshell-sdk

// main.ts
import { Shell } from "@xlsoftware/smartshell-sdk";

# Deno
deno add @xlsoftware/smartshell-sdk

// main.ts
import { Shell } from "@xlsoftware/smartshell-sdk";
# OR
import { Shell } from "https://deno.land/x/smartshell_sdk/mod.ts"
```

<h2 id="license"><strong>📄 Quickstart</strong></h2>

```ts
    const shell = await new Shell({
        credentials: { login: '79998887766', password: 'password123' }
    })
```

<h2 id="license"><strong>📄 API coverage</strong></h2>

The project started quite a long time ago is moving to a new code base and JSR registry

Due to the addition of new methods and the possibility of optimization the SDK project has received a second life and will continue to develop.

Status: **0.1% coverage**

Now in priority robust base and modularity

<h2 id="license"><strong>📜 License</strong></h2>

[MIT](https://github.com/xl-soft/smartshell-sdk/blob/main/LICENSE)

<br/>
<div align="center">
  <a href="https://t.me/xlsoftware" target="_blank" rel="noreferrer">
    <picture>
        <source media="(prefers-color-scheme: dark)" width="200px" srcset="https://i.imgur.com/RKKVCpQ.png">
        <img alt="SmartShell SDK Logo" width="200px" src="https://i.imgur.com/iR5safJ.png">
    </picture>
  </a>
</div>
