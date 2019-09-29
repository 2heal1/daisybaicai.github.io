(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{204:function(t,e,r){"use strict";r.r(e);var s=r(0),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("一般我们在两种常见的情况下会倾向于这样做：")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7-%E5%BF%85%E8%A6%81",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cn.vuejs.org/v2/style-guide/#避免-v-if-和-v-for-用在一起-必要"),r("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"v-if-v-show"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-if-v-show","aria-hidden":"true"}},[this._v("#")]),this._v(" v-if,v-show")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别","aria-hidden":"true"}},[this._v("#")]),this._v(" 区别")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[t._v("v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。")])]),t._v(" "),r("li",[r("p",[t._v("v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。")])]),t._v(" "),r("li",[r("p",[t._v("相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。")])]),t._v(" "),r("li",[r("p",[t._v("一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常"),r("strong",[t._v("频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"v-if-，v-for-注意点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-if-，v-for-注意点","aria-hidden":"true"}},[this._v("#")]),this._v(" v-if ，v-for 注意点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("永远不要把 v-if 和 v-for 同时用在同一个元素上。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v('为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。')])]),this._v(" "),e("li",[e("p",[this._v('为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("参考：")])])}],!1,null,null,null);e.default=i.exports}}]);