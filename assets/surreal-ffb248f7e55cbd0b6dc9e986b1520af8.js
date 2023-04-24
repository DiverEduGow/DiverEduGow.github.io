app-masonry-area,app-modal-front,div.code-toolbar {
    position: relative
}

div.code-toolbar>.toolbar {
    position: absolute;
    z-index: 10;
    top: .3em;
    right: .2em;
    transition: opacity .3s ease-in-out;
    opacity: 0
}

div.code-toolbar:focus-within>.toolbar,div.code-toolbar:hover>.toolbar {
    opacity: 1
}

div.code-toolbar>.toolbar>.toolbar-item {
    display: inline-block
}

div.code-toolbar>.toolbar>.toolbar-item>a {
    cursor: pointer
}

div.code-toolbar>.toolbar>.toolbar-item>button {
    border: 0;
    font: inherit;
    line-height: normal;
    overflow: visible;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none
}

app-masonry-view,app-modal-cover {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll
}

div.code-toolbar>.toolbar>.toolbar-item>a,div.code-toolbar>.toolbar>.toolbar-item>button,div.code-toolbar>.toolbar>.toolbar-item>span {
    color: #bbb;
    font-size: .8em;
    padding: 0 .5em;
    background: #f5f2f0;
    background: rgba(224,224,224,.2);
    box-shadow: 0 2px 0 0 rgba(0,0,0,.2);
    border-radius: .5em
}

div.code-toolbar>.toolbar>.toolbar-item>a:focus,div.code-toolbar>.toolbar>.toolbar-item>a:hover,div.code-toolbar>.toolbar>.toolbar-item>button:focus,div.code-toolbar>.toolbar>.toolbar-item>button:hover,div.code-toolbar>.toolbar>.toolbar-item>span:focus,div.code-toolbar>.toolbar>.toolbar-item>span:hover {
    color: inherit;
    text-decoration: none
}

code[class*=language-],pre[class*=language-] {
    color: #f8f8f2;
    background: 0 0;
    text-shadow: 0 1px rgba(0,0,0,.3);
    font-family: Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none
}

pre[class*=language-] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: .3em
}

:not(pre)>code[class*=language-],pre[class*=language-] {
    background: #272822
}

:not(pre)>code[class*=language-] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal
}

app-label,app-label[closeable] close,app-label[key]:before {
    font-size: inherit;
    padding: 0 8px
}

break,clear {
    border: 0;
    margin: 0;
    padding: 0;
    display: block
}

.token.cdata,.token.comment,.token.doctype,.token.prolog {
    color: #8292a2
}

.token.punctuation {
    color: #f8f8f2
}

.token.namespace {
    opacity: .7
}

.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag {
    color: #f92672
}

.token.boolean,.token.number {
    color: #ae81ff
}

.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string {
    color: #a6e22e
}

.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable {
    color: #f8f8f2
}

.token.atrule,.token.attr-value,.token.class-name,.token.function {
    color: #e6db74
}

.token.keyword {
    color: #66d9ef
}

.token.important,.token.regex {
    color: #fd971f
}

.token.bold,.token.important {
    font-weight: 700
}

.token.italic {
    font-style: italic
}

.token.entity {
    cursor: help
}

:root {
    --system-font-app: ui-sans-serif,system-ui,-apple-system,'Inter','Helvetica Neue','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
    --system-font-mono: ui-monospace,'SF Mono','SFMono-Regular','DejaVu Sans Mono','Menlo','Consolas',monospace;
    --system-font-serif: ui-serif,'New York','NewYork-Regular','Noto Serif','Droid Serif','Times New Roman','Times',serif;
    --system-font: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Ubuntu','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'
}

*,:after,:before {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box
}

break {
    height: 8px
}

clear {
    clear: both
}

clear:after {
    height: 0;
    clear: both;
    content: ".";
    display: block;
    line-height: 0;
    visibility: hidden
}

a,a i,a i:hover,a span,a span:hover,a:hover {
    cursor: pointer;
    text-decoration: none
}

[draggable=true] {
    -webkit-user-drag: element;
    -moz-user-drag: element;
    -ms-user-drag: element;
    -o-user-drag: element;
    user-drag: element
}

[contenteditable],[contenteditable] *,[selectable],[selectable] *,code,code *,input,input *,pre,pre *,textarea,textarea * {
    cursor: text;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    -o-user-select: text;
    user-select: text
}

app-label {
    flex: 1 0 auto;
    color: #fff;
    cursor: default;
    overflow: hidden;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    line-height: inherit;
    vertical-align: middle;
    justify-content: center;
    background-color: #BBB
}

app-label:empty {
    display: none
}

app-label[curved] {
    border-radius: 25px
}

app-label[curved]:before {
    border-radius: 25px 0 0 25px
}

app-label[curved] close {
    border-radius: 0 25px 25px 0
}

app-label[key] {
    padding-left: 0
}

app-label[key]:before {
    flex: 1 0 auto;
    color: #fff;
    margin-right: 8px;
    content: attr(key);
    display: inline-block;
    background-color: #333
}

app-label[closeable] {
    padding-right: 0
}

app-label[closeable] close {
    flex: 1 0 auto;
    color: #4a4a4a;
    cursor: pointer;
    margin-left: 8px;
    display: inline-block;
    background-color: #f5f5f5
}

app-label[closeable] close:hover {
    background-color: #efefef
}

app-label[type=white] {
    background-color: #fff;
    color: #666
}

app-label[type=pale] {
    background-color: #F0F0F0;
    color: #666
}

app-label[type=grey] {
    background-color: #E0E0E0;
    color: #000
}

app-label[type=azure] {
    background-color: #1c14ef
}

app-label[type=black] {
    background-color: #444
}

app-label[type=blue] {
    background-color: #00BFFF
}

app-label[type=chartreuse] {
    background-color: #70ff77
}

app-label[type=green] {
    background-color: #03C759
}

app-label[type=light] {
    background-color: #CCC
}

app-label[type=lime] {
    background-color: #77ef15
}

app-label[type=magenta] {
    background-color: #FA0266
}

app-label[type=orange] {
    background-color: #ffba0c
}

app-label[type=pink] {
    background-color: #ffc6fa
}

app-label[type=purple] {
    background-color: #601b75
}

app-label[type=red] {
    background-color: #ff463d
}

app-label[type=royal] {
    background-color: #427af4
}

app-label[type=seafoam] {
    background-color: #42f49e
}

app-label[type=strawberry] {
    background-color: #ff5656
}

app-label[type=turquoise] {
    background-color: #42f4df
}

app-label[type=yellow] {
    background-color: #f4eb41
}

app-masonry {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute
}

app-masonry-view {
    position: absolute;
    will-change: scroll-position
}

app-masonry-area {
    width: 100%;
    display: block;
    will-change: width,height
}

app-masonry-item {
    display: block;
    overflow: hidden;
    will-change: top,left,width,height
}

app-modal-cover {
    display: block;
    position: fixed;
    z-index: 2147483645;
    background-color: rgba(0,0,0,.5)
}

app-modal-front {
    display: block
}

app-tooltip {
    opacity: 0;
    color: #fff;
    display: block;
    font-size: 14px;
    position: fixed;
    visibility: hidden;
    z-index: 2147483645;
    pointer-events: none;
    padding: 5px 8px;
    font-family: var(--system-font);
    background-color: rgba(0,0,0,.75);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    -webkit-transition: opacity .1s ease-in 0s;
    -moz-transition: opacity .1s ease-in 0s;
    -ms-transition: opacity .1s ease-in 0s;
    -o-transition: opacity .1s ease-in 0s;
    transition: opacity .1s ease-in 0s
}

app-tooltip[visible] {
    opacity: 1;
    visibility: visible
}

app-tooltip arrow {
    width: 0;
    height: 0;
    position: absolute;
    border: 5px solid transparent
}

app-tooltip[side='n'] arrow {
    bottom: -5px;
    left: 50%;
    margin-left: -5px;
    border-bottom: none;
    border-top: 5px solid rgba(0,0,0,.75)
}

app-tooltip[side='s'] arrow {
    top: -5px;
    left: 50%;
    margin-left: -5px;
    border-top: none;
    border-bottom: 5px solid rgba(0,0,0,.75)
}

app-tooltip[side='e'] arrow {
    top: 50%;
    left: -5px;
    margin-top: -5px;
    border-left: none;
    border-right: 5px solid rgba(0,0,0,.75)
}

app-tooltip[side='w'] arrow {
    top: 50%;
    right: -5px;
    margin-top: -5px;
    border-right: none;
    border-left: 5px solid rgba(0,0,0,.75)
}

app-tooltip[side=ne] arrow {
    left: 10px;
    bottom: -5px;
    border-bottom: none;
    border-top: 5px solid rgba(0,0,0,.75)
}

app-tooltip[side=nw] arrow {
    right: 10px;
    bottom: -5px;
    border-bottom: none;
    border-top: 5px solid rgba(0,0,0,.75)
}

app-tooltip[side=se] arrow {
    top: -5px;
    left: 10px;
    border-top: none;
    border-bottom: 5px solid rgba(0,0,0,.75)
}

app-tooltip[side=sw] arrow {
    top: -5px;
    right: 10px;
    border-top: none;
    border-bottom: 5px solid rgba(0,0,0,.75)
}
