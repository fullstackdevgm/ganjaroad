var OxOe187=["stringSearch","stringReplace","MatchWholeWord","MatchCase","document","checked","length","value","Nothing to search.","selection","body","type","Control","rangeCount","userAgent","endContainer","endOffset","editor","text","Finished Searching the document. Would you like to start again from the top?","","textedit"," : ","Please use replace function."];var editwin=Window_GetDialogArguments(window);var stringSearch=Window_GetElement(window,OxOe187[0],true);var stringReplace=Window_GetElement(window,OxOe187[1],true);var MatchWholeWord=Window_GetElement(window,OxOe187[2],true);var MatchCase=Window_GetElement(window,OxOe187[3],true);var editdoc=editwin[OxOe187[4]];function get_ie_matchtype(){var Ox20e=0;var Ox20f=0;var Ox210=0;if(MatchCase[OxOe187[5]]){Ox20f=4;} ;if(MatchWholeWord[OxOe187[5]]){Ox210=2;} ;Ox20e=Ox20f+Ox210;return (Ox20e);} ;function checkInputString(){if(stringSearch[OxOe187[7]][OxOe187[6]]<1){alert(OxOe187[8]);return false;} else {return true;} ;} ;function IsMatchSearchValue(Ox1b){if(!Ox1b){return false;} ;if(stringSearch[OxOe187[7]]==Ox1b){return true;} ;if(MatchCase[OxOe187[5]]){return false;} ;return stringSearch[OxOe187[7]].toLowerCase()==Ox1b.toLowerCase();} ;var _ie_range=null;function IE_Restore(){editwin.focus();if(_ie_range!=null){_ie_range.select();} ;} ;function IE_Save(){editwin.focus();_ie_range=editdoc[OxOe187[9]].createRange();} ;function MoveToBodyStart(){if(Browser_UseIESelection()){range=document[OxOe187[10]].createTextRange();range.collapse(true);range.select();IE_Save();} else {editwin.getSelection().collapse(editdoc.body,0);} ;} ;function DoFind(){if(Browser_UseIESelection()){IE_Restore();var Ox20=editdoc[OxOe187[9]];if(Ox20[OxOe187[11]]==OxOe187[12]){MoveToBodyStart();} ;var Ox114=Ox20.createRange();Ox114.collapse(false);if(Ox114.findText(stringSearch.value,1000000000,get_ie_matchtype())){Ox114.select();IE_Save();return true;} ;} else {var Ox114;var Ox20=editwin.getSelection();if(Ox20[OxOe187[13]]>0){Ox114=editwin.getSelection().getRangeAt(0);} ;if(navigator[OxOe187[14]].match(/Trident/)){return editwin[OxOe187[17]].FindText(editwin,{node:Ox114[OxOe187[15]],offset:Ox114[OxOe187[16]]},stringSearch.value,MatchCase.checked,MatchWholeWord.checked);} else {if(editwin.find(stringSearch.value,MatchCase.checked,false,false,MatchWholeWord.checked,false,false)){return true;} ;} ;} ;} ;function DoReplace(){if(Browser_UseIESelection()){IE_Restore();var Ox20=editdoc[OxOe187[9]];if(Ox20[OxOe187[11]]!=OxOe187[12]){var Ox114=Ox20.createRange();if(IsMatchSearchValue(Ox114.text)){Ox114[OxOe187[18]]=stringReplace[OxOe187[7]];Ox114.collapse(false);IE_Save();return true;} ;} ;} else {var Ox20=editwin.getSelection();if(IsMatchSearchValue(Ox20.toString())){Ox20.deleteFromDocument();Ox20.getRangeAt(0).insertNode(editdoc.createTextNode(stringReplace.value));Ox20.getRangeAt(0).collapse(false);return true;} ;} ;return false;} ;function FindTxt(){if(!checkInputString()){return false;} ;while(true){if(DoFind()){return ;} ;if(!confirm(OxOe187[19])){return ;} ;MoveToBodyStart();} ;} ;function ReplaceTxt(){if(!checkInputString()){return ;} ;DoReplace();FindTxt();} ;function ReplaceAllTxt(){if(!checkInputString()){return ;} ;var Ox21c=0;var msg=OxOe187[20];MoveToBodyStart();if(Browser_UseIESelection()){var Ox20=editdoc[OxOe187[9]];if(Ox20[OxOe187[11]]==OxOe187[12]){MoveToBodyStart();} ;var Ox21d=Ox20.createRange();var Ox21c=0;var msg=OxOe187[20];Ox21d.expand(OxOe187[21]);Ox21d.collapse();Ox21d.select();while(Ox21d.findText(stringSearch.value,1000000000,get_ie_matchtype())){Ox21d.select();Ox21d[OxOe187[18]]=stringReplace[OxOe187[7]];Ox21c++;} ;if(Ox21c==0){msg=WordNotFound;} else {msg=WordReplaced+OxOe187[22]+Ox21c;} ;alert(msg);} else {if((stringReplace[OxOe187[7]]).indexOf(stringSearch.value)==-1){DoFind();while(DoReplace()){Ox21c++;DoFind();FindTxt();} ;if(Ox21c==0){msg=WordNotFound;} else {msg=WordReplaced+OxOe187[22]+Ox21c;} ;alert(msg);} else {FindTxt();alert(OxOe187[23]);} ;} ;} ;