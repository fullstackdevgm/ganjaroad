var OxO2326=["SetStyle","length","","GetStyle","GetText",":",";","cssText","sel_font","div_font_detail","sel_fontfamily","cb_decoration_under","cb_decoration_over","cb_decoration_through","cb_style_bold","cb_style_italic","sel_fontTransform","sel_fontsize","inp_fontsize","sel_fontsize_unit","inp_color","inp_color_Preview","outer","div_demo","disabled","selectedIndex","style","value","font","fontFamily","color","backgroundColor","textDecoration","checked","overline","underline","line-through","fontWeight","bold","fontStyle","italic","fontSize","options","textTransform","font-family","overline ","underline ","line-through ","onclick"];function pause(Ox37b){var Ox2f9= new Date();var Ox37c=Ox2f9.getTime()+Ox37b;while(true){Ox2f9= new Date();if(Ox2f9.getTime()>Ox37c){return ;} ;} ;} ;function StyleClass(Oxed){var Ox37e=[];var Ox37f={};if(Oxed){Ox384();} ;this[OxO2326[0]]=function SetStyle(name,Ox7,Ox381){name=name.toLowerCase();for(var i=0;i<Ox37e[OxO2326[1]];i++){if(Ox37e[i]==name){break ;} ;} ;Ox37e[i]=name;Ox37f[name]=Ox7?(Ox7+(Ox381||OxO2326[2])):OxO2326[2];} ;this[OxO2326[3]]=function GetStyle(name){name=name.toLowerCase();return Ox37f[name]||OxO2326[2];} ;this[OxO2326[4]]=function Ox383(){var Oxed=OxO2326[2];for(var i=0;i<Ox37e[OxO2326[1]];i++){var Ox8d=Ox37e[i];var p=Ox37f[Ox8d];if(p){Oxed+=Ox8d+OxO2326[5]+p+OxO2326[6];} ;} ;return Oxed;} ;function Ox384(){var arr=Oxed.split(OxO2326[6]);for(var i=0;i<arr[OxO2326[1]];i++){var p=arr[i].split(OxO2326[5]);var Ox8d=p[0].replace(/^\s+/g,OxO2326[2]).replace(/\s+$/g,OxO2326[2]).toLowerCase();Ox37e[Ox37e[OxO2326[1]]]=Ox8d;Ox37f[Ox8d]=p[1];} ;} ;} ;function GetStyle(Ox21,name){return  new StyleClass(Ox21.cssText).GetStyle(name);} ;function SetStyle(Ox21,name,Ox7,Ox385){var Ox386= new StyleClass(Ox21.cssText);Ox386.SetStyle(name,Ox7,Ox385);Ox21[OxO2326[7]]=Ox386.GetText();} ;function ParseFloatToString(Ox1b){var Ox84=parseFloat(Ox1b);if(isNaN(Ox84)){return OxO2326[2];} ;return Ox84+OxO2326[2];} ;var sel_font=Window_GetElement(window,OxO2326[8],true);var div_font_detail=Window_GetElement(window,OxO2326[9],true);var sel_fontfamily=Window_GetElement(window,OxO2326[10],true);var cb_decoration_under=Window_GetElement(window,OxO2326[11],true);var cb_decoration_over=Window_GetElement(window,OxO2326[12],true);var cb_decoration_through=Window_GetElement(window,OxO2326[13],true);var cb_style_bold=Window_GetElement(window,OxO2326[14],true);var cb_style_italic=Window_GetElement(window,OxO2326[15],true);var sel_fontTransform=Window_GetElement(window,OxO2326[16],true);var sel_fontsize=Window_GetElement(window,OxO2326[17],true);var inp_fontsize=Window_GetElement(window,OxO2326[18],true);var sel_fontsize_unit=Window_GetElement(window,OxO2326[19],true);var inp_color=Window_GetElement(window,OxO2326[20],true);var inp_color_Preview=Window_GetElement(window,OxO2326[21],true);var outer=Window_GetElement(window,OxO2326[22],true);var div_demo=Window_GetElement(window,OxO2326[23],true);UpdateState=function UpdateState_Font(){inp_fontsize[OxO2326[24]]=sel_fontsize_unit[OxO2326[24]]=(sel_fontsize[OxO2326[25]]>0);div_font_detail[OxO2326[24]]=sel_font[OxO2326[25]]>0;div_demo[OxO2326[26]][OxO2326[7]]=element[OxO2326[26]][OxO2326[7]];} ;SyncToView=function SyncToView_Font(){sel_font[OxO2326[27]]=element[OxO2326[26]][OxO2326[28]].toLowerCase()||null;sel_fontfamily[OxO2326[27]]=element[OxO2326[26]][OxO2326[29]];inp_color[OxO2326[27]]=element[OxO2326[26]][OxO2326[30]];inp_color[OxO2326[26]][OxO2326[31]]=inp_color[OxO2326[27]];var Ox4c3=element[OxO2326[26]][OxO2326[32]].toLowerCase();cb_decoration_over[OxO2326[33]]=Ox4c3.indexOf(OxO2326[34])!=-1;cb_decoration_under[OxO2326[33]]=Ox4c3.indexOf(OxO2326[35])!=-1;cb_decoration_through[OxO2326[33]]=Ox4c3.indexOf(OxO2326[36])!=-1;cb_style_bold[OxO2326[33]]=element[OxO2326[26]][OxO2326[37]]==OxO2326[38];cb_style_italic[OxO2326[33]]=element[OxO2326[26]][OxO2326[39]]==OxO2326[40];sel_fontsize[OxO2326[27]]=element[OxO2326[26]][OxO2326[41]];sel_fontsize_unit[OxO2326[25]]=0;if(sel_fontsize[OxO2326[25]]==-1){if(ParseFloatToString(element[OxO2326[26]].fontSize)){sel_fontsize[OxO2326[27]]=ParseFloatToString(element[OxO2326[26]].fontSize);for(var i=0;i<sel_fontsize_unit[OxO2326[42]][OxO2326[1]];i++){var Ox2b=sel_fontsize_unit.options(i)[OxO2326[27]];if(Ox2b&&element[OxO2326[26]][OxO2326[41]].indexOf(Ox2b)!=-1){sel_fontsize_unit[OxO2326[25]]=i;break ;} ;} ;} ;} ;sel_fontTransform[OxO2326[27]]=element[OxO2326[26]][OxO2326[43]];} ;SyncTo=function SyncTo_Font(element){SetStyle(element.style,OxO2326[28],sel_font.value);if(sel_fontfamily[OxO2326[27]]){element[OxO2326[26]][OxO2326[29]]=sel_fontfamily[OxO2326[27]];} else {SetStyle(element.style,OxO2326[44],OxO2326[2]);} ;try{element[OxO2326[26]][OxO2326[30]]=inp_color[OxO2326[27]]||OxO2326[2];} catch(x){element[OxO2326[26]][OxO2326[30]]=OxO2326[2];} ;var Ox4c5=cb_decoration_over[OxO2326[33]];var Ox4c6=cb_decoration_under[OxO2326[33]];var Ox4c7=cb_decoration_through[OxO2326[33]];if(!Ox4c5&&!Ox4c6&&!Ox4c7){element[OxO2326[26]][OxO2326[32]]=OxO2326[2];} else {var Oxa=OxO2326[2];if(Ox4c5){Oxa+=OxO2326[45];} ;if(Ox4c6){Oxa+=OxO2326[46];} ;if(Ox4c7){Oxa+=OxO2326[47];} ;element[OxO2326[26]][OxO2326[32]]=Oxa.substr(0,Oxa[OxO2326[1]]-1);} ;element[OxO2326[26]][OxO2326[37]]=cb_style_bold[OxO2326[33]]?OxO2326[38]:OxO2326[2];element[OxO2326[26]][OxO2326[39]]=cb_style_italic[OxO2326[33]]?OxO2326[40]:OxO2326[2];element[OxO2326[26]][OxO2326[43]]=sel_fontTransform[OxO2326[27]]||OxO2326[2];if(sel_fontsize[OxO2326[25]]>0){element[OxO2326[26]][OxO2326[41]]=sel_fontsize[OxO2326[27]];} else {if(ParseFloatToString(inp_fontsize.value)){element[OxO2326[26]][OxO2326[41]]=ParseFloatToString(inp_fontsize.value)+sel_fontsize_unit[OxO2326[27]];} else {element[OxO2326[26]][OxO2326[41]]=OxO2326[2];} ;} ;} ;inp_color[OxO2326[48]]=inp_color_Preview[OxO2326[48]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;