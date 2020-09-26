# Создание Material Docs
## Создание проекта
Создадим новый проект с помощью утилиты __create-react-app__. Подробнее об этой утилите [здесь](https://reactjs.org/docs/create-a-new-react-app.html).  
Мы назвали проект _material-docs-example-project_ :).
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
$ npx create-react-app material-docs-example-project
```
## Установка Material Material Docs
После того, как проект создан - надо установить Material Docs.  
С помощью __yarn__:
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
$ yarn add @material-docs/core
```
С помощью __npm__:
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
$ npm install @material-docs/core
```
### Настройка index.html
Material Docs использует шрифт _Roboto_, давайте установим его.
В директории __public__ добавьте в файл ___index.html___ следующее:
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```
Файл ___index.html___ должен выглядеть примерно так:
```{"type": "expansion-code", "themeLight": "darcula", "language": "javascript", "name": "index.html"}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
### Удаление ненужных файлов
Вы можете удалить файлы:
* App.css
* App.test.js
* App.js

Они нам не понадобятся. 
## Создание документации
### Базовая структура
![Basic structure](&&BasicStructureImage)
Для начала, создадим в файле __index.js__ следующую структуру:
##### index.js
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import DocsLayout from "@material-docs/core/components/DocsLayout";
import DocsPages from "@material-docs/core/components/DocsPages";
import DocsMenu from "@material-docs/core/components/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu";

ReactDOM.render(
    <React.StrictMode>
        <DocsLayout
            name={"My documentation"}
            version={"1.0.0-alpha"}
            logo={"http://material-docs.com/static/media/logo.5a237c82.svg"}
            keywords={["my", "test", "documentation"]}
            description={"This is an example documentation for Material Docs framework."}
            author={"Danil Andreev"}
        >
            <DocsMenu>
                <AutoDocsMenu />
            </DocsMenu>
            <DocsPages>
                
            </DocsPages>
        </DocsLayout>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
```
Это базовая структура для приложения Material Docs.  
Мы указали следующие параметры для компонента DocsLayout:
* ___name___ - Название документации.
* ___version___ - версия документации.
* ___logo___ - путь к картинке логотипу.
* ___keywords___ - Ключевые слова страницы для того, чтоб поисковые движки могли проиндексировать её.
* ___description___ - описание страницы для метаданных.
* ___author___ - Имя автора.

Больше информации о компонентах вы можете получить в разделе __Component APIs__ этой документации. К примеру,
вот [__документация компонента__ ```DocsLayout```]().

В компоненте ```DocsMenu``` хранится информация о структуре меню. Компонент ```AutoDocsMenu``` позволяет 
не задумываться о создании меню вручную.

Внутри компонента ```DocsPages``` будут находиться страницы.  

## Создание страницы
![Page image](&&PageAboutMeImage)
Приступим к написанию страницы с информацией. Создадим страницу о себе:
##### index.html
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import DocsLayout from "@material-docs/core/components/DocsLayout";
import DocsPages from "@material-docs/core/components/DocsPages";
import DocsMenu from "@material-docs/core/components/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu";
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import H3 from "@material-docs/core/components/H3";
import Markdown from "@material-docs/core/components/Markdown";
import Image from "@material-docs/core/components/Image";
import Code from "@material-docs/core/components/Code";
import H4 from "@material-docs/core/components/H4";

ReactDOM.render(
    <React.StrictMode>
        <DocsLayout
            name={"My documentation"}
            version={"1.0.0-alpha"}
            logo={"http://material-docs.com/static/media/logo.5a237c82.svg"}
            keywords={["my", "test", "documentation"]}
            description={"This is an example documentation for Material Docs framework."}
            author={"Danil Andreev"}
        >
            <DocsMenu>
                <AutoDocsMenu />
            </DocsMenu>
            <DocsPages>
                <DocsPage
                    name={"Page about me"}
                    searchLabel={"Danil Andreev | About me"}
                    searchDescription={"This is a page about my person."}
                    searchTags={["me", "info", "danil", "andreev", "programmer"]}
                >
                    <H1>My name is Danil Andreev</H1>
                    <H3>This is a page about my history.</H3>
                    <Markdown>Hello, my name is __Danil Andreev__, I am a programmer from Kiev, Ukraine.</Markdown>
                    <Image src={"https://cdnb.artstation.com/p/users/avatars/000/449/963/large/fc6a568b26ecfe1fe02f6dc60da732ae.jpg?1587936613"}/>
                    <H4>I will show you a piece of code</H4>
                    <Code>
                        $ Hello darkness my old friend
                    </Code>
                </DocsPage>
            </DocsPages>
        </DocsLayout>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
```
### Создание страничного компонента
Для того, чтоб было удобнее редактировать страницы мы рекомендуем создавать страничные компоненты и размещать их в 
отдельных файлах. Например, обернем нашу страницу в компонент:
```{"type": "expansion-code", "themeLight": "darcula", "language": "javascript", "name": "FirstPage.js"}
import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import H3 from "@material-docs/core/components/H3";
import Markdown from "@material-docs/core/components/Markdown";
import Image from "@material-docs/core/components/Image";
import H4 from "@material-docs/core/components/H4";
import Code from "@material-docs/core/components/Code";

export default function FirstPage() {
    return (
        <DocsPage
            name={"Page about me"}
            searchLabel={"Danil Andreev | About me"}
            searchDescription={"This is a page about my person."}
            searchTags={["me", "info", "danil", "andreev", "programmer"]}
        >
            <H1>My name is Danil Andreev</H1>
            <H3>This is a page about my history.</H3>
            <Markdown>Hello, my name is __Danil Andreev__, I am a programmer from Kiev, Ukraine.</Markdown>
            <Image src={"https://cdnb.artstation.com/p/users/avatars/000/449/963/large/fc6a568b26ecfe1fe02f6dc60da732ae.jpg?1587936613"}/>
            <H4>I will show you a piece of code</H4>
            <Code>
                $ Hello darkness my old friend
            </Code>
        </DocsPage>

    );
}
```
```{"type": "expansion-code", "themeLight": "darcula", "language": "javascript", "name": "index.js"}
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import DocsLayout from "@material-docs/core/components/DocsLayout";
import DocsPages from "@material-docs/core/components/DocsPages";
import DocsMenu from "@material-docs/core/components/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu";
import FirstPage from "./pages/FirstPage";

ReactDOM.render(
    <React.StrictMode>
        <DocsLayout
            name={"My documentation"}
            version={"1.0.0-alpha"}
            logo={"http://material-docs.com/static/media/logo.5a237c82.svg"}
            keywords={["my", "test", "documentation"]}
            description={"This is an example documentation for Material Docs framework."}
            author={"Danil Andreev"}
        >
            <DocsMenu>
                <AutoDocsMenu />
            </DocsMenu>
            <DocsPages>
                <FirstPage/>
            </DocsPages>
        </DocsLayout>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
```
### Создадим еще одну страницу
```{"type": "expansion-code", "themeLight": "darcula", "language": "javascript", "name": "SecondPage.js"}
import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import Table from "@material-docs/core/components/Table";
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";
import TableHead from "@material-docs/core/components/TableHead";
import TableBody from "@material-docs/core/components/TableBody";
import H3 from "@material-docs/core/components/H3";

export default function SecondPage() {
    return (
        <DocsPage
            name={"Features page"}
            searchLabel={"Features are cool!"}
            searchDescription={"This is a page about features."}
            searchTags={["page", "feature", "amazing"]}
        >
            <H1>This is a feature page</H1>
            <H3 noDivider>Table</H3>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Action</TableCell>
                        <TableCell>Dog</TableCell>
                        <TableCell>Human</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Can speak</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell>Yes</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Can eat</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>Yes</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Can run very fast</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell>Yes</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </DocsPage>
    );
}
```
### Группирование страниц
Для того, чтоб автоматическое меню могло создавать группы страниц, их надо оборачивать в компонент ```PagesGroup```. 
Давайте обернём страницу FirstPage в группу "My Group"
```{"type": "expansion-code", "themeLight": "darcula", "language": "javascript", "name": "index.js"}
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import DocsLayout from "@material-docs/core/components/DocsLayout";
import DocsPages from "@material-docs/core/components/DocsPages";
import DocsMenu from "@material-docs/core/components/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import PagesGroup from "@material-docs/core/components/PagesGroup";

ReactDOM.render(
    <React.StrictMode>
        <DocsLayout
            name={"My documentation"}
            version={"1.0.0-alpha"}
            logo={"http://material-docs.com/static/media/logo.5a237c82.svg"}
            keywords={["my", "test", "documentation"]}
            description={"This is an example documentation for Material Docs framework."}
            author={"Danil Andreev"}
        >
            <DocsMenu>
                <AutoDocsMenu />
            </DocsMenu>
            <DocsPages>
                <PagesGroup name={"My Group"}>
                    <FirstPage/>
                </PagesGroup>
                <SecondPage/>
            </DocsPages>
        </DocsLayout>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
```
### Переадресация между страницами
У компонента ```Link``` есть параметр ___page___, в который передается путь  внутренней странице. 
Так как страница, на которую мы хотим сделать переадресацию находится в группе __My Group__ - путь будет выглядеть так:
```
["My Group", "Page about me"]
```
#### SecondPage.js
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
<Link page={["My Group", "Page about me"]}>Redirect to Page About Me</Link>
```

#### Исходники на GitHub
Вы можете найти этот пример на GitHub [здесь](https://github.com/material-docs/material-docs-example-project/tree/creating-material-docs)