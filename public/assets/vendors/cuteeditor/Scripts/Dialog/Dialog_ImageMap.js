var OxOd0c0=["contains","parentNode","selection","document","type","None","Text","body","rangeCount","window","Control","anchorOffset","childNodes","anchorNode","isCollapsed","focusNode","length","nodeType","nodeName","INPUT","TEXTAREA","BUTTON","IMG","SELECT","TABLE","position","style","absolute","relative","top","contentWindow","contentDocument","parentWindow","id","frames","frameElement","//TODO:frame contentWindow not found?","iframe","editor","img","onload","src","","src_cetemp","contentEditable","designMode","on","clearAttributes","marginTop","0","marginLeft","color","black","background","white","unselectable","2D-Position","LiveResize","innerHTML","outerHTML","MAP","name","useMap","#","areas","href","target","alt","coords",",","\x3Cimg id=\x27myIMAGE","\x27 border=1 src=\x27Images/space.gif\x27 title=\x27","\x27 style=\x27position:absolute;left:","px;top:","px;width:","px;height:","px;z-index:","\x27\x3E","MapLink.php","dialogWidth:380px;dialogHeight:200px;help:no;scroll:no;status:no;resizable:0;","zoom","width","height","\x27  border=1 src=\x27Images/space.gif\x27 title=\x27","\x27 style=\x27position:absolute;z-index:",";width:20;height:20;left:",";top:","myIMAGE","\x3Carea shape=\x27rect\x27 coords=\x27","\x27","href=\x27","\x27 ","target=\x27","alt=\x27","\x3E","PasteHTML","\x3Cmap name=\x27","\x3C/map\x3E","off","AutoMap","display","img_zoom_in","none","img_zoom_out","img_bestfit","img_actualsize"];function Element_Contains(element,Ox68){if(!Browser_IsOpera()){if(element[OxOd0c0[0]]){return element.contains(Ox68);} ;} ;for(;Ox68!=null;Ox68=Ox68[OxOd0c0[1]]){if(element==Ox68){return true;} ;} ;return false;} ;function Window_CreateSelectionRange(Ox90){var Ox114;if(Browser_UseIESelection()){var Ox20=Ox90[OxOd0c0[3]][OxOd0c0[2]];if(Ox20[OxOd0c0[4]]==OxOd0c0[5]||Ox20[OxOd0c0[4]]==OxOd0c0[6]){Ox114=Ox20.createRange();} else {Ox114=document[OxOd0c0[7]].createTextRange();Ox114.moveToElement(Ox20.createRange().item(0));} ;} else {var Ox20=Ox90.getSelection();if(Ox20[OxOd0c0[8]]==0){Ox114=Ox90[OxOd0c0[3]].createRange();} else {Ox114=Ox20.getRangeAt(0).cloneRange();} ;} ;Ox114[OxOd0c0[9]]=Ox90;return Ox114;} ;function Window_GetSelectionNode(Ox90){var Ox68=Window_GetSelectionNode_Core(Ox90);if(Ox68==Ox90[OxOd0c0[3]][OxOd0c0[7]]){return null;} ;if(!Element_Contains(Ox90[OxOd0c0[3]].body,Ox68)){return null;} ;return Ox68;} ;function Window_GetSelectionNode_Core(Ox90){var Ox20;if(Browser_UseIESelection()){Ox20=Ox90[OxOd0c0[3]][OxOd0c0[2]];if(Ox20[OxOd0c0[4]]==OxOd0c0[5]||Ox20[OxOd0c0[4]]==OxOd0c0[6]){return Ox20.createRange().parentElement();} ;return Ox20.createRange().item(0);} ;var Ox20=Ox90.getSelection();if(Window_GetSelectionType(Ox90)==OxOd0c0[10]){return Ox20[OxOd0c0[13]][OxOd0c0[12]][Ox20[OxOd0c0[11]]];} ;if(Ox20[OxOd0c0[14]]){return Ox20[OxOd0c0[13]];} ;if(Ox20[OxOd0c0[13]]==Ox20[OxOd0c0[15]]){return Ox20[OxOd0c0[13]];} ;var p=Ox20[OxOd0c0[13]];var Ox240=p[OxOd0c0[12]];for(var i=0;i<Ox240[OxOd0c0[16]];i++){var Ox135=Ox240.item(i);if(Ox20.containsNode(Ox135,true)){if(i!=0&&Ox20.containsNode(Ox240.item(i-1),false)){continue ;} ;if(i<Ox240[OxOd0c0[16]]-1&&Ox20.containsNode(Ox240.item(i+1),false)){continue ;} ;return Ox135;} ;} ;if(Ox20[OxOd0c0[8]]==1){return Range_GetParentNode(Window_CreateSelectionRange(Ox90));} ;if(!Element_Contains(Ox90[OxOd0c0[3]].body,Ox20.anchorNode)){return null;} ;return Element_GetSameParent(Ox20.anchorNode,Ox20.focusNode);} ;function Window_GetSelectionElement(Ox90){var Ox68=Window_GetSelectionNode(Ox90);if(Ox68==null){return null;} ;if(Ox68[OxOd0c0[17]]==1){return Ox68;} ;return Ox68[OxOd0c0[1]];} ;function Window_GetSelectionType(Ox90){if(Browser_UseIESelection()){return Ox90[OxOd0c0[3]][OxOd0c0[2]][OxOd0c0[4]];} ;var Ox20=Ox90.getSelection();if(Ox20[OxOd0c0[14]]){return OxOd0c0[6];} ;if(Ox20[OxOd0c0[13]]!=Ox20[OxOd0c0[15]]){return OxOd0c0[6];} ;var p=Ox20[OxOd0c0[13]];var Ox240=p[OxOd0c0[12]];for(var i=0;i<Ox240[OxOd0c0[16]];i++){var Ox135=Ox240.item(i);if(Ox135[OxOd0c0[17]]!=1){continue ;} ;if(Ox20.containsNode(Ox135,true)){if(i!=0&&Ox20.containsNode(Ox240.item(i-1),false)){continue ;} ;if(i<Ox240[OxOd0c0[16]]-1&&Ox20.containsNode(Ox240.item(i+1),false)){continue ;} ;if(Element_IsBlockControl(Ox135)){return OxOd0c0[10];} ;return OxOd0c0[6];} ;} ;return OxOd0c0[6];} ;function Element_IsBlockControl(element){var name=element[OxOd0c0[18]];if(name==OxOd0c0[19]){return true;} ;if(name==OxOd0c0[20]){return true;} ;if(name==OxOd0c0[21]){return true;} ;if(name==OxOd0c0[22]){return true;} ;if(name==OxOd0c0[23]){return true;} ;if(name==OxOd0c0[24]){return true;} ;var Ox34=element[OxOd0c0[26]][OxOd0c0[25]];if(Ox34==OxOd0c0[27]||Ox34==OxOd0c0[28]){return true;} ;return false;} ;function Window_GetDialogTop(Ox90){return Ox90[OxOd0c0[29]];} ;function Frame_GetContentWindow(Ox246){if(Ox246[OxOd0c0[30]]){return Ox246[OxOd0c0[30]];} ;if(Ox246[OxOd0c0[31]]){if(Ox246[OxOd0c0[31]][OxOd0c0[32]]){return Ox246[OxOd0c0[31]][OxOd0c0[32]];} ;} ;var Ox90;if(Ox246[OxOd0c0[33]]){Ox90=window[OxOd0c0[34]][Ox246[OxOd0c0[33]]];if(Ox90){return Ox90;} ;} ;var len=window[OxOd0c0[34]][OxOd0c0[16]];for(var i=0;i<len;i++){Ox90=window[OxOd0c0[34]][i];if(Ox90[OxOd0c0[35]]==Ox246){return Ox90;} ;if(Ox90[OxOd0c0[3]]==Ox246[OxOd0c0[31]]){return Ox90;} ;} ;Debug_Todo(OxOd0c0[36]);} ;var iframe=Window_GetElement(window,OxOd0c0[37],true);var iframe_win=Frame_GetContentWindow(iframe);var obj=Window_GetDialogArguments(window);var editor=obj[OxOd0c0[38]];var editwin=obj[OxOd0c0[9]];var editdoc=obj[OxOd0c0[3]];var oImg=obj[OxOd0c0[39]];var oMap=null;var aMapName= new Array();var aLeft= new Array();var aTop= new Array();var aWidth= new Array();var aHeight= new Array();var aHref= new Array();var aTarget= new Array();var aTitle= new Array();var aCoords= new Array();window[OxOd0c0[40]]=function window_onload(){var src;src=oImg.getAttribute(OxOd0c0[41])+OxOd0c0[42];if(oImg.getAttribute(OxOd0c0[43])){src=oImg.getAttribute(OxOd0c0[43])+OxOd0c0[42];} ;oImg[OxOd0c0[41]]=src;if(Browser_IsWinIE()){iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[44]]=true;} else {iframe_win[OxOd0c0[3]][OxOd0c0[45]]=OxOd0c0[46];iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[44]]=true;} ;iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[47]];iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[48]]=OxOd0c0[49];iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[50]]=OxOd0c0[49];iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[51]]=OxOd0c0[52];iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[53]]=OxOd0c0[54];oImg[OxOd0c0[55]]=OxOd0c0[46];if(Browser_IsWinIE()){iframe_win[OxOd0c0[3]].execCommand(OxOd0c0[56],true,true);iframe_win[OxOd0c0[3]].execCommand(OxOd0c0[57],true,true);} ;iframe_win.focus();if(Browser_IsWinIE()){iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[58]]=oImg[OxOd0c0[59]];} else {iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[58]]=outerHTML(oImg);} ;var Ox254=editdoc[OxOd0c0[7]].getElementsByTagName(OxOd0c0[60]);for(var i=0;i<Ox254[OxOd0c0[16]];i++){aMapName[i]=Ox254[i][OxOd0c0[61]].toUpperCase();} ;var Ox255=oImg[OxOd0c0[62]];if(Ox255!=OxOd0c0[42]){Ox255=Ox255.toUpperCase();for(var i=0;i<Ox254[OxOd0c0[16]];i++){if((OxOd0c0[63]+aMapName[i])==Ox255){oMap=Ox254[i];} ;} ;} ;if(oMap){for(var i=0;i<oMap[OxOd0c0[64]][OxOd0c0[16]];i++){aHref[i]=oMap[OxOd0c0[64]][i][OxOd0c0[65]];aTarget[i]=oMap[OxOd0c0[64]][i][OxOd0c0[66]];aTitle[i]=oMap[OxOd0c0[64]][i][OxOd0c0[67]];aCoords[i]=oMap[OxOd0c0[64]][i][OxOd0c0[68]];var Ox160=aCoords[i].split(OxOd0c0[69]);aLeft[i]=parseInt(Ox160[0]);aTop[i]=parseInt(Ox160[1]);aWidth[i]=parseInt(Ox160[2])-aLeft[i];aHeight[i]=parseInt(Ox160[3])-aTop[i];iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[58]]+=OxOd0c0[70]+i+OxOd0c0[71]+AddLinktoImageMap+OxOd0c0[72]+aLeft[i]+OxOd0c0[73]+aTop[i]+OxOd0c0[74]+aWidth[i]+OxOd0c0[75]+aHeight[i]+OxOd0c0[76]+(i+1)+OxOd0c0[77];} ;} ;} ;function SearchSelectionElement(Ox257){var body=iframe_win[OxOd0c0[3]][OxOd0c0[7]];for(var Ox3a=Window_GetSelectionElement(iframe_win);Element_Contains(body,Ox3a);Ox3a=Ox3a[OxOd0c0[1]]){if(Ox3a[OxOd0c0[18]]==Ox257){return Ox3a;} ;} ;return null;} ;function Addlink(){var img=SearchSelectionElement(OxOd0c0[22]);if(!img){return ;} ;function Ox25b(arr){if(arr){aHref[Ox25d]=arr[0];aTarget[Ox25d]=arr[1];aTitle[Ox25d]=arr[2];} ;} ;var Ox25c=img[OxOd0c0[33]];var Ox25d=parseInt(Ox25c.substr(7));var obj={editor:editor,href:aHref[Ox25d],target:aTarget[Ox25d],title:aTitle[Ox25d]};editor.SetNextDialogWindow(window);editor.ShowDialog(Ox25b,OxOd0c0[78]+query_string,obj,OxOd0c0[79]);} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;function Zoom_In(){if(iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[80]]!=0){iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[80]]*=1.2;} else {iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[80]]=1.2;} ;} ;function Zoom_Out(){if(iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[80]]!=0){iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[80]]*=0.8;} else {iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[80]]=0.8;} ;} ;function BestFit(){if(!oImg){return ;} ;var Ox261=280;var Ox33=290;iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[80]]=1/Math.max(oImg[OxOd0c0[81]]/Ox33,oImg[OxOd0c0[82]]/Ox261);} ;function Actualsize(){iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[26]][OxOd0c0[80]]=1;} ;function newMap(){var Ox8d=aHref[OxOd0c0[16]];var Ox264=(oImg[OxOd0c0[81]]-20)*0.5;var Ox237=(oImg[OxOd0c0[82]]-20)*0.5;aHref[Ox8d]=OxOd0c0[42];aTarget[Ox8d]=OxOd0c0[42];aTitle[Ox8d]=OxOd0c0[42];iframe_win[OxOd0c0[3]][OxOd0c0[7]][OxOd0c0[58]]+=OxOd0c0[70]+Ox8d+OxOd0c0[83]+AddLinktoImageMap+OxOd0c0[84]+(Ox8d+1)+OxOd0c0[85]+Ox264+OxOd0c0[86]+Ox237+OxOd0c0[77];iframe_win.scrollBy(0,0);iframe_win.focus();} ;function do_insert(){var Ox3b=false;for(var i=0;i<aHref[OxOd0c0[16]];i++){var obj=Window_GetElement(iframe_win,OxOd0c0[87]+i,false);if(obj){Ox3b=true;} ;} ;if(Ox3b){var Ox177=OxOd0c0[42];for(var i=0;i<aHref[OxOd0c0[16]];i++){var obj=Window_GetElement(iframe_win,OxOd0c0[87]+i,false);if(obj){var Ox265=parseInt(obj[OxOd0c0[26]].left);var Ox266=parseInt(obj[OxOd0c0[26]].top);var Ox267=parseInt(obj[OxOd0c0[26]].width);var Ox268=parseInt(obj[OxOd0c0[26]].height);var Ox269=Ox265+Ox267;var Ox26a=Ox266+Ox268;Ox177+=OxOd0c0[88]+Ox265+OxOd0c0[69]+Ox266+OxOd0c0[69]+Ox269+OxOd0c0[69]+Ox26a+OxOd0c0[89];if(aHref[i]!=OxOd0c0[42]){Ox177+=OxOd0c0[90]+aHref[i]+OxOd0c0[91];} ;if((aTarget[i]!=OxOd0c0[42])&&aTarget[i]){Ox177+=OxOd0c0[92]+aTarget[i]+OxOd0c0[91];} ;if(aTitle[i]!=OxOd0c0[42]&&aTitle[i]!=null){Ox177+=OxOd0c0[93]+aTitle[i]+OxOd0c0[91];} ;Ox177+=OxOd0c0[94];} ;} ;if(oMap){oMap[OxOd0c0[58]]=Ox177;} else {var Ox255=getAutoMapName();oImg[OxOd0c0[62]]=OxOd0c0[63]+Ox255;editor.ExecCommand(OxOd0c0[95],false,OxOd0c0[96]+Ox255+OxOd0c0[77]+Ox177+OxOd0c0[97]);} ;} else {if(oMap){if(Browser_IsWinIE()){oMap[OxOd0c0[59]]=OxOd0c0[42];} ;} ;oImg[OxOd0c0[62]]=OxOd0c0[42];} ;oImg[OxOd0c0[55]]=OxOd0c0[98];oImg.removeAttribute(OxOd0c0[55]);if(!Browser_IsWinIE()){editor.InsertElement(oImg);} ;Window_CloseDialog(window);} ;function getAutoMapName(){for(var i=1;true;i++){var Ox49=OxOd0c0[99]+i;if(isValidMapName(Ox49)){return Ox49;} ;} ;} ;function isValidMapName(Ox1b){Ox1b=Ox1b.toUpperCase();for(var i=0;i<aMapName[OxOd0c0[16]];i++){if(aMapName[i]==Ox1b){return false;} ;} ;return true;} ;function do_Close(){oImg.removeAttribute(OxOd0c0[55]);Window_CloseDialog(window);} ;if(!Browser_IsWinIE()){Window_GetElement(window,OxOd0c0[101],true)[OxOd0c0[26]][OxOd0c0[100]]=OxOd0c0[102];Window_GetElement(window,OxOd0c0[103],true)[OxOd0c0[26]][OxOd0c0[100]]=OxOd0c0[102];Window_GetElement(window,OxOd0c0[104],true)[OxOd0c0[26]][OxOd0c0[100]]=OxOd0c0[102];Window_GetElement(window,OxOd0c0[105],true)[OxOd0c0[26]][OxOd0c0[100]]=OxOd0c0[102];} ;