(this["webpackJsonpreact-code-live-example"]=this["webpackJsonpreact-code-live-example"]||[]).push([[0],{100:function(t,n,e){var i={"./Binary_Property/ASCII.js":101,"./Binary_Property/ASCII_Hex_Digit.js":102,"./Binary_Property/Alphabetic.js":103,"./Binary_Property/Any.js":104,"./Binary_Property/Assigned.js":105,"./Binary_Property/Bidi_Control.js":106,"./Binary_Property/Bidi_Mirrored.js":107,"./Binary_Property/Case_Ignorable.js":108,"./Binary_Property/Cased.js":109,"./Binary_Property/Changes_When_Casefolded.js":110,"./Binary_Property/Changes_When_Casemapped.js":111,"./Binary_Property/Changes_When_Lowercased.js":112,"./Binary_Property/Changes_When_NFKC_Casefolded.js":113,"./Binary_Property/Changes_When_Titlecased.js":114,"./Binary_Property/Changes_When_Uppercased.js":115,"./Binary_Property/Dash.js":116,"./Binary_Property/Default_Ignorable_Code_Point.js":117,"./Binary_Property/Deprecated.js":118,"./Binary_Property/Diacritic.js":119,"./Binary_Property/Emoji.js":120,"./Binary_Property/Emoji_Component.js":121,"./Binary_Property/Emoji_Modifier.js":122,"./Binary_Property/Emoji_Modifier_Base.js":123,"./Binary_Property/Emoji_Presentation.js":124,"./Binary_Property/Extended_Pictographic.js":125,"./Binary_Property/Extender.js":126,"./Binary_Property/Grapheme_Base.js":127,"./Binary_Property/Grapheme_Extend.js":128,"./Binary_Property/Hex_Digit.js":129,"./Binary_Property/IDS_Binary_Operator.js":130,"./Binary_Property/IDS_Trinary_Operator.js":131,"./Binary_Property/ID_Continue.js":132,"./Binary_Property/ID_Start.js":133,"./Binary_Property/Ideographic.js":134,"./Binary_Property/Join_Control.js":135,"./Binary_Property/Logical_Order_Exception.js":136,"./Binary_Property/Lowercase.js":137,"./Binary_Property/Math.js":138,"./Binary_Property/Noncharacter_Code_Point.js":139,"./Binary_Property/Pattern_Syntax.js":140,"./Binary_Property/Pattern_White_Space.js":141,"./Binary_Property/Quotation_Mark.js":142,"./Binary_Property/Radical.js":143,"./Binary_Property/Regional_Indicator.js":144,"./Binary_Property/Sentence_Terminal.js":145,"./Binary_Property/Soft_Dotted.js":146,"./Binary_Property/Terminal_Punctuation.js":147,"./Binary_Property/Unified_Ideograph.js":148,"./Binary_Property/Uppercase.js":149,"./Binary_Property/Variation_Selector.js":150,"./Binary_Property/White_Space.js":151,"./Binary_Property/XID_Continue.js":152,"./Binary_Property/XID_Start.js":153,"./General_Category/Cased_Letter.js":154,"./General_Category/Close_Punctuation.js":155,"./General_Category/Connector_Punctuation.js":156,"./General_Category/Control.js":157,"./General_Category/Currency_Symbol.js":158,"./General_Category/Dash_Punctuation.js":159,"./General_Category/Decimal_Number.js":160,"./General_Category/Enclosing_Mark.js":161,"./General_Category/Final_Punctuation.js":162,"./General_Category/Format.js":163,"./General_Category/Initial_Punctuation.js":164,"./General_Category/Letter.js":165,"./General_Category/Letter_Number.js":166,"./General_Category/Line_Separator.js":167,"./General_Category/Lowercase_Letter.js":168,"./General_Category/Mark.js":169,"./General_Category/Math_Symbol.js":170,"./General_Category/Modifier_Letter.js":171,"./General_Category/Modifier_Symbol.js":172,"./General_Category/Nonspacing_Mark.js":173,"./General_Category/Number.js":174,"./General_Category/Open_Punctuation.js":175,"./General_Category/Other.js":176,"./General_Category/Other_Letter.js":177,"./General_Category/Other_Number.js":178,"./General_Category/Other_Punctuation.js":179,"./General_Category/Other_Symbol.js":180,"./General_Category/Paragraph_Separator.js":181,"./General_Category/Private_Use.js":182,"./General_Category/Punctuation.js":183,"./General_Category/Separator.js":184,"./General_Category/Space_Separator.js":185,"./General_Category/Spacing_Mark.js":186,"./General_Category/Surrogate.js":187,"./General_Category/Symbol.js":188,"./General_Category/Titlecase_Letter.js":189,"./General_Category/Unassigned.js":190,"./General_Category/Uppercase_Letter.js":191,"./Script/Adlam.js":192,"./Script/Ahom.js":193,"./Script/Anatolian_Hieroglyphs.js":194,"./Script/Arabic.js":195,"./Script/Armenian.js":196,"./Script/Avestan.js":197,"./Script/Balinese.js":198,"./Script/Bamum.js":199,"./Script/Bassa_Vah.js":200,"./Script/Batak.js":201,"./Script/Bengali.js":202,"./Script/Bhaiksuki.js":203,"./Script/Bopomofo.js":204,"./Script/Brahmi.js":205,"./Script/Braille.js":206,"./Script/Buginese.js":207,"./Script/Buhid.js":208,"./Script/Canadian_Aboriginal.js":209,"./Script/Carian.js":210,"./Script/Caucasian_Albanian.js":211,"./Script/Chakma.js":212,"./Script/Cham.js":213,"./Script/Cherokee.js":214,"./Script/Chorasmian.js":215,"./Script/Common.js":216,"./Script/Coptic.js":217,"./Script/Cuneiform.js":218,"./Script/Cypriot.js":219,"./Script/Cyrillic.js":220,"./Script/Deseret.js":221,"./Script/Devanagari.js":222,"./Script/Dives_Akuru.js":223,"./Script/Dogra.js":224,"./Script/Duployan.js":225,"./Script/Egyptian_Hieroglyphs.js":226,"./Script/Elbasan.js":227,"./Script/Elymaic.js":228,"./Script/Ethiopic.js":229,"./Script/Georgian.js":230,"./Script/Glagolitic.js":231,"./Script/Gothic.js":232,"./Script/Grantha.js":233,"./Script/Greek.js":234,"./Script/Gujarati.js":235,"./Script/Gunjala_Gondi.js":236,"./Script/Gurmukhi.js":237,"./Script/Han.js":238,"./Script/Hangul.js":239,"./Script/Hanifi_Rohingya.js":240,"./Script/Hanunoo.js":241,"./Script/Hatran.js":242,"./Script/Hebrew.js":243,"./Script/Hiragana.js":244,"./Script/Imperial_Aramaic.js":245,"./Script/Inherited.js":246,"./Script/Inscriptional_Pahlavi.js":247,"./Script/Inscriptional_Parthian.js":248,"./Script/Javanese.js":249,"./Script/Kaithi.js":250,"./Script/Kannada.js":251,"./Script/Katakana.js":252,"./Script/Kayah_Li.js":253,"./Script/Kharoshthi.js":254,"./Script/Khitan_Small_Script.js":255,"./Script/Khmer.js":256,"./Script/Khojki.js":257,"./Script/Khudawadi.js":258,"./Script/Lao.js":259,"./Script/Latin.js":260,"./Script/Lepcha.js":261,"./Script/Limbu.js":262,"./Script/Linear_A.js":263,"./Script/Linear_B.js":264,"./Script/Lisu.js":265,"./Script/Lycian.js":266,"./Script/Lydian.js":267,"./Script/Mahajani.js":268,"./Script/Makasar.js":269,"./Script/Malayalam.js":270,"./Script/Mandaic.js":271,"./Script/Manichaean.js":272,"./Script/Marchen.js":273,"./Script/Masaram_Gondi.js":274,"./Script/Medefaidrin.js":275,"./Script/Meetei_Mayek.js":276,"./Script/Mende_Kikakui.js":277,"./Script/Meroitic_Cursive.js":278,"./Script/Meroitic_Hieroglyphs.js":279,"./Script/Miao.js":280,"./Script/Modi.js":281,"./Script/Mongolian.js":282,"./Script/Mro.js":283,"./Script/Multani.js":284,"./Script/Myanmar.js":285,"./Script/Nabataean.js":286,"./Script/Nandinagari.js":287,"./Script/New_Tai_Lue.js":288,"./Script/Newa.js":289,"./Script/Nko.js":290,"./Script/Nushu.js":291,"./Script/Nyiakeng_Puachue_Hmong.js":292,"./Script/Ogham.js":293,"./Script/Ol_Chiki.js":294,"./Script/Old_Hungarian.js":295,"./Script/Old_Italic.js":296,"./Script/Old_North_Arabian.js":297,"./Script/Old_Permic.js":298,"./Script/Old_Persian.js":299,"./Script/Old_Sogdian.js":300,"./Script/Old_South_Arabian.js":301,"./Script/Old_Turkic.js":302,"./Script/Oriya.js":303,"./Script/Osage.js":304,"./Script/Osmanya.js":305,"./Script/Pahawh_Hmong.js":306,"./Script/Palmyrene.js":307,"./Script/Pau_Cin_Hau.js":308,"./Script/Phags_Pa.js":309,"./Script/Phoenician.js":310,"./Script/Psalter_Pahlavi.js":311,"./Script/Rejang.js":312,"./Script/Runic.js":313,"./Script/Samaritan.js":314,"./Script/Saurashtra.js":315,"./Script/Sharada.js":316,"./Script/Shavian.js":317,"./Script/Siddham.js":318,"./Script/SignWriting.js":319,"./Script/Sinhala.js":320,"./Script/Sogdian.js":321,"./Script/Sora_Sompeng.js":322,"./Script/Soyombo.js":323,"./Script/Sundanese.js":324,"./Script/Syloti_Nagri.js":325,"./Script/Syriac.js":326,"./Script/Tagalog.js":327,"./Script/Tagbanwa.js":328,"./Script/Tai_Le.js":329,"./Script/Tai_Tham.js":330,"./Script/Tai_Viet.js":331,"./Script/Takri.js":332,"./Script/Tamil.js":333,"./Script/Tangut.js":334,"./Script/Telugu.js":335,"./Script/Thaana.js":336,"./Script/Thai.js":337,"./Script/Tibetan.js":338,"./Script/Tifinagh.js":339,"./Script/Tirhuta.js":340,"./Script/Ugaritic.js":341,"./Script/Vai.js":342,"./Script/Wancho.js":343,"./Script/Warang_Citi.js":344,"./Script/Yezidi.js":345,"./Script/Yi.js":346,"./Script/Zanabazar_Square.js":347,"./Script_Extensions/Adlam.js":348,"./Script_Extensions/Ahom.js":349,"./Script_Extensions/Anatolian_Hieroglyphs.js":350,"./Script_Extensions/Arabic.js":351,"./Script_Extensions/Armenian.js":352,"./Script_Extensions/Avestan.js":353,"./Script_Extensions/Balinese.js":354,"./Script_Extensions/Bamum.js":355,"./Script_Extensions/Bassa_Vah.js":356,"./Script_Extensions/Batak.js":357,"./Script_Extensions/Bengali.js":358,"./Script_Extensions/Bhaiksuki.js":359,"./Script_Extensions/Bopomofo.js":360,"./Script_Extensions/Brahmi.js":361,"./Script_Extensions/Braille.js":362,"./Script_Extensions/Buginese.js":363,"./Script_Extensions/Buhid.js":364,"./Script_Extensions/Canadian_Aboriginal.js":365,"./Script_Extensions/Carian.js":366,"./Script_Extensions/Caucasian_Albanian.js":367,"./Script_Extensions/Chakma.js":368,"./Script_Extensions/Cham.js":369,"./Script_Extensions/Cherokee.js":370,"./Script_Extensions/Chorasmian.js":371,"./Script_Extensions/Common.js":372,"./Script_Extensions/Coptic.js":373,"./Script_Extensions/Cuneiform.js":374,"./Script_Extensions/Cypriot.js":375,"./Script_Extensions/Cyrillic.js":376,"./Script_Extensions/Deseret.js":377,"./Script_Extensions/Devanagari.js":378,"./Script_Extensions/Dives_Akuru.js":379,"./Script_Extensions/Dogra.js":380,"./Script_Extensions/Duployan.js":381,"./Script_Extensions/Egyptian_Hieroglyphs.js":382,"./Script_Extensions/Elbasan.js":383,"./Script_Extensions/Elymaic.js":384,"./Script_Extensions/Ethiopic.js":385,"./Script_Extensions/Georgian.js":386,"./Script_Extensions/Glagolitic.js":387,"./Script_Extensions/Gothic.js":388,"./Script_Extensions/Grantha.js":389,"./Script_Extensions/Greek.js":390,"./Script_Extensions/Gujarati.js":391,"./Script_Extensions/Gunjala_Gondi.js":392,"./Script_Extensions/Gurmukhi.js":393,"./Script_Extensions/Han.js":394,"./Script_Extensions/Hangul.js":395,"./Script_Extensions/Hanifi_Rohingya.js":396,"./Script_Extensions/Hanunoo.js":397,"./Script_Extensions/Hatran.js":398,"./Script_Extensions/Hebrew.js":399,"./Script_Extensions/Hiragana.js":400,"./Script_Extensions/Imperial_Aramaic.js":401,"./Script_Extensions/Inherited.js":402,"./Script_Extensions/Inscriptional_Pahlavi.js":403,"./Script_Extensions/Inscriptional_Parthian.js":404,"./Script_Extensions/Javanese.js":405,"./Script_Extensions/Kaithi.js":406,"./Script_Extensions/Kannada.js":407,"./Script_Extensions/Katakana.js":408,"./Script_Extensions/Kayah_Li.js":409,"./Script_Extensions/Kharoshthi.js":410,"./Script_Extensions/Khitan_Small_Script.js":411,"./Script_Extensions/Khmer.js":412,"./Script_Extensions/Khojki.js":413,"./Script_Extensions/Khudawadi.js":414,"./Script_Extensions/Lao.js":415,"./Script_Extensions/Latin.js":416,"./Script_Extensions/Lepcha.js":417,"./Script_Extensions/Limbu.js":418,"./Script_Extensions/Linear_A.js":419,"./Script_Extensions/Linear_B.js":420,"./Script_Extensions/Lisu.js":421,"./Script_Extensions/Lycian.js":422,"./Script_Extensions/Lydian.js":423,"./Script_Extensions/Mahajani.js":424,"./Script_Extensions/Makasar.js":425,"./Script_Extensions/Malayalam.js":426,"./Script_Extensions/Mandaic.js":427,"./Script_Extensions/Manichaean.js":428,"./Script_Extensions/Marchen.js":429,"./Script_Extensions/Masaram_Gondi.js":430,"./Script_Extensions/Medefaidrin.js":431,"./Script_Extensions/Meetei_Mayek.js":432,"./Script_Extensions/Mende_Kikakui.js":433,"./Script_Extensions/Meroitic_Cursive.js":434,"./Script_Extensions/Meroitic_Hieroglyphs.js":435,"./Script_Extensions/Miao.js":436,"./Script_Extensions/Modi.js":437,"./Script_Extensions/Mongolian.js":438,"./Script_Extensions/Mro.js":439,"./Script_Extensions/Multani.js":440,"./Script_Extensions/Myanmar.js":441,"./Script_Extensions/Nabataean.js":442,"./Script_Extensions/Nandinagari.js":443,"./Script_Extensions/New_Tai_Lue.js":444,"./Script_Extensions/Newa.js":445,"./Script_Extensions/Nko.js":446,"./Script_Extensions/Nushu.js":447,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":448,"./Script_Extensions/Ogham.js":449,"./Script_Extensions/Ol_Chiki.js":450,"./Script_Extensions/Old_Hungarian.js":451,"./Script_Extensions/Old_Italic.js":452,"./Script_Extensions/Old_North_Arabian.js":453,"./Script_Extensions/Old_Permic.js":454,"./Script_Extensions/Old_Persian.js":455,"./Script_Extensions/Old_Sogdian.js":456,"./Script_Extensions/Old_South_Arabian.js":457,"./Script_Extensions/Old_Turkic.js":458,"./Script_Extensions/Oriya.js":459,"./Script_Extensions/Osage.js":460,"./Script_Extensions/Osmanya.js":461,"./Script_Extensions/Pahawh_Hmong.js":462,"./Script_Extensions/Palmyrene.js":463,"./Script_Extensions/Pau_Cin_Hau.js":464,"./Script_Extensions/Phags_Pa.js":465,"./Script_Extensions/Phoenician.js":466,"./Script_Extensions/Psalter_Pahlavi.js":467,"./Script_Extensions/Rejang.js":468,"./Script_Extensions/Runic.js":469,"./Script_Extensions/Samaritan.js":470,"./Script_Extensions/Saurashtra.js":471,"./Script_Extensions/Sharada.js":472,"./Script_Extensions/Shavian.js":473,"./Script_Extensions/Siddham.js":474,"./Script_Extensions/SignWriting.js":475,"./Script_Extensions/Sinhala.js":476,"./Script_Extensions/Sogdian.js":477,"./Script_Extensions/Sora_Sompeng.js":478,"./Script_Extensions/Soyombo.js":479,"./Script_Extensions/Sundanese.js":480,"./Script_Extensions/Syloti_Nagri.js":481,"./Script_Extensions/Syriac.js":482,"./Script_Extensions/Tagalog.js":483,"./Script_Extensions/Tagbanwa.js":484,"./Script_Extensions/Tai_Le.js":485,"./Script_Extensions/Tai_Tham.js":486,"./Script_Extensions/Tai_Viet.js":487,"./Script_Extensions/Takri.js":488,"./Script_Extensions/Tamil.js":489,"./Script_Extensions/Tangut.js":490,"./Script_Extensions/Telugu.js":491,"./Script_Extensions/Thaana.js":492,"./Script_Extensions/Thai.js":493,"./Script_Extensions/Tibetan.js":494,"./Script_Extensions/Tifinagh.js":495,"./Script_Extensions/Tirhuta.js":496,"./Script_Extensions/Ugaritic.js":497,"./Script_Extensions/Vai.js":498,"./Script_Extensions/Wancho.js":499,"./Script_Extensions/Warang_Citi.js":500,"./Script_Extensions/Yezidi.js":501,"./Script_Extensions/Yi.js":502,"./Script_Extensions/Zanabazar_Square.js":503,"./index.js":504,"./unicode-version.js":505};function s(t){var n=r(t);return e(n)}function r(t){if(!e.o(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id=100},22:function(t,n,e){t.exports={custom:"styles_custom__jdqIi",container:"styles_container__OptiR"}},532:function(t,n,e){"use strict";e.r(n);e(63);var i=e(1),s=e.n(i),r=e(44),a=e.n(r),o=e(3),c=e(45),p=e(24),_=e(46),j=e(47),S=e(48),u=e(60),l=e(16),y=e(49),E=e.n(y),g=e(9),x=(e(68),e(69),e(70),e(71),e(61)),h=e(55),d=e.n(h);e(529);function m(t){var n=t.code,e=t.onValueChange,i=t.language,r=Object(l.a)(t,["code","onValueChange","language"]);return s.a.createElement(E.a,Object.assign({value:n,onValueChange:e||function(){},highlight:function(t){return Object(g.highlight)(t,"js"===i?g.languages.js:"css"===i?g.languages.css:g.languages.js)},padding:30},r))}var C={assign:d.a},f={objectAssign:"_poly.assign",transforms:{dangerousForOf:!0,dangerousTaggedTemplateString:!0}};function P(t){var n=t.error,e=Object(l.a)(t,["error"]);return s.a.createElement("div",Object.assign({style:{position:"absolute",width:"100%",zIndex:2,top:0,left:0,overflowWrap:"breakWord",padding:"10px",background:"tomato",fontWeight:"normal",fontFamily:"inherit",fontSize:"14px"}},e),s.a.createElement("h4",null,n))}function b(t,n,e){return t.slice(0,e)+n+t.slice(e,t.length+1)}var v=function(t){var n,e=t.code,r=void 0===e?"":e,a=t.scope,o=void 0===a?{}:a;try{/^\s*class\s*/.test(r),function(t){/render[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\(\)/.test(t)}(r),function(t){/(useState|useEffect|useRef|useCallback|useMemo)/.test(t)}(r);var l=function(t){var n=function(t){var n=/^class[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;return n.exec(t)&&n.exec(t)[0]}(t=t.trim().replace(/^(const|let|var).*=.*?(?=\()/,""))||function(t){var n=/^class[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?(?=(const|let|var))/;return n.exec(t)&&n.exec(t)[0]}(t)||function(t){console.log(t);var n=/^function[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;return n.exec(t)&&n.exec(t)[0]}(t)||function(t){var n=/^function[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?(?=(const|let|var))/;return n.exec(t)&&n.exec(t)[0]}(t)||function(t){var n=/^\([\s\S]*\)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*=>[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;return n.exec(t)&&n.exec(t)[0]}(t)||function(t){var n=/^\([\s\S]*\)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*=>[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?(?=(const|let|var))/;return n.exec(t)&&n.exec(t)[0]}(t),e=t.replace(n,"");return console.log("FUNCTION",n,"VARIABLES",e),function(t){return Object(x.a)(t,f).code}(t="const {useState, useEffect, useRef, useMemo, useCallback, Component } = React;\n  ".concat(e,"\n  return (").concat(n,")")).trim()}(r);return n=function(t,n){var e=Object.keys(n),i=e.map((function(t){return n[t]}));return Object(c.a)(Function,["_poly","React"].concat(Object(p.a)(e),[t])).apply(void 0,[C,s.a].concat(Object(p.a)(i)))}(l,o),function(t){Object(S.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(_.a)(this,i),(n=e.call(this,t)).state={hasError:!1},n}return Object(j.a)(i,[{key:"componentDidCatch",value:function(t){console.log(t)}},{key:"render",value:function(){return"function"!==typeof n||this.state.hasError?s.a.createElement(P,{error:this.state.msg}):s.a.createElement(n,null)}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:!0,msg:t}}}]),i}(i.Component)}catch(y){return console.log(y.toString()),function(){return s.a.createElement(P,{error:y.toString()})}}};var B='\nfunction Test() {\n  const [state, setState] = useState(1);\n\n  useEffect(() => {\n    console.log("CLICKED!");\n  }, [state]);\n\n  const handler = () => setState(state => state * 2);\n\n  return (\n    <div>\n      <button onClick={() => setState(state => state + 1)}>\n        CLICKS {state}\n      </button>\n    </div>\n  );\n}\n',O="button {\n  background-color: tomato !important;\n  color: #312;\n  border-radius: 5px;\n  cursor:pointer;\n}\nbutton:hover {\n  transform: scale(1.05);\n}\nbutton:active {\n  transform: scale(0.95)\n}";function k(t){var n=t.initialCode,e=t.initialCss,r=t.scope,a=t.textAreaClassName,c=t.getJsCode,p=t.getCssCode,_=t.render,j=t.children,S=Object(l.a)(t,["initialCode","initialCss","scope","textAreaClassName","getJsCode","getCssCode","render","children"]),u=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(i.useState)(t&&"string"===typeof t?t:B),s=Object(o.a)(e,2),r=s[0],a=s[1],c=Object(i.useState)(null),p=Object(o.a)(c,2),_=p[0],j=p[1],S=Object(i.useState)(!1),u=Object(o.a)(S,2),l=u[0],y=u[1],E=Object(i.useState)(null),g=Object(o.a)(E,2),x=g[0],h=g[1],d=Object(i.useState)(0),m=Object(o.a)(d,2),C=m[0],f=m[1],P=Object(i.useRef)(null),O=Object(i.useRef)();function k(t){var e=v({code:t,scope:n});j((function(){return e}))}function F(t){var n=t.key;h(n)}function G(t){O.current=t.target;var n=t.target.value;window.clearTimeout(P.current),y(!0),P.current=setTimeout((function(){y(!1)}),1e3);var e=t.target.selectionStart;switch(f(e),x){case"{":a(b(n,"}",e));break;case"(":a(b(n,")",e));break;case"[":a(b(n,"]",e));break;default:a(n)}}return Object(i.useEffect)((function(){!l&&r&&k(r)}),[l]),Object(i.useEffect)((function(){O.current&&(O.current.selectionEnd=C)}),[C]),{code:r,handleJsChange:G,handleJsKeyDown:F,Preview:_}}(n,r),y=u.code,E=u.Preview,g=u.handleJsChange,x=u.handleJsKeyDown,h=function(t){var n=Object(i.useState)("string"===typeof t?t:O),e=Object(o.a)(n,2),s=e[0],r=e[1];return{css:s,handleCssChange:function(t){return r(t)}}}(e),d=h.css,C=h.handleCssChange;return s.a.createElement("div",Object.assign({},S,{style:{position:"relative"}}),s.a.createElement("style",{scoped:!0,key:d}," ",d),E&&s.a.createElement(E,null),s.a.createElement(m,{language:"js",code:y,placeholder:"WRITE REACT CODE HERE",onValueChange:c,onChange:g,onKeyDown:x,className:a}),s.a.createElement(m,{language:"css",code:d,placeholder:"WRITE CSS CODE HERE",onValueChange:function(t){C(t),p&&p(t)},className:a}),"function"===typeof j&&j(y,d),_&&_(y,d))}k.defaultProps={initialCode:B,initialCss:O};var F=k,G=e(56),A=e(22),M=e.n(A),T="\n.__custom__live__react__ {\nwidth:150px;\nheight:150px;\nbackground:tomato;\ncolor:#FFF;\ndisplay:flex;\nborder-radius: 50%;\njustify-content:center;\nalign-items:center;\npadding:5px;\n}\n\n.__custom__live__react__ > h5 {\ntext-align: center;\n}\n",L=[{js:'function Test () {\n  return (\n    <div className="__custom__live__react__">\n      <h5>Functional Component</h5>\n    </div>\n    )\n}',css:T},{js:'const Test = () => {\n  return (\n    <div className="__custom__live__react__">\n      <h5>Arrow Function Component!</h5>\n    </div>\n    )\n}',css:T},{js:'class Test extends Component {\n  render(){\n    return (\n      <div className="__custom__live__react__">\n        <h5>Class Component!</h5>\n      </div>\n      )\n  }\n}',css:T},{js:"const WithStyled = () => {\nreturn (\n  <StyledDiv>\n    <h5>Styled Components</h5>\n  </StyledDiv>\n)\n}\n\nconst StyledDiv = styled.div`\nwidth:150px;\nheight:150px;\nbackground:tomato;\ncolor:#FFF;\ndisplay:flex;\nborder-radius: 50%;\njustify-content:center;\nalign-items:center;\npadding:5px;\n& > h5 {\n  text-align: center;\n}\n`\n",css:T,scope:{styled:!0}},{}],D=function(){return s.a.createElement("div",null,L.map((function(t){var n;return s.a.createElement(F,{className:M.a.container,initialCode:t.js,initialCss:t.css,textAreaClassName:M.a.custom,scope:{styled:(null===(n=t.scope)||void 0===n?void 0:n.styled)&&G.a}})})))};a.a.render(s.a.createElement(D,null),document.getElementById("root"))},62:function(t,n,e){t.exports=e(532)},63:function(t,n,e){}},[[62,1,2]]]);
//# sourceMappingURL=main.b980065b.chunk.js.map