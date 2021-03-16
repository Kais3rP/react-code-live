(this["webpackJsonpreact-code-live-example"]=this["webpackJsonpreact-code-live-example"]||[]).push([[0],{16:function(t,n,e){t.exports={custom:"styles_custom__jdqIi",container:"styles_container__OptiR"}},50:function(t,n,e){t.exports=e(520)},51:function(t,n,e){},520:function(t,n,e){"use strict";e.r(n);e(51);var r=e(1),i=e.n(r),s=e(37),a=e.n(s),o=e(38),c=e.n(o),p=e(7),_=(e(56),e(57),e(58),e(59),e(49)),j=e(44),S=e.n(j);e(517);function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function E(t,n,e){return(E=y()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&l(i,e.prototype),i}).apply(null,arguments)}function h(t,n){if(null==t)return{};var e,r,i={},s=Object.keys(t);for(r=0;r<s.length;r++)e=s[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}function g(t){var n=t.code,e=t.onValueChange,r=t.language,s=h(t,["code","onValueChange","language"]);return i.a.createElement(c.a,u({value:n,onValueChange:e||function(){},highlight:function(t){return Object(p.highlight)(t,"js"===r?p.languages.js:"css"===r?p.languages.css:p.languages.js)},padding:30},s))}var x={assign:S.a},d={objectAssign:"_poly.assign",transforms:{dangerousForOf:!0,dangerousTaggedTemplateString:!0}};function m(t){var n=t.error,e=h(t,["error"]);return i.a.createElement("div",u({style:{position:"absolute",width:"100%",zIndex:2,top:0,left:0,overflowWrap:"breakWord",padding:"10px",background:"tomato",fontWeight:"normal",fontFamily:"inherit",fontSize:"14px"}},e),i.a.createElement("h4",null,n))}var C=function(t,n){return function(n){var e,r;function s(t){var e;return(e=n.call(this,t)||this).state={hasError:!1},e}r=n,(e=s).prototype=Object.create(r.prototype),e.prototype.constructor=e,l(e,r);var a=s.prototype;return a.componentDidCatch=function(t){console.log(t)},s.getDerivedStateFromError=function(t){return{hasError:!0,msg:t}},a.render=function(){return"function"!==typeof t||this.state.hasError?i.a.createElement(m,{error:this.state.msg}):i.a.createElement(t,null)},s}(r.Component)};function f(t,n,e){return t.slice(0,e)+n+t.slice(e,t.length+1)}var P=function(t){var n=t.code,e=void 0===n?"":n,r=t.scope,s=void 0===r?{}:r;try{/^\s*class\s*/.test(e),function(t){/render[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\(\)/.test(t)}(e),function(t){/(useState|useEffect|useRef|useCallback|useMemo)/.test(t)}(e);var a=function(t){var n=function(t){var n=/^class[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;return n.exec(t)&&n.exec(t)[0]}(t=t.trim().replace(/^(const|let|var).*=.*?(?=\()/,""))||function(t){var n=/^class[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?(?=(const|let|var))/;return n.exec(t)&&n.exec(t)[0]}(t)||function(t){console.log(t);var n=/^function[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;return n.exec(t)&&n.exec(t)[0]}(t)||function(t){var n=/^function[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?(?=(const|let|var))/;return n.exec(t)&&n.exec(t)[0]}(t)||function(t){var n=/^\([\s\S]*\)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*=>[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;return n.exec(t)&&n.exec(t)[0]}(t)||function(t){var n=/^\([\s\S]*\)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*=>[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?(?=(const|let|var))/;return n.exec(t)&&n.exec(t)[0]}(t),e=t.replace(n,"");return console.log("FUNCTION",n,"VARIABLES",e),function(t){return Object(_.a)(t,d).code}(t="const {useState, useEffect, useRef, useMemo, useCallback, Component } = React;\n  "+e+"\n  return ("+n+")").trim()}(e);return C(function(t,n){var e=Object.keys(n),r=e.map((function(t){return n[t]}));return E(Function,["_poly","React"].concat(e,[t])).apply(void 0,[x,i.a].concat(r))}(a,s))}catch(o){return console.log(o.toString()),function(){return i.a.createElement(m,{error:o.toString()})}}};function v(t,n){void 0===n&&(n={});var e=Object(r.useState)(t&&"string"===typeof t?t:'function Test(){\n        return "hello"\n      }'),i=e[0],s=e[1],a=Object(r.useState)(null),o=a[0],c=a[1],p=Object(r.useState)(!1),_=p[0],j=p[1],S=Object(r.useState)(null),u=S[0],l=S[1],y=Object(r.useState)(0),E=y[0],h=y[1],g=Object(r.useRef)(null),x=Object(r.useRef)();return Object(r.useEffect)((function(){!_&&i&&function(t){var e=P({code:t,scope:n});c((function(){return e}))}(i)}),[_]),Object(r.useEffect)((function(){x.current&&(x.current.selectionEnd=E)}),[E]),{code:i,handleJsChange:function(t){x.current=t.target;var n=t.target.value;window.clearTimeout(g.current),j(!0),g.current=setTimeout((function(){j(!1)}),1e3);var e=t.target.selectionStart;switch(h(e),u){case"{":s(f(n,"}",e));break;case"(":s(f(n,")",e));break;case"[":s(f(n,"]",e));break;default:s(n)}},handleJsKeyDown:function(t){var n=t.key;l(n)},Preview:o}}function B(t){var n=t.initialCode,e=t.initialCss,s=t.scope,a=t.textAreaClassName,o=t.getJsCode,c=t.getCssCode,p=t.render,_=t.children,j=h(t,["initialCode","initialCss","scope","textAreaClassName","getJsCode","getCssCode","render","children"]),S=v(n,s),l=S.code,y=S.Preview,E=S.handleJsChange,x=S.handleJsKeyDown,d=function(t){var n=Object(r.useState)(t||""),e=n[0],i=n[1];return{css:e,handleCssChange:function(t){return i(t)}}}(e),m=d.css,C=d.handleCssChange;return i.a.createElement("div",u({},j,{style:{position:"relative"}}),i.a.createElement("style",{scoped:!0,key:m}," ",m),y&&i.a.createElement(y,null),i.a.createElement(g,{language:"js",code:l,placeholder:"WRITE REACT CODE HERE",onValueChange:o,onChange:E,onKeyDown:x,className:a}),i.a.createElement(g,{language:"css",code:m,placeholder:"WRITE CSS CODE HERE",onValueChange:function(t){C(t),c&&c(t)},className:a}),"function"===typeof _&&_(l,m),p&&p(l,m))}B.defaultProps={initialCode:'\nfunction Test () { \n\n  const [state, setState] = useState(1)\n\n  useEffect(()=>{  \n    console.log("INSIDE EFFECT")       \n  },[state])\n\n  const handler = () => setState( state => state*2)\n  \n  return (\n        <>\n          <MyBtn onClick={handler}>\n            STATE: {state}\n          </MyBtn> \n          <MyBtn2 onClick={handler}>\n            STATE: {state}\n          </MyBtn2> \n        </>\n        )\n}\n\nconst MyBtn = styled.button`\n            background-color: palegreen;\n            cursor: pointer;\n            &:active {\n              transform: scale(0.9);\n            }\n          `\n\nconst MyBtn2 = styled.button`\n            background-color: paleblue;\n            cursor: pointer;\n            &:active {\n              transform: scale(0.9);\n            }\n          `\n',initialCss:""};var b=B,O=e(45),F=e(16),k=e.n(F),G="\n.__custom__live__react__ {\nwidth:150px;\nheight:150px;\nbackground:tomato;\ncolor:#FFF;\ndisplay:flex;\nborder-radius: 50%;\njustify-content:center;\nalign-items:center;\npadding:5px;\n}\n\n.__custom__live__react__ > h5 {\ntext-align: center;\n}\n",A=[{js:'function Test () {\n  return (\n    <div className="__custom__live__react__">\n      <h5>Functional Component\n    </div>\n    )\n}',css:G},{js:'const Test = () => {\n  return (\n    <div className="__custom__live__react__">\n      <h5>Arrow Function Component!</h5>\n    </div>\n    )\n}',css:G},{js:'class Test extends Component {\n  render(){\n    return (\n      <div className="__custom__live__react__">\n        <h5>Class Component!</h5>\n      </div>\n      )\n  }\n}',css:G},{js:"const WithStyled = () => {\nreturn (\n  <StyledDiv>\n    <h5>Styled Components</h5>\n  </StyledDiv>\n)\n}\n\nconst StyledDiv = styled.div`\nwidth:150px;\nheight:150px;\nbackground:tomato;\ncolor:#FFF;\ndisplay:flex;\nborder-radius: 50%;\njustify-content:center;\nalign-items:center;\npadding:5px;\n& > h5 {\n  text-align: center;\n}\n`\n",css:G,scope:{styled:!0}}],M=function(){return i.a.createElement("div",null,A.map((function(t){var n;return i.a.createElement(b,{className:k.a.container,initialCode:t.js,initialCss:t.css,textAreaClassName:k.a.custom,scope:{styled:(null===(n=t.scope)||void 0===n?void 0:n.styled)&&O.a}})})))};a.a.render(i.a.createElement(M,null),document.getElementById("root"))},88:function(t,n,e){var r={"./Binary_Property/ASCII.js":89,"./Binary_Property/ASCII_Hex_Digit.js":90,"./Binary_Property/Alphabetic.js":91,"./Binary_Property/Any.js":92,"./Binary_Property/Assigned.js":93,"./Binary_Property/Bidi_Control.js":94,"./Binary_Property/Bidi_Mirrored.js":95,"./Binary_Property/Case_Ignorable.js":96,"./Binary_Property/Cased.js":97,"./Binary_Property/Changes_When_Casefolded.js":98,"./Binary_Property/Changes_When_Casemapped.js":99,"./Binary_Property/Changes_When_Lowercased.js":100,"./Binary_Property/Changes_When_NFKC_Casefolded.js":101,"./Binary_Property/Changes_When_Titlecased.js":102,"./Binary_Property/Changes_When_Uppercased.js":103,"./Binary_Property/Dash.js":104,"./Binary_Property/Default_Ignorable_Code_Point.js":105,"./Binary_Property/Deprecated.js":106,"./Binary_Property/Diacritic.js":107,"./Binary_Property/Emoji.js":108,"./Binary_Property/Emoji_Component.js":109,"./Binary_Property/Emoji_Modifier.js":110,"./Binary_Property/Emoji_Modifier_Base.js":111,"./Binary_Property/Emoji_Presentation.js":112,"./Binary_Property/Extended_Pictographic.js":113,"./Binary_Property/Extender.js":114,"./Binary_Property/Grapheme_Base.js":115,"./Binary_Property/Grapheme_Extend.js":116,"./Binary_Property/Hex_Digit.js":117,"./Binary_Property/IDS_Binary_Operator.js":118,"./Binary_Property/IDS_Trinary_Operator.js":119,"./Binary_Property/ID_Continue.js":120,"./Binary_Property/ID_Start.js":121,"./Binary_Property/Ideographic.js":122,"./Binary_Property/Join_Control.js":123,"./Binary_Property/Logical_Order_Exception.js":124,"./Binary_Property/Lowercase.js":125,"./Binary_Property/Math.js":126,"./Binary_Property/Noncharacter_Code_Point.js":127,"./Binary_Property/Pattern_Syntax.js":128,"./Binary_Property/Pattern_White_Space.js":129,"./Binary_Property/Quotation_Mark.js":130,"./Binary_Property/Radical.js":131,"./Binary_Property/Regional_Indicator.js":132,"./Binary_Property/Sentence_Terminal.js":133,"./Binary_Property/Soft_Dotted.js":134,"./Binary_Property/Terminal_Punctuation.js":135,"./Binary_Property/Unified_Ideograph.js":136,"./Binary_Property/Uppercase.js":137,"./Binary_Property/Variation_Selector.js":138,"./Binary_Property/White_Space.js":139,"./Binary_Property/XID_Continue.js":140,"./Binary_Property/XID_Start.js":141,"./General_Category/Cased_Letter.js":142,"./General_Category/Close_Punctuation.js":143,"./General_Category/Connector_Punctuation.js":144,"./General_Category/Control.js":145,"./General_Category/Currency_Symbol.js":146,"./General_Category/Dash_Punctuation.js":147,"./General_Category/Decimal_Number.js":148,"./General_Category/Enclosing_Mark.js":149,"./General_Category/Final_Punctuation.js":150,"./General_Category/Format.js":151,"./General_Category/Initial_Punctuation.js":152,"./General_Category/Letter.js":153,"./General_Category/Letter_Number.js":154,"./General_Category/Line_Separator.js":155,"./General_Category/Lowercase_Letter.js":156,"./General_Category/Mark.js":157,"./General_Category/Math_Symbol.js":158,"./General_Category/Modifier_Letter.js":159,"./General_Category/Modifier_Symbol.js":160,"./General_Category/Nonspacing_Mark.js":161,"./General_Category/Number.js":162,"./General_Category/Open_Punctuation.js":163,"./General_Category/Other.js":164,"./General_Category/Other_Letter.js":165,"./General_Category/Other_Number.js":166,"./General_Category/Other_Punctuation.js":167,"./General_Category/Other_Symbol.js":168,"./General_Category/Paragraph_Separator.js":169,"./General_Category/Private_Use.js":170,"./General_Category/Punctuation.js":171,"./General_Category/Separator.js":172,"./General_Category/Space_Separator.js":173,"./General_Category/Spacing_Mark.js":174,"./General_Category/Surrogate.js":175,"./General_Category/Symbol.js":176,"./General_Category/Titlecase_Letter.js":177,"./General_Category/Unassigned.js":178,"./General_Category/Uppercase_Letter.js":179,"./Script/Adlam.js":180,"./Script/Ahom.js":181,"./Script/Anatolian_Hieroglyphs.js":182,"./Script/Arabic.js":183,"./Script/Armenian.js":184,"./Script/Avestan.js":185,"./Script/Balinese.js":186,"./Script/Bamum.js":187,"./Script/Bassa_Vah.js":188,"./Script/Batak.js":189,"./Script/Bengali.js":190,"./Script/Bhaiksuki.js":191,"./Script/Bopomofo.js":192,"./Script/Brahmi.js":193,"./Script/Braille.js":194,"./Script/Buginese.js":195,"./Script/Buhid.js":196,"./Script/Canadian_Aboriginal.js":197,"./Script/Carian.js":198,"./Script/Caucasian_Albanian.js":199,"./Script/Chakma.js":200,"./Script/Cham.js":201,"./Script/Cherokee.js":202,"./Script/Chorasmian.js":203,"./Script/Common.js":204,"./Script/Coptic.js":205,"./Script/Cuneiform.js":206,"./Script/Cypriot.js":207,"./Script/Cyrillic.js":208,"./Script/Deseret.js":209,"./Script/Devanagari.js":210,"./Script/Dives_Akuru.js":211,"./Script/Dogra.js":212,"./Script/Duployan.js":213,"./Script/Egyptian_Hieroglyphs.js":214,"./Script/Elbasan.js":215,"./Script/Elymaic.js":216,"./Script/Ethiopic.js":217,"./Script/Georgian.js":218,"./Script/Glagolitic.js":219,"./Script/Gothic.js":220,"./Script/Grantha.js":221,"./Script/Greek.js":222,"./Script/Gujarati.js":223,"./Script/Gunjala_Gondi.js":224,"./Script/Gurmukhi.js":225,"./Script/Han.js":226,"./Script/Hangul.js":227,"./Script/Hanifi_Rohingya.js":228,"./Script/Hanunoo.js":229,"./Script/Hatran.js":230,"./Script/Hebrew.js":231,"./Script/Hiragana.js":232,"./Script/Imperial_Aramaic.js":233,"./Script/Inherited.js":234,"./Script/Inscriptional_Pahlavi.js":235,"./Script/Inscriptional_Parthian.js":236,"./Script/Javanese.js":237,"./Script/Kaithi.js":238,"./Script/Kannada.js":239,"./Script/Katakana.js":240,"./Script/Kayah_Li.js":241,"./Script/Kharoshthi.js":242,"./Script/Khitan_Small_Script.js":243,"./Script/Khmer.js":244,"./Script/Khojki.js":245,"./Script/Khudawadi.js":246,"./Script/Lao.js":247,"./Script/Latin.js":248,"./Script/Lepcha.js":249,"./Script/Limbu.js":250,"./Script/Linear_A.js":251,"./Script/Linear_B.js":252,"./Script/Lisu.js":253,"./Script/Lycian.js":254,"./Script/Lydian.js":255,"./Script/Mahajani.js":256,"./Script/Makasar.js":257,"./Script/Malayalam.js":258,"./Script/Mandaic.js":259,"./Script/Manichaean.js":260,"./Script/Marchen.js":261,"./Script/Masaram_Gondi.js":262,"./Script/Medefaidrin.js":263,"./Script/Meetei_Mayek.js":264,"./Script/Mende_Kikakui.js":265,"./Script/Meroitic_Cursive.js":266,"./Script/Meroitic_Hieroglyphs.js":267,"./Script/Miao.js":268,"./Script/Modi.js":269,"./Script/Mongolian.js":270,"./Script/Mro.js":271,"./Script/Multani.js":272,"./Script/Myanmar.js":273,"./Script/Nabataean.js":274,"./Script/Nandinagari.js":275,"./Script/New_Tai_Lue.js":276,"./Script/Newa.js":277,"./Script/Nko.js":278,"./Script/Nushu.js":279,"./Script/Nyiakeng_Puachue_Hmong.js":280,"./Script/Ogham.js":281,"./Script/Ol_Chiki.js":282,"./Script/Old_Hungarian.js":283,"./Script/Old_Italic.js":284,"./Script/Old_North_Arabian.js":285,"./Script/Old_Permic.js":286,"./Script/Old_Persian.js":287,"./Script/Old_Sogdian.js":288,"./Script/Old_South_Arabian.js":289,"./Script/Old_Turkic.js":290,"./Script/Oriya.js":291,"./Script/Osage.js":292,"./Script/Osmanya.js":293,"./Script/Pahawh_Hmong.js":294,"./Script/Palmyrene.js":295,"./Script/Pau_Cin_Hau.js":296,"./Script/Phags_Pa.js":297,"./Script/Phoenician.js":298,"./Script/Psalter_Pahlavi.js":299,"./Script/Rejang.js":300,"./Script/Runic.js":301,"./Script/Samaritan.js":302,"./Script/Saurashtra.js":303,"./Script/Sharada.js":304,"./Script/Shavian.js":305,"./Script/Siddham.js":306,"./Script/SignWriting.js":307,"./Script/Sinhala.js":308,"./Script/Sogdian.js":309,"./Script/Sora_Sompeng.js":310,"./Script/Soyombo.js":311,"./Script/Sundanese.js":312,"./Script/Syloti_Nagri.js":313,"./Script/Syriac.js":314,"./Script/Tagalog.js":315,"./Script/Tagbanwa.js":316,"./Script/Tai_Le.js":317,"./Script/Tai_Tham.js":318,"./Script/Tai_Viet.js":319,"./Script/Takri.js":320,"./Script/Tamil.js":321,"./Script/Tangut.js":322,"./Script/Telugu.js":323,"./Script/Thaana.js":324,"./Script/Thai.js":325,"./Script/Tibetan.js":326,"./Script/Tifinagh.js":327,"./Script/Tirhuta.js":328,"./Script/Ugaritic.js":329,"./Script/Vai.js":330,"./Script/Wancho.js":331,"./Script/Warang_Citi.js":332,"./Script/Yezidi.js":333,"./Script/Yi.js":334,"./Script/Zanabazar_Square.js":335,"./Script_Extensions/Adlam.js":336,"./Script_Extensions/Ahom.js":337,"./Script_Extensions/Anatolian_Hieroglyphs.js":338,"./Script_Extensions/Arabic.js":339,"./Script_Extensions/Armenian.js":340,"./Script_Extensions/Avestan.js":341,"./Script_Extensions/Balinese.js":342,"./Script_Extensions/Bamum.js":343,"./Script_Extensions/Bassa_Vah.js":344,"./Script_Extensions/Batak.js":345,"./Script_Extensions/Bengali.js":346,"./Script_Extensions/Bhaiksuki.js":347,"./Script_Extensions/Bopomofo.js":348,"./Script_Extensions/Brahmi.js":349,"./Script_Extensions/Braille.js":350,"./Script_Extensions/Buginese.js":351,"./Script_Extensions/Buhid.js":352,"./Script_Extensions/Canadian_Aboriginal.js":353,"./Script_Extensions/Carian.js":354,"./Script_Extensions/Caucasian_Albanian.js":355,"./Script_Extensions/Chakma.js":356,"./Script_Extensions/Cham.js":357,"./Script_Extensions/Cherokee.js":358,"./Script_Extensions/Chorasmian.js":359,"./Script_Extensions/Common.js":360,"./Script_Extensions/Coptic.js":361,"./Script_Extensions/Cuneiform.js":362,"./Script_Extensions/Cypriot.js":363,"./Script_Extensions/Cyrillic.js":364,"./Script_Extensions/Deseret.js":365,"./Script_Extensions/Devanagari.js":366,"./Script_Extensions/Dives_Akuru.js":367,"./Script_Extensions/Dogra.js":368,"./Script_Extensions/Duployan.js":369,"./Script_Extensions/Egyptian_Hieroglyphs.js":370,"./Script_Extensions/Elbasan.js":371,"./Script_Extensions/Elymaic.js":372,"./Script_Extensions/Ethiopic.js":373,"./Script_Extensions/Georgian.js":374,"./Script_Extensions/Glagolitic.js":375,"./Script_Extensions/Gothic.js":376,"./Script_Extensions/Grantha.js":377,"./Script_Extensions/Greek.js":378,"./Script_Extensions/Gujarati.js":379,"./Script_Extensions/Gunjala_Gondi.js":380,"./Script_Extensions/Gurmukhi.js":381,"./Script_Extensions/Han.js":382,"./Script_Extensions/Hangul.js":383,"./Script_Extensions/Hanifi_Rohingya.js":384,"./Script_Extensions/Hanunoo.js":385,"./Script_Extensions/Hatran.js":386,"./Script_Extensions/Hebrew.js":387,"./Script_Extensions/Hiragana.js":388,"./Script_Extensions/Imperial_Aramaic.js":389,"./Script_Extensions/Inherited.js":390,"./Script_Extensions/Inscriptional_Pahlavi.js":391,"./Script_Extensions/Inscriptional_Parthian.js":392,"./Script_Extensions/Javanese.js":393,"./Script_Extensions/Kaithi.js":394,"./Script_Extensions/Kannada.js":395,"./Script_Extensions/Katakana.js":396,"./Script_Extensions/Kayah_Li.js":397,"./Script_Extensions/Kharoshthi.js":398,"./Script_Extensions/Khitan_Small_Script.js":399,"./Script_Extensions/Khmer.js":400,"./Script_Extensions/Khojki.js":401,"./Script_Extensions/Khudawadi.js":402,"./Script_Extensions/Lao.js":403,"./Script_Extensions/Latin.js":404,"./Script_Extensions/Lepcha.js":405,"./Script_Extensions/Limbu.js":406,"./Script_Extensions/Linear_A.js":407,"./Script_Extensions/Linear_B.js":408,"./Script_Extensions/Lisu.js":409,"./Script_Extensions/Lycian.js":410,"./Script_Extensions/Lydian.js":411,"./Script_Extensions/Mahajani.js":412,"./Script_Extensions/Makasar.js":413,"./Script_Extensions/Malayalam.js":414,"./Script_Extensions/Mandaic.js":415,"./Script_Extensions/Manichaean.js":416,"./Script_Extensions/Marchen.js":417,"./Script_Extensions/Masaram_Gondi.js":418,"./Script_Extensions/Medefaidrin.js":419,"./Script_Extensions/Meetei_Mayek.js":420,"./Script_Extensions/Mende_Kikakui.js":421,"./Script_Extensions/Meroitic_Cursive.js":422,"./Script_Extensions/Meroitic_Hieroglyphs.js":423,"./Script_Extensions/Miao.js":424,"./Script_Extensions/Modi.js":425,"./Script_Extensions/Mongolian.js":426,"./Script_Extensions/Mro.js":427,"./Script_Extensions/Multani.js":428,"./Script_Extensions/Myanmar.js":429,"./Script_Extensions/Nabataean.js":430,"./Script_Extensions/Nandinagari.js":431,"./Script_Extensions/New_Tai_Lue.js":432,"./Script_Extensions/Newa.js":433,"./Script_Extensions/Nko.js":434,"./Script_Extensions/Nushu.js":435,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":436,"./Script_Extensions/Ogham.js":437,"./Script_Extensions/Ol_Chiki.js":438,"./Script_Extensions/Old_Hungarian.js":439,"./Script_Extensions/Old_Italic.js":440,"./Script_Extensions/Old_North_Arabian.js":441,"./Script_Extensions/Old_Permic.js":442,"./Script_Extensions/Old_Persian.js":443,"./Script_Extensions/Old_Sogdian.js":444,"./Script_Extensions/Old_South_Arabian.js":445,"./Script_Extensions/Old_Turkic.js":446,"./Script_Extensions/Oriya.js":447,"./Script_Extensions/Osage.js":448,"./Script_Extensions/Osmanya.js":449,"./Script_Extensions/Pahawh_Hmong.js":450,"./Script_Extensions/Palmyrene.js":451,"./Script_Extensions/Pau_Cin_Hau.js":452,"./Script_Extensions/Phags_Pa.js":453,"./Script_Extensions/Phoenician.js":454,"./Script_Extensions/Psalter_Pahlavi.js":455,"./Script_Extensions/Rejang.js":456,"./Script_Extensions/Runic.js":457,"./Script_Extensions/Samaritan.js":458,"./Script_Extensions/Saurashtra.js":459,"./Script_Extensions/Sharada.js":460,"./Script_Extensions/Shavian.js":461,"./Script_Extensions/Siddham.js":462,"./Script_Extensions/SignWriting.js":463,"./Script_Extensions/Sinhala.js":464,"./Script_Extensions/Sogdian.js":465,"./Script_Extensions/Sora_Sompeng.js":466,"./Script_Extensions/Soyombo.js":467,"./Script_Extensions/Sundanese.js":468,"./Script_Extensions/Syloti_Nagri.js":469,"./Script_Extensions/Syriac.js":470,"./Script_Extensions/Tagalog.js":471,"./Script_Extensions/Tagbanwa.js":472,"./Script_Extensions/Tai_Le.js":473,"./Script_Extensions/Tai_Tham.js":474,"./Script_Extensions/Tai_Viet.js":475,"./Script_Extensions/Takri.js":476,"./Script_Extensions/Tamil.js":477,"./Script_Extensions/Tangut.js":478,"./Script_Extensions/Telugu.js":479,"./Script_Extensions/Thaana.js":480,"./Script_Extensions/Thai.js":481,"./Script_Extensions/Tibetan.js":482,"./Script_Extensions/Tifinagh.js":483,"./Script_Extensions/Tirhuta.js":484,"./Script_Extensions/Ugaritic.js":485,"./Script_Extensions/Vai.js":486,"./Script_Extensions/Wancho.js":487,"./Script_Extensions/Warang_Citi.js":488,"./Script_Extensions/Yezidi.js":489,"./Script_Extensions/Yi.js":490,"./Script_Extensions/Zanabazar_Square.js":491,"./index.js":492,"./unicode-version.js":493};function i(t){var n=s(t);return e(n)}function s(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=s,t.exports=i,i.id=88}},[[50,1,2]]]);
//# sourceMappingURL=main.903f3edc.chunk.js.map