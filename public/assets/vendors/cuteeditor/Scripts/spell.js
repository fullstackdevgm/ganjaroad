var OxO6d5f=["INPUT","TEXTAREA","DIV","SPAN","","contentWindow","innerHTML","body","document","length","type","text","id","isContentEditable","showModalDialog","?","?Modal=true","\x26Modal=true","dialogHeight:340px; dialogWidth:395px; edge:Raised; center:Yes; help:No; resizable:Yes; status:No; scroll:No","newWindow","height=300,width=400,scrollbars=no,resizable=no,toolbars=no,status=no,menubar=no,location=no","ElementIndex","dialogArguments","window","opener","value","SpellMode","start","suggest","end","SpellingForm","checkElements","innerText","StatusText","Spell Checking Text ...","CurrentText","WordIndex","Spell Check Complete","selectedIndex","ReplacementWord","form","options"];var showCompleteAlert=true;var tagGroup= new Array(OxO6d5f[0],OxO6d5f[1],OxO6d5f[2],OxO6d5f[3]);var checkElements= new Array();function getText(Oxe8){var Oxe9=document.getElementById(checkElements[Oxe8]);var Oxea=OxO6d5f[4];var Oxeb=document.getElementById(Oxe9.id);if(Oxeb[OxO6d5f[5]]){Oxea=Oxeb[OxO6d5f[5]][OxO6d5f[8]][OxO6d5f[7]][OxO6d5f[6]];} else {Oxea=Oxeb[OxO6d5f[8]][OxO6d5f[7]][OxO6d5f[6]];} ;return Oxea;} ;function setText(Oxe8,Oxed){var Oxe9=document.getElementById(checkElements[Oxe8]);var Oxeb=document.getElementById(Oxe9.id);if(Oxeb[OxO6d5f[5]]){Oxeb[OxO6d5f[5]][OxO6d5f[8]][OxO6d5f[7]][OxO6d5f[6]]=Oxed;} else {Oxeb[OxO6d5f[8]][OxO6d5f[7]][OxO6d5f[6]]=Oxed;} ;} ;function checkSpelling(){checkElements= new Array();for(var i=0;i<tagGroup[OxO6d5f[9]];i++){var Oxef=tagGroup[i];var Oxf0=document.getElementsByTagName(Oxef);for(var Oxf1=0;Oxf1<Oxf0[OxO6d5f[9]];Oxf1++){if((Oxef==OxO6d5f[0]&&Oxf0[Oxf1][OxO6d5f[10]]==OxO6d5f[11])||Oxef==OxO6d5f[1]){checkElements[checkElements[OxO6d5f[9]]]=Oxf0[Oxf1][OxO6d5f[12]];} else {if((Oxef==OxO6d5f[2]||Oxef==OxO6d5f[3])&&Oxf0[Oxf1][OxO6d5f[13]]){checkElements[checkElements[OxO6d5f[9]]]=Oxf0[Oxf1][OxO6d5f[12]];} ;} ;} ;} ;openSpellChecker();} ;function checkSpellingById(Oxaa,Oxf3){checkElements= new Array();checkElements[checkElements[OxO6d5f[9]]]=Oxaa;openSpellChecker(Oxf3);} ;function checkElementSpelling(Oxe9){checkElements= new Array();checkElements[checkElements[OxO6d5f[9]]]=Oxe9[OxO6d5f[12]];openSpellChecker();} ;function openSpellChecker(Oxf3){if(window[OxO6d5f[14]]){var Oxf6;if(Oxf3.indexOf(OxO6d5f[15])==-1){Oxf6=OxO6d5f[16];} else {Oxf6=OxO6d5f[17];} ;var Oxf7=window.showModalDialog(Oxf3+Oxf6,window,OxO6d5f[18]);} else {var Oxf8=window.open(Oxf3,OxO6d5f[19],OxO6d5f[20]);} ;} ;var iElementIndex=-1;var parentWindow;function initialize(){iElementIndex=parseInt(document.getElementById(OxO6d5f[21]).value);if(parent[OxO6d5f[23]][OxO6d5f[22]]){parentWindow=parent[OxO6d5f[23]][OxO6d5f[22]];} else {if(top[OxO6d5f[24]]){parentWindow=top[OxO6d5f[24]];} ;} ;var Oxfc=document.getElementById(OxO6d5f[26])[OxO6d5f[25]];switch(Oxfc){case OxO6d5f[27]:break ;;case OxO6d5f[28]:updateText();break ;;case OxO6d5f[29]:updateText();;default:if(loadText()){document.getElementById(OxO6d5f[30]).submit();} else {endCheck();} ;break ;;} ;} ;function loadText(){if(!parentWindow[OxO6d5f[8]]){return false;} ;for(++iElementIndex;iElementIndex<parentWindow[OxO6d5f[31]][OxO6d5f[9]];iElementIndex++){var Oxfe=parentWindow.getText(iElementIndex);if(Oxfe[OxO6d5f[9]]>0){updateSettings(Oxfe,0,iElementIndex,OxO6d5f[27]);document.getElementById(OxO6d5f[33])[OxO6d5f[32]]=OxO6d5f[34];return true;} ;} ;return false;} ;function updateSettings(Ox100,Ox101,Ox102,Ox103){document.getElementById(OxO6d5f[35])[OxO6d5f[25]]=Ox100;document.getElementById(OxO6d5f[36])[OxO6d5f[25]]=Ox101;document.getElementById(OxO6d5f[21])[OxO6d5f[25]]=Ox102;document.getElementById(OxO6d5f[26])[OxO6d5f[25]]=Ox103;} ;function updateText(){if(!parentWindow[OxO6d5f[8]]){return false;} ;var Oxfe=document.getElementById(OxO6d5f[35])[OxO6d5f[25]];parentWindow.setText(iElementIndex,Oxfe);} ;function endCheck(){if(showCompleteAlert){alert(OxO6d5f[37]);} ;closeWindow();} ;function closeWindow(){top.close();} ;function changeWord(Oxe9){var Ox108=Oxe9[OxO6d5f[38]];Oxe9[OxO6d5f[40]][OxO6d5f[39]][OxO6d5f[25]]=Oxe9[OxO6d5f[41]][Ox108][OxO6d5f[25]];} ;