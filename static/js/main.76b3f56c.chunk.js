(this["webpackJsonpreact-code-live-example"]=this["webpackJsonpreact-code-live-example"]||[]).push([[0],{108:function(e,t,n){var i={"./Binary_Property/ASCII.js":109,"./Binary_Property/ASCII_Hex_Digit.js":110,"./Binary_Property/Alphabetic.js":111,"./Binary_Property/Any.js":112,"./Binary_Property/Assigned.js":113,"./Binary_Property/Bidi_Control.js":114,"./Binary_Property/Bidi_Mirrored.js":115,"./Binary_Property/Case_Ignorable.js":116,"./Binary_Property/Cased.js":117,"./Binary_Property/Changes_When_Casefolded.js":118,"./Binary_Property/Changes_When_Casemapped.js":119,"./Binary_Property/Changes_When_Lowercased.js":120,"./Binary_Property/Changes_When_NFKC_Casefolded.js":121,"./Binary_Property/Changes_When_Titlecased.js":122,"./Binary_Property/Changes_When_Uppercased.js":123,"./Binary_Property/Dash.js":124,"./Binary_Property/Default_Ignorable_Code_Point.js":125,"./Binary_Property/Deprecated.js":126,"./Binary_Property/Diacritic.js":127,"./Binary_Property/Emoji.js":128,"./Binary_Property/Emoji_Component.js":129,"./Binary_Property/Emoji_Modifier.js":130,"./Binary_Property/Emoji_Modifier_Base.js":131,"./Binary_Property/Emoji_Presentation.js":132,"./Binary_Property/Extended_Pictographic.js":133,"./Binary_Property/Extender.js":134,"./Binary_Property/Grapheme_Base.js":135,"./Binary_Property/Grapheme_Extend.js":136,"./Binary_Property/Hex_Digit.js":137,"./Binary_Property/IDS_Binary_Operator.js":138,"./Binary_Property/IDS_Trinary_Operator.js":139,"./Binary_Property/ID_Continue.js":140,"./Binary_Property/ID_Start.js":141,"./Binary_Property/Ideographic.js":142,"./Binary_Property/Join_Control.js":143,"./Binary_Property/Logical_Order_Exception.js":144,"./Binary_Property/Lowercase.js":145,"./Binary_Property/Math.js":146,"./Binary_Property/Noncharacter_Code_Point.js":147,"./Binary_Property/Pattern_Syntax.js":148,"./Binary_Property/Pattern_White_Space.js":149,"./Binary_Property/Quotation_Mark.js":150,"./Binary_Property/Radical.js":151,"./Binary_Property/Regional_Indicator.js":152,"./Binary_Property/Sentence_Terminal.js":153,"./Binary_Property/Soft_Dotted.js":154,"./Binary_Property/Terminal_Punctuation.js":155,"./Binary_Property/Unified_Ideograph.js":156,"./Binary_Property/Uppercase.js":157,"./Binary_Property/Variation_Selector.js":158,"./Binary_Property/White_Space.js":159,"./Binary_Property/XID_Continue.js":160,"./Binary_Property/XID_Start.js":161,"./General_Category/Cased_Letter.js":162,"./General_Category/Close_Punctuation.js":163,"./General_Category/Connector_Punctuation.js":164,"./General_Category/Control.js":165,"./General_Category/Currency_Symbol.js":166,"./General_Category/Dash_Punctuation.js":167,"./General_Category/Decimal_Number.js":168,"./General_Category/Enclosing_Mark.js":169,"./General_Category/Final_Punctuation.js":170,"./General_Category/Format.js":171,"./General_Category/Initial_Punctuation.js":172,"./General_Category/Letter.js":173,"./General_Category/Letter_Number.js":174,"./General_Category/Line_Separator.js":175,"./General_Category/Lowercase_Letter.js":176,"./General_Category/Mark.js":177,"./General_Category/Math_Symbol.js":178,"./General_Category/Modifier_Letter.js":179,"./General_Category/Modifier_Symbol.js":180,"./General_Category/Nonspacing_Mark.js":181,"./General_Category/Number.js":182,"./General_Category/Open_Punctuation.js":183,"./General_Category/Other.js":184,"./General_Category/Other_Letter.js":185,"./General_Category/Other_Number.js":186,"./General_Category/Other_Punctuation.js":187,"./General_Category/Other_Symbol.js":188,"./General_Category/Paragraph_Separator.js":189,"./General_Category/Private_Use.js":190,"./General_Category/Punctuation.js":191,"./General_Category/Separator.js":192,"./General_Category/Space_Separator.js":193,"./General_Category/Spacing_Mark.js":194,"./General_Category/Surrogate.js":195,"./General_Category/Symbol.js":196,"./General_Category/Titlecase_Letter.js":197,"./General_Category/Unassigned.js":198,"./General_Category/Uppercase_Letter.js":199,"./Script/Adlam.js":200,"./Script/Ahom.js":201,"./Script/Anatolian_Hieroglyphs.js":202,"./Script/Arabic.js":203,"./Script/Armenian.js":204,"./Script/Avestan.js":205,"./Script/Balinese.js":206,"./Script/Bamum.js":207,"./Script/Bassa_Vah.js":208,"./Script/Batak.js":209,"./Script/Bengali.js":210,"./Script/Bhaiksuki.js":211,"./Script/Bopomofo.js":212,"./Script/Brahmi.js":213,"./Script/Braille.js":214,"./Script/Buginese.js":215,"./Script/Buhid.js":216,"./Script/Canadian_Aboriginal.js":217,"./Script/Carian.js":218,"./Script/Caucasian_Albanian.js":219,"./Script/Chakma.js":220,"./Script/Cham.js":221,"./Script/Cherokee.js":222,"./Script/Chorasmian.js":223,"./Script/Common.js":224,"./Script/Coptic.js":225,"./Script/Cuneiform.js":226,"./Script/Cypriot.js":227,"./Script/Cyrillic.js":228,"./Script/Deseret.js":229,"./Script/Devanagari.js":230,"./Script/Dives_Akuru.js":231,"./Script/Dogra.js":232,"./Script/Duployan.js":233,"./Script/Egyptian_Hieroglyphs.js":234,"./Script/Elbasan.js":235,"./Script/Elymaic.js":236,"./Script/Ethiopic.js":237,"./Script/Georgian.js":238,"./Script/Glagolitic.js":239,"./Script/Gothic.js":240,"./Script/Grantha.js":241,"./Script/Greek.js":242,"./Script/Gujarati.js":243,"./Script/Gunjala_Gondi.js":244,"./Script/Gurmukhi.js":245,"./Script/Han.js":246,"./Script/Hangul.js":247,"./Script/Hanifi_Rohingya.js":248,"./Script/Hanunoo.js":249,"./Script/Hatran.js":250,"./Script/Hebrew.js":251,"./Script/Hiragana.js":252,"./Script/Imperial_Aramaic.js":253,"./Script/Inherited.js":254,"./Script/Inscriptional_Pahlavi.js":255,"./Script/Inscriptional_Parthian.js":256,"./Script/Javanese.js":257,"./Script/Kaithi.js":258,"./Script/Kannada.js":259,"./Script/Katakana.js":260,"./Script/Kayah_Li.js":261,"./Script/Kharoshthi.js":262,"./Script/Khitan_Small_Script.js":263,"./Script/Khmer.js":264,"./Script/Khojki.js":265,"./Script/Khudawadi.js":266,"./Script/Lao.js":267,"./Script/Latin.js":268,"./Script/Lepcha.js":269,"./Script/Limbu.js":270,"./Script/Linear_A.js":271,"./Script/Linear_B.js":272,"./Script/Lisu.js":273,"./Script/Lycian.js":274,"./Script/Lydian.js":275,"./Script/Mahajani.js":276,"./Script/Makasar.js":277,"./Script/Malayalam.js":278,"./Script/Mandaic.js":279,"./Script/Manichaean.js":280,"./Script/Marchen.js":281,"./Script/Masaram_Gondi.js":282,"./Script/Medefaidrin.js":283,"./Script/Meetei_Mayek.js":284,"./Script/Mende_Kikakui.js":285,"./Script/Meroitic_Cursive.js":286,"./Script/Meroitic_Hieroglyphs.js":287,"./Script/Miao.js":288,"./Script/Modi.js":289,"./Script/Mongolian.js":290,"./Script/Mro.js":291,"./Script/Multani.js":292,"./Script/Myanmar.js":293,"./Script/Nabataean.js":294,"./Script/Nandinagari.js":295,"./Script/New_Tai_Lue.js":296,"./Script/Newa.js":297,"./Script/Nko.js":298,"./Script/Nushu.js":299,"./Script/Nyiakeng_Puachue_Hmong.js":300,"./Script/Ogham.js":301,"./Script/Ol_Chiki.js":302,"./Script/Old_Hungarian.js":303,"./Script/Old_Italic.js":304,"./Script/Old_North_Arabian.js":305,"./Script/Old_Permic.js":306,"./Script/Old_Persian.js":307,"./Script/Old_Sogdian.js":308,"./Script/Old_South_Arabian.js":309,"./Script/Old_Turkic.js":310,"./Script/Oriya.js":311,"./Script/Osage.js":312,"./Script/Osmanya.js":313,"./Script/Pahawh_Hmong.js":314,"./Script/Palmyrene.js":315,"./Script/Pau_Cin_Hau.js":316,"./Script/Phags_Pa.js":317,"./Script/Phoenician.js":318,"./Script/Psalter_Pahlavi.js":319,"./Script/Rejang.js":320,"./Script/Runic.js":321,"./Script/Samaritan.js":322,"./Script/Saurashtra.js":323,"./Script/Sharada.js":324,"./Script/Shavian.js":325,"./Script/Siddham.js":326,"./Script/SignWriting.js":327,"./Script/Sinhala.js":328,"./Script/Sogdian.js":329,"./Script/Sora_Sompeng.js":330,"./Script/Soyombo.js":331,"./Script/Sundanese.js":332,"./Script/Syloti_Nagri.js":333,"./Script/Syriac.js":334,"./Script/Tagalog.js":335,"./Script/Tagbanwa.js":336,"./Script/Tai_Le.js":337,"./Script/Tai_Tham.js":338,"./Script/Tai_Viet.js":339,"./Script/Takri.js":340,"./Script/Tamil.js":341,"./Script/Tangut.js":342,"./Script/Telugu.js":343,"./Script/Thaana.js":344,"./Script/Thai.js":345,"./Script/Tibetan.js":346,"./Script/Tifinagh.js":347,"./Script/Tirhuta.js":348,"./Script/Ugaritic.js":349,"./Script/Vai.js":350,"./Script/Wancho.js":351,"./Script/Warang_Citi.js":352,"./Script/Yezidi.js":353,"./Script/Yi.js":354,"./Script/Zanabazar_Square.js":355,"./Script_Extensions/Adlam.js":356,"./Script_Extensions/Ahom.js":357,"./Script_Extensions/Anatolian_Hieroglyphs.js":358,"./Script_Extensions/Arabic.js":359,"./Script_Extensions/Armenian.js":360,"./Script_Extensions/Avestan.js":361,"./Script_Extensions/Balinese.js":362,"./Script_Extensions/Bamum.js":363,"./Script_Extensions/Bassa_Vah.js":364,"./Script_Extensions/Batak.js":365,"./Script_Extensions/Bengali.js":366,"./Script_Extensions/Bhaiksuki.js":367,"./Script_Extensions/Bopomofo.js":368,"./Script_Extensions/Brahmi.js":369,"./Script_Extensions/Braille.js":370,"./Script_Extensions/Buginese.js":371,"./Script_Extensions/Buhid.js":372,"./Script_Extensions/Canadian_Aboriginal.js":373,"./Script_Extensions/Carian.js":374,"./Script_Extensions/Caucasian_Albanian.js":375,"./Script_Extensions/Chakma.js":376,"./Script_Extensions/Cham.js":377,"./Script_Extensions/Cherokee.js":378,"./Script_Extensions/Chorasmian.js":379,"./Script_Extensions/Common.js":380,"./Script_Extensions/Coptic.js":381,"./Script_Extensions/Cuneiform.js":382,"./Script_Extensions/Cypriot.js":383,"./Script_Extensions/Cyrillic.js":384,"./Script_Extensions/Deseret.js":385,"./Script_Extensions/Devanagari.js":386,"./Script_Extensions/Dives_Akuru.js":387,"./Script_Extensions/Dogra.js":388,"./Script_Extensions/Duployan.js":389,"./Script_Extensions/Egyptian_Hieroglyphs.js":390,"./Script_Extensions/Elbasan.js":391,"./Script_Extensions/Elymaic.js":392,"./Script_Extensions/Ethiopic.js":393,"./Script_Extensions/Georgian.js":394,"./Script_Extensions/Glagolitic.js":395,"./Script_Extensions/Gothic.js":396,"./Script_Extensions/Grantha.js":397,"./Script_Extensions/Greek.js":398,"./Script_Extensions/Gujarati.js":399,"./Script_Extensions/Gunjala_Gondi.js":400,"./Script_Extensions/Gurmukhi.js":401,"./Script_Extensions/Han.js":402,"./Script_Extensions/Hangul.js":403,"./Script_Extensions/Hanifi_Rohingya.js":404,"./Script_Extensions/Hanunoo.js":405,"./Script_Extensions/Hatran.js":406,"./Script_Extensions/Hebrew.js":407,"./Script_Extensions/Hiragana.js":408,"./Script_Extensions/Imperial_Aramaic.js":409,"./Script_Extensions/Inherited.js":410,"./Script_Extensions/Inscriptional_Pahlavi.js":411,"./Script_Extensions/Inscriptional_Parthian.js":412,"./Script_Extensions/Javanese.js":413,"./Script_Extensions/Kaithi.js":414,"./Script_Extensions/Kannada.js":415,"./Script_Extensions/Katakana.js":416,"./Script_Extensions/Kayah_Li.js":417,"./Script_Extensions/Kharoshthi.js":418,"./Script_Extensions/Khitan_Small_Script.js":419,"./Script_Extensions/Khmer.js":420,"./Script_Extensions/Khojki.js":421,"./Script_Extensions/Khudawadi.js":422,"./Script_Extensions/Lao.js":423,"./Script_Extensions/Latin.js":424,"./Script_Extensions/Lepcha.js":425,"./Script_Extensions/Limbu.js":426,"./Script_Extensions/Linear_A.js":427,"./Script_Extensions/Linear_B.js":428,"./Script_Extensions/Lisu.js":429,"./Script_Extensions/Lycian.js":430,"./Script_Extensions/Lydian.js":431,"./Script_Extensions/Mahajani.js":432,"./Script_Extensions/Makasar.js":433,"./Script_Extensions/Malayalam.js":434,"./Script_Extensions/Mandaic.js":435,"./Script_Extensions/Manichaean.js":436,"./Script_Extensions/Marchen.js":437,"./Script_Extensions/Masaram_Gondi.js":438,"./Script_Extensions/Medefaidrin.js":439,"./Script_Extensions/Meetei_Mayek.js":440,"./Script_Extensions/Mende_Kikakui.js":441,"./Script_Extensions/Meroitic_Cursive.js":442,"./Script_Extensions/Meroitic_Hieroglyphs.js":443,"./Script_Extensions/Miao.js":444,"./Script_Extensions/Modi.js":445,"./Script_Extensions/Mongolian.js":446,"./Script_Extensions/Mro.js":447,"./Script_Extensions/Multani.js":448,"./Script_Extensions/Myanmar.js":449,"./Script_Extensions/Nabataean.js":450,"./Script_Extensions/Nandinagari.js":451,"./Script_Extensions/New_Tai_Lue.js":452,"./Script_Extensions/Newa.js":453,"./Script_Extensions/Nko.js":454,"./Script_Extensions/Nushu.js":455,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":456,"./Script_Extensions/Ogham.js":457,"./Script_Extensions/Ol_Chiki.js":458,"./Script_Extensions/Old_Hungarian.js":459,"./Script_Extensions/Old_Italic.js":460,"./Script_Extensions/Old_North_Arabian.js":461,"./Script_Extensions/Old_Permic.js":462,"./Script_Extensions/Old_Persian.js":463,"./Script_Extensions/Old_Sogdian.js":464,"./Script_Extensions/Old_South_Arabian.js":465,"./Script_Extensions/Old_Turkic.js":466,"./Script_Extensions/Oriya.js":467,"./Script_Extensions/Osage.js":468,"./Script_Extensions/Osmanya.js":469,"./Script_Extensions/Pahawh_Hmong.js":470,"./Script_Extensions/Palmyrene.js":471,"./Script_Extensions/Pau_Cin_Hau.js":472,"./Script_Extensions/Phags_Pa.js":473,"./Script_Extensions/Phoenician.js":474,"./Script_Extensions/Psalter_Pahlavi.js":475,"./Script_Extensions/Rejang.js":476,"./Script_Extensions/Runic.js":477,"./Script_Extensions/Samaritan.js":478,"./Script_Extensions/Saurashtra.js":479,"./Script_Extensions/Sharada.js":480,"./Script_Extensions/Shavian.js":481,"./Script_Extensions/Siddham.js":482,"./Script_Extensions/SignWriting.js":483,"./Script_Extensions/Sinhala.js":484,"./Script_Extensions/Sogdian.js":485,"./Script_Extensions/Sora_Sompeng.js":486,"./Script_Extensions/Soyombo.js":487,"./Script_Extensions/Sundanese.js":488,"./Script_Extensions/Syloti_Nagri.js":489,"./Script_Extensions/Syriac.js":490,"./Script_Extensions/Tagalog.js":491,"./Script_Extensions/Tagbanwa.js":492,"./Script_Extensions/Tai_Le.js":493,"./Script_Extensions/Tai_Tham.js":494,"./Script_Extensions/Tai_Viet.js":495,"./Script_Extensions/Takri.js":496,"./Script_Extensions/Tamil.js":497,"./Script_Extensions/Tangut.js":498,"./Script_Extensions/Telugu.js":499,"./Script_Extensions/Thaana.js":500,"./Script_Extensions/Thai.js":501,"./Script_Extensions/Tibetan.js":502,"./Script_Extensions/Tifinagh.js":503,"./Script_Extensions/Tirhuta.js":504,"./Script_Extensions/Ugaritic.js":505,"./Script_Extensions/Vai.js":506,"./Script_Extensions/Wancho.js":507,"./Script_Extensions/Warang_Citi.js":508,"./Script_Extensions/Yezidi.js":509,"./Script_Extensions/Yi.js":510,"./Script_Extensions/Zanabazar_Square.js":511,"./index.js":512,"./unicode-version.js":513};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id=108},5:function(e,t,n){e.exports={container:"styles_container__OptiR",codeLogo:"styles_codeLogo__2aMG-",cssLogo:"styles_cssLogo__6jWen",header_container:"styles_header_container__2BkhQ",logo:"styles_logo__1_QSe",left:"styles_left__fdnag",right:"styles_right__2eQUc",line:"styles_line__2XJ9m",title:"styles_title__1HOke",sideTitles:"styles_sideTitles__1Wh6T"}},53:function(e,t,n){"use strict";(function(e){var i=n(7),r=n(54),s=n(33),a=n(14),o=n(4),c=n(28),l=n(29),p=n(30),u=n(32),_=n(2),j=n.n(_),d=n(3),h=n.n(d),S=n(21),y=(n(76),n(77),n(78),n(79),n(65)),g=n(60),m=n.n(g),f=(n(537),{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"}),x={position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},E={position:"relative",pointerEvents:"none"},b={margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word",userSelect:"none"},v="navigator"in e&&/Win/i.test(navigator.platform),C="navigator"in e&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),k="npm__react-simple-code-editor__textarea",O="\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(k,":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(k," {\n    color: transparent !important;\n  }\n\n  .").concat(k,"::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"),P=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e))._recordCurrentState=function(){var e=i._input;if(e){var t=e.value,n=e.selectionStart,r=e.selectionEnd;i._recordChange({value:t,selectionStart:n,selectionEnd:r})}},i._getLines=function(e,t){return e.substring(0,t).split("\n")},i._recordChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i._history,r=n.stack,s=n.offset;if(r.length&&s>-1){i._history.stack=r.slice(0,s+1);var a=i._history.stack.length;if(a>100){var c=a-100;i._history.stack=r.slice(c,a),i._history.offset=Math.max(i._history.offset-c,0)}}var l=Date.now();if(t){var p=i._history.stack[i._history.offset];if(p&&l-p.timestamp<3e3){var u=/[^a-z0-9]([a-z0-9]+)$/i,_=i._getLines(p.value,p.selectionStart).pop().match(u),j=i._getLines(e.value,e.selectionStart).pop().match(u);if(_&&j&&j[1].startsWith(_[1]))return void(i._history.stack[i._history.offset]=Object(o.a)(Object(o.a)({},e),{},{timestamp:l}))}}i._history.stack.push(Object(o.a)(Object(o.a)({},e),{},{timestamp:l})),i._history.offset+=1},i._updateInput=function(e){var t=i._input;t&&(t.value=e.value,t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,i.props.onChange(e.event))},i._applyEdits=function(e){var t=i._input,n=i._history.stack[i._history.offset];n&&t&&(i._history.stack[i._history.offset]=Object(o.a)(Object(o.a)({},n),{},{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd})),i._recordChange(e),i._updateInput(e)},i._undoEdit=function(e){var t=i._history,n=t.stack,r=t.offset,s=Object(o.a)(Object(o.a)({},n[r-1]),{},{event:e});s&&(i._updateInput(s),i._history.offset=Math.max(r-1,0))},i._redoEdit=function(e){var t=i._history,n=t.stack,r=t.offset,s=Object(o.a)(Object(o.a)({},n[r+1]),{},{event:e});s&&(i._updateInput(s),i._history.offset=Math.min(r+1,n.length-1))},i._handleKeyDown=function(e){var t=i.props,n=t.tabSize,r=t.insertSpaces,s=t.ignoreTabKey,a=t.onKeyDown;if(!a||(a(e),!e.defaultPrevented)){27===e.keyCode&&e.target.blur();var o=e.target,c=o.value,l=o.selectionStart,p=o.selectionEnd,u=(r?" ":"\t").repeat(n),_=i.state.capture;if(9===e.keyCode&&!s&&_)if(e.preventDefault(),e.shiftKey){var j=i._getLines(c,l),d=j.length-1,h=i._getLines(c,p).length-1,S=c.split("\n").map((function(e,t){return t>=d&&t<=h&&e.startsWith(u)?e.substring(u.length):e})).join("\n");if(c!==S){var y=j[d];i._applyEdits({value:S,selectionStart:y.startsWith(u)?l-u.length:l,selectionEnd:p-(c.length-S.length),event:e})}}else if(l!==p){var g=i._getLines(c,l),m=g.length-1,f=i._getLines(c,p).length-1,x=g[m];i._applyEdits({value:c.split("\n").map((function(e,t){return t>=m&&t<=f?u+e:e})).join("\n"),selectionStart:/\S/.test(x)?l+u.length:l,selectionEnd:p+u.length*(f-m+1),event:e})}else{var E=l+u.length;i._applyEdits({value:c.substring(0,l)+u+c.substring(p),selectionStart:E,selectionEnd:E,event:e})}else if(8===e.keyCode){var b=l!==p;if(c.substring(0,l).endsWith(u)&&!b){e.preventDefault();var k=l-u.length;i._applyEdits({value:c.substring(0,l-u.length)+c.substring(p),selectionStart:k,selectionEnd:k,event:e})}}else if(13===e.keyCode){if(l===p){var O=i._getLines(c,l).pop().match(/^\s+/);if(O&&O[0]){e.preventDefault();var P="\n".concat(O[0]),B=l+P.length;i._applyEdits({value:c.substring(0,l)+P+c.substring(p),selectionStart:B,selectionEnd:B,event:e})}}}else if(57===e.keyCode||219===e.keyCode||222===e.keyCode||192===e.keyCode){var A;57===e.keyCode&&e.shiftKey?A=["(",")"]:219===e.keyCode?A=e.shiftKey?["{","}"]:["[","]"]:222===e.keyCode?A=e.shiftKey?['"','"']:["'","'"]:192!==e.keyCode||e.shiftKey||(A=["`","`"]),l!==p&&A&&(e.preventDefault(),i._applyEdits({value:c.substring(0,l)+A[0]+c.substring(l,p)+A[1]+c.substring(p),selectionStart:l,selectionEnd:p+2,event:e}))}else!(C?e.metaKey&&90===e.keyCode:e.ctrlKey&&90===e.keyCode)||e.shiftKey||e.altKey?(C?e.metaKey&&90===e.keyCode&&e.shiftKey:v?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&90===e.keyCode&&e.shiftKey)&&!e.altKey?(e.preventDefault(),i._redoEdit(e)):77!==e.keyCode||!e.ctrlKey||C&&!e.shiftKey||(e.preventDefault(),i.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),i._undoEdit(e))}},i._handleChange=function(e){var t=e.target,n=t.value,r=t.selectionStart,s=t.selectionEnd,a=i.props.onChange;i._recordChange({value:n,selectionStart:r,selectionEnd:s},!0),a(e)},i.state={capture:!0},i._history={stack:[],offset:-1},i._input=null,i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this._recordCurrentState()}},{key:"session",get:function(){return{history:this._history}},set:function(e){this._history=e.history}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,i=t.style,r=t.padding,s=t.highlight,c=t.textareaId,l=t.textareaClassName,p=(t.autoFocus,t.disabled),u=t.form,j=t.maxLength,d=t.minLength,h=t.name,S=t.placeholder,y=t.readOnly,g=t.required,m=t.onClick,v=t.onFocus,C=t.onBlur,P=t.onKeyUp,B=(t.onChange,t.onKeyDown,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),A=Object(a.a)(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onChange","onKeyDown","tabSize","insertSpaces","ignoreTabKey","preClassName"]),T={paddingTop:r,paddingRight:r,paddingBottom:r,paddingLeft:r},F=s(n);return Object(_.createElement)("div",Object.assign({},A,{style:Object(o.a)(Object(o.a)({},f),i)}),Object(_.createElement)("textarea",{ref:function(t){return e._input=t},style:Object(o.a)(Object(o.a)(Object(o.a)({},b),x),T),className:k+(l?" ".concat(l):""),id:c,value:n,onChange:this._handleChange.bind(this),onKeyDown:this._handleKeyDown.bind(this),onClick:m,onKeyUp:P,onFocus:v,onBlur:C,disabled:p,form:u,maxLength:j,minLength:d,name:h,placeholder:S,readOnly:y,required:g,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),Object(_.createElement)("pre",Object.assign({className:B,"aria-hidden":"true",style:Object(o.a)(Object(o.a)(Object(o.a)({},b),E),T)},"string"===typeof F?{dangerouslySetInnerHTML:{__html:"".concat(F,"<br />")}}:{children:F})),Object(_.createElement)("style",{type:"text/css",dangerouslySetInnerHTML:{__html:O}}))}}]),n}(_.Component);function B(e){var t,n=e.code,i=e.language,r=Object(a.a)(e,["code","language"]);return t="js"===i?S.languages.js:"css"===i?S.languages.css:i.js,j.a.createElement(P,Object.assign({value:n,highlight:function(e){return Object(S.highlight)(e,t)},padding:30},r))}function A(e){var t=e.error,n=Object(a.a)(e,["error"]);return j.a.createElement("div",Object.assign({"data-id":"error-container"},n),j.a.createElement("h4",null,t))}P.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},P.propTypes={value:h.a.string,style:h.a.object,padding:h.a.number,highlight:h.a.string,textareaId:h.a.string,textareaClassName:h.a.string,autoFocus:h.a.bool,disabled:h.a.bool},B.propTypes={code:h.a.string,language:h.a.string,placeholder:h.a.string,onChange:h.a.func,onKeyDown:h.a.func,className:h.a.string},A.propTypes={error:h.a.string};var T={assign:m.a},F={objectAssign:"_poly.assign",transforms:{dangerousForOf:!0,dangerousTaggedTemplateString:!0}};function L(e,t,n){return e.slice(0,n)+t+e.slice(n,e.length+1)}var w=function(e,t){var n=e.code,i=void 0===n?"":n,a=e.scope,o=void 0===a?{}:a;return function(e,t){return function(n){Object(p.a)(r,n);var i=Object(u.a)(r);function r(e){var t;return Object(c.a)(this,r),(t=i.call(this,e)).check=!0,t}return Object(l.a)(r,[{key:"componentDidCatch",value:function(e){t(e),this.check=!1}},{key:"render",value:function(){return this.check&&"function"===typeof e?j.a.createElement(e,null):null}}]),r}(_.Component)}(function(e,t){var n=Object.keys(t),i=n.map((function(e){return t[e]}));return Object(r.a)(Function,["_poly","React"].concat(Object(s.a)(n),[e])).apply(void 0,[T,j.a].concat(Object(s.a)(i)))}(function(e){var t=e.trim().replace(/^(const|let|var).*=.*?(?=\()/,""),n=function(e){var t=/^class[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;return t.exec(e)&&t.exec(e)[0]}(t)||function(e){var t=/^class[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?(?=(const|let|var))/;return t.exec(e)&&t.exec(e)[0]}(t)||function(e){var t=/^function[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;return t.exec(e)&&t.exec(e)[0]}(t)||function(e){var t=/^function[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?(?=(const|let|var))/;return t.exec(e)&&t.exec(e)[0]}(t)||function(e){var t=/^\([\s\S]*\)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*=>[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;return t.exec(e)&&t.exec(e)[0]}(t)||function(e){var t=/^\([\s\S]*\)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*=>[\s\S]*\};*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?(?=(const|let|var))/;return t.exec(e)&&t.exec(e)[0]}(t),i=t.replace(n,"");return function(e){return Object(y.a)(e,F).code}(t="const {useState, useEffect, useRef, useMemo, useCallback, Component } = React;\n  ".concat(i,"\n  return (").concat(n,")")).trim()}(i),o),t)};function D(e){var t=e.initialJs,n=e.initialCss,r=e.scope,s=e.getJsCode,o=e.getCssCode,c=e.render,l=e.children,p=Object(a.a)(e,["initialJs","initialCss","scope","getJsCode","getCssCode","render","children"]),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(_.useState)(e&&"string"===typeof e?e:""),r=Object(i.a)(n,2),s=r[0],a=r[1],o=Object(_.useState)(null),c=Object(i.a)(o,2),l=c[0],p=c[1],u=Object(_.useState)(null),j=Object(i.a)(u,2),d=j[0],h=j[1],S=Object(_.useState)(!1),y=Object(i.a)(S,2),g=y[0],m=y[1],f=Object(_.useState)(null),x=Object(i.a)(f,2),E=x[0],b=x[1],v=Object(_.useState)(0),C=Object(i.a)(v,2),k=C[0],O=C[1],P=Object(_.useRef)(null),B=Object(_.useRef)();function A(e){h(e.toString())}function T(e){try{var n=w({code:e,scope:t},A);p((function(){return n})),h(null)}catch(i){A(i.toString()),p(null)}}function F(e){var t=e.key;b(t)}function D(e){B.current=e.target;var t=e.target.value;window.clearTimeout(P.current),m(!0),P.current=setTimeout((function(){m(!1)}),1e3),a(t);var n=e.target.selectionStart;switch(O(n),E){case"{":a(L(t,"}",n));break;case"(":a(L(t,")",n));break;case"[":a(L(t,"]",n));break;default:a(t)}}return Object(_.useEffect)((function(){!g&&s&&T(s)}),[g]),Object(_.useEffect)((function(){B.current&&(B.current.selectionEnd=k)}),[k]),{code:s,handleJsChange:D,handleJsKeyDown:F,Preview:l,error:d}}(t,r),d=u.code,h=u.Preview,S=u.handleJsChange,y=u.handleJsKeyDown,g=u.error,m=function(e){var t=Object(_.useState)("string"===typeof e?e:""),n=Object(i.a)(t,2),r=n[0],s=n[1];return{css:r,handleCssChange:function(e){return s(e)}}}(n),f=m.css,x=m.handleCssChange;return j.a.createElement("div",p,j.a.createElement("style",{scoped:!0,key:f},f),j.a.createElement("div",{"data-id":"preview-container"},h&&j.a.createElement(h,null)),j.a.createElement("div",{"data-id":"js-container"},j.a.createElement(B,{language:"js",code:d,placeholder:"WRITE REACT CODE HERE",onChange:function(e){var t=e.target.value;S(e),s&&s(t)},onKeyDown:y})),j.a.createElement("div",{"data-id":"css-container"},j.a.createElement(B,{language:"css",code:f,placeholder:"WRITE CSS CODE HERE",onChange:function(e){var t=e.target.value;x(t),o&&o(t)}})),g&&j.a.createElement(A,{error:g}),"function"===typeof l&&l(d,f),c&&c(d,f))}D.propTypes={initialJs:h.a.string,initialCss:h.a.string,scope:h.a.object,textAreaClassName:h.a.string,getJsCode:h.a.func,getCssCode:h.a.func,render:h.a.func,children:h.a.node},t.a=D}).call(this,n(8))},540:function(e,t,n){"use strict";n.r(t);n(67);var i=n(2),r=n.n(i),s=n(52),a=n.n(s),o=n(53),c=n(1),l=n(5),p=n.n(l),u=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null),n=Object(i.useRef)(null),s=Object(i.useRef)(null),a=Object(i.useRef)(null),o=Object(i.useRef)(null),l=Object(i.useRef)(null);return Object(i.useEffect)((function(){new c.c({repeat:0}).set(l.current,{rotationX:90}).set([s.current,a.current,o.current],{x:200,visibility:"hidden"}).to(l.current,{duration:.7,rotationX:0,boxShadow:"-100px 100px 10px 10px #070129",ease:"bounce",delay:1}).to([s.current,a.current,o.current],{duration:.5,x:0,visibility:"visible",stagger:.3}),new c.c({repeat:-1,repeatRefresh:!0,delay:1.2,yoyo:!0}).to([s.current,a.current,o.current],{duration:.3,color:"#CCC",ease:"Power3.out",stagger:.1}),new c.c({repeat:-1,yoyo:!0}).to(n.current,{duration:1.2,width:"100%"}).to(t.current,{duration:1.2,width:"100%"})}),[]),r.a.createElement("div",{ref:e,className:p.a.header_container},r.a.createElement("div",{ref:l,className:p.a.logo},r.a.createElement("div",{className:p.a.title},r.a.createElement("h4",{ref:s},r.a.createElement("u",null,"React")),r.a.createElement("h4",{ref:a},r.a.createElement("u",null,"Code")),r.a.createElement("h4",{ref:o},r.a.createElement("u",null,"Live"))),r.a.createElement("div",{className:p.a.left},r.a.createElement("h5",{className:p.a.sideTitles},"JS AND JSX SUPPORT!"),r.a.createElement("span",{ref:t,className:p.a.line})),r.a.createElement("div",{className:p.a.right},r.a.createElement("h5",{className:p.a.sideTitles},"SCOPED CSS!"),r.a.createElement("span",{ref:n,className:p.a.line}))))},_=n(61),j=function(){return r.a.createElement("div",null,r.a.createElement(u,null),d.map((function(e){var t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{key:e.id,className:p.a.container,initialJs:e.js,initialCss:e.css,textAreaClassName:p.a.custom,scope:{styled:(null===(t=e.scope)||void 0===t?void 0:t.styled)&&_.a}},(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fab fa-js-square ".concat(p.a.codeLogo)}),r.a.createElement("i",{className:"fab fa-css3-alt ".concat(p.a.cssLogo)}))})))})))},d=[{id:1,js:'function Test () {\n  return (\n    <div className="__custom__live__react__">\n      <h5>Functional Component</h5>\n    </div>\n    )\n}',css:"\n.__custom__live__react__ {\nwidth:150px;\nheight:150px;\nbackground:tomato;\ncolor:#FFF;\ndisplay:flex;\nborder-radius: 50%;\njustify-content:center;\nalign-items:center;\npadding:5px;\n}\n\n.__custom__live__react__ > h5 {\ntext-align: center;\n}\n"},{id:2,js:'const Test = () => {\n  return (\n    <div className="__custom__live__react__">\n      <h5>Arrow Function Component!</h5>\n    </div>\n    )\n}',css:"\n.__custom__live__react__ {\nwidth:150px;\nheight:150px;\nbackground:lightgreen;\ncolor:#FFF;\ndisplay:flex;\nborder-radius: 50%;\njustify-content:center;\nalign-items:center;\npadding:5px;\n}\n\n.__custom__live__react__ > h5 {\ntext-align: center;\n}\n"},{id:3,js:'class Test extends Component {\n  render(){\n    return (\n      <div className="__custom__live__react__">\n        <h5>Class Component!</h5>\n      </div>\n      )\n  }\n}',css:"\n.__custom__live__react__ {\nwidth:150px;\nheight:150px;\nbackground:lightseagreen;\ncolor:#FFF;\ndisplay:flex;\nborder-radius: 50%;\njustify-content:center;\nalign-items:center;\npadding:5px;\n}\n\n.__custom__live__react__ > h5 {\ntext-align: center;\n}\n"},{id:4,js:"const WithStyled = () => {\nreturn (\n  <StyledDiv>\n    <h5>Styled Components</h5>\n  </StyledDiv>\n)\n}\n\nconst StyledDiv = styled.div`\nwidth:150px;\nheight:150px;\nbackground:darkmagenta;\ncolor:#FFF;\ndisplay:flex;\nborder-radius: 50%;\njustify-content:center;\nalign-items:center;\npadding:5px;\n& > h5 {\n  text-align: center;\n}\n`\n",css:"",scope:{styled:!0}},{id:5,js:'class App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      todo: [],\n      term: "",\n      filter: "ALL"\n    };\n    this.handleChange = this.handleChange.bind(this);\n    this.handleItemClick = this.handleItemClick.bind(this);\n    this.onSubmit = this.onSubmit.bind(this);\n    this.handleDelete = this.handleDelete.bind(this);\n    this.checkAll = this.checkAll.bind(this);\n    this.uncheckAll = this.uncheckAll.bind(this);\n    this.checkboxStyle = this.checkboxStyle.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({ term: event.target.value });\n  }\n\n  handleItemClick({ value, done }) {\n    console.log(value, done);\n    this.setState(state => ({\n      todo: state.todo.map(item =>\n        item.value === value ? { value, done: !done } : item\n      )\n    }));\n  }\n\n  onSubmit(event) {\n    event.preventDefault();\n\n    if (this.state.term.length > 0) {\n      this.setState(state => ({\n        term: "",\n        todo: [...state.todo, { value: state.term, done: false }]\n      }));\n    }\n  }\n\n  handleDelete({ value }) {\n    const index = this.state.todo.findIndex(el => el.value === value);\n    this.setState(state => ({\n      todo: [...state.todo.slice(0, index), ...state.todo.slice(index + 1)]\n    }));\n  }\n\n  checkAll() {\n    this.setState(state => ({\n      todo: state.todo.map(item => ({ value: item.value, done: true }))\n    }));\n  }\n\n  uncheckAll() {\n    this.setState(state => ({\n      todo: state.todo.map(item => ({ value: item.value, done: false }))\n    }));\n  }\n  checkboxStyle(done) {\n    return {\n      textDecoration: done ? "line-through" : "none"\n    };\n  }\n  render() {\n    console.log(this.state.todo);\n    return (\n      <div className="container">\n        <div className="wrapper">\n          <form onSubmit={this.onSubmit}>\n            <input\n              type="text"\n              placeholder="Add task!"\n              value={this.state.term}\n              onChange={this.handleChange}\n            />\n            <button type="submit">ADD</button>\n          </form>\n          <h5 className="todos-left">\n            {this.state.todo.filter(item => !item.done).length} todo left\n          </h5>\n          <ul className="list-style">\n            {this.state.todo\n              .filter(item => {\n                switch (this.state.filter) {\n                  case "ALL":\n                    return item;\n                  case "ACTIVE":\n                    return !item.done;\n                  case "COMPLETED":\n                    return item.done;\n                }\n              })\n              .map(item => (\n                <li\n                  onClick={() => this.handleItemClick(item)}\n                  className="outer-li"\n                  key={item.value}\n                >\n                  <div className="item-checkbox">\n                    <input\n                      type="checkbox"\n                      checked={item.done}\n                      onChange={() => this.handleItemClick(item)}\n                    />\n                  </div>\n                  <div className="item-text">\n                    <span style={this.checkboxStyle(item.done)}>\n                      {item.value}\n                    </span>\n                  </div>\n                  <div className="item-remove-div">\n                    <button\n                      className="item-remove"\n                      onClick={() => this.handleDelete(item)}\n                    >\n                      &times;\n                    </button>\n                  </div>\n                  <br />\n                </li>\n              ))}\n          </ul>\n          <div>\n            <div className="center-b">\n              <button onClick={this.checkAll}>Check All</button>\n                <button onClick={this.uncheckAll}>Uncheck All</button>\n              <button onClick={() => this.setState({ filter: "ACTIVE" })}>\n                Active\n              </button>\n              <button onClick={() => this.setState({ filter: "COMPLETED" })}>\n                Completed\n              </button>\n              <button onClick={() => this.setState({ filter: "ALL" })}>\n                All\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    );\n  }\n}\n\n',css:'* {\n  box-sizing: border-box;\n}\n\nform {\n  display: flex;\n  height: 40px;\n}\n\ninput[type="text"] {\n  border: 2px solid #e7e7e7;\n  background: #f1f1f1;\n  height: 2rem;\n  width:100%;\n}\n\nbutton {\n  height: 2rem;\n  background-color: lightblue;\n  color: black;\n  border: 2px solid #e7e7e7;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n}\n\nbutton.active {\n  transform: scale(0.9);\n}\n\n.wrapper {\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  border: 2px solid black;\n  border-radius:5px;\n  position: relative;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  padding:10px;\n  color: #222;\n}\n\n.container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.center-b {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width:100%;\n  flex-wrap: wrap; \n}\n\n.item-remove {\n  background-color: transparent;\n  border: 0;\n  color: red;\n  font-size: 2rem;\n  vertical-align: middle;\n  cursor: pointer;\n  outline: none;\n   display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul {\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.outer-li {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.list-style {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  list-style: none;\n}\n\n'}],h=n(27),S=n(12);h.a.registerPlugin(S.a),a.a.render(r.a.createElement(j,null),document.getElementById("root"))},66:function(e,t,n){e.exports=n(540)},67:function(e,t,n){}},[[66,1,2]]]);
//# sourceMappingURL=main.76b3f56c.chunk.js.map