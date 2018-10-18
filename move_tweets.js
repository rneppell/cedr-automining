/*

Licensed by CEDR Digital Corps for re-use under the terms of the Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)

SUMMARY

You are free to:
Share — copy and redistribute the material in any medium or format
Adapt — remix, transform, and build upon the material for any purpose, even commercially.

The licensor cannot revoke these freedoms as long as you follow the license terms.


Under the following terms:
Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

Notices:
You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.
No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.


This is a human-readable summary of (and not a substitute for) the full license terms, which can be found at https://creativecommons.org/licenses/by-sa/4.0/legalcode

*/

function move_tweets()
{

    
    var SPsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  SpreadsheetApp.setActiveSheet(SPsheet.getSheetByName('Needs_Tweets'))  
  var sheet = SpreadsheetApp.getActiveSheet();

 
  
    var numadded = 0;
  
  	var controlsheet = SpreadsheetApp.getActive().getSheetByName('Control')		
	var controldata = controlsheet.getDataRange().getValues();  
	controlrow = controldata[0];
	maxid = controlrow[1];   

 
    var ss = SpreadsheetApp.getActive().getSheetByName('Needs_Tweets')		    
	var target = SpreadsheetApp.getActive().getSheetByName('Needs_Master')	
    var data = ss.getDataRange().getValues();
  
    var rowcounter = 0;
  
	for (i in data)
	{    
      rowcounter = rowcounter + 1;
      var row = data[i]; 
    
      rowid = row[4]; /* The twitter unique ID is in the 4th column of the sheet */      
      textvar = row[6];      
      textvar_two = textvar.substring(0,2)      
      
       /*  maxid=1;   Uncomment when doing setup of new search; comment out during normal operations   */
      
      
		if (textvar_two != "RT")
		{            
			if (rowid>maxid)
			{              
				if (i > 0)
				{
					rowrange = ss.getRange(rowcounter, 1, 1, ss.getLastColumn()-1);		
					target.appendRow(rowrange.getValues()[0]);
                    
                    numadded = numadded + 1;
                    
				}   
			} 		  		  		  
		}    
	}
  
  
  if (numadded > 0)
  {
  
  var SPsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  SpreadsheetApp.setActiveSheet(SPsheet.getSheetByName('Needs_Master'))  
  var sheet = SpreadsheetApp.getActiveSheet();

  var data = sheet.getDataRange().getValues();
  var newData = new Array();
  for(i in data){
    var row = data[i];
    var duplicate = false;
    for(j in newData){
      if(row[5] == newData[j][5]){
        duplicate = true;
      }
      
      
    }
    if(!duplicate){
      newData.push(row);
    }
  }
  sheet.clearContents();
  sheet.getRange(1, 1, newData.length, newData[0].length)
      .setValues(newData);
    
  
  
  
/* MOVE TO GOLD   */
  
    var ss_gold = SpreadsheetApp.getActive().getSheetByName('Needs_Master')		
    var lastrow_gold = ss_gold.getLastRow();  
    var target_gold = SpreadsheetApp.getActive().getSheetByName('Needs_Gold')
    var data_gold = ss_gold.getDataRange().getValues();
    var lastcol_gold = ss_gold.getLastColumn()-1
  
    var blockarray = ["NWSRaleigh","CEDRdigital","patriciaaknight","NWSBlacksburg","NWSMoreheadCity","NWSWilmingtonNC","DjJWattsLive","fayobserver","WFMY","Sphesihle199204","FoxNews","wachfox","astuteinvesting","80sFootballCard","ActionNewsJax","TropicsWeather","JaclynWSOC9","PuroClnChicago","MicroFocusIMG","MikeFirstAlert","PuroCleanRedmnd","SWPRandBROC","jhfcduke","nclottery","NicoleNalepaTV","LiddysPleasure","sobaliving","FSUBroncos","gdimeweather","JeffLRobinette","AAFSingapore","MOBaptists_DR","NBCNews","WJHG_TV","BradNitzWSB","KaliePluchelWX","JeffSmithABC7","KerriWFXL","CanadianWater","AWISWeather","MSNBC","NHC_Surge","WFXRWeather","NWSTallahassee","CBSEveningNews","weatherchannel","KSLAWeather","NWSMobile","TheUrbanNewz","Daily_Express","NBCNews","ABC7NY","abc13houston"];

    
    var rowcounter_gold = 0;
  
	for (ig in data_gold)
	{    
      rowcounter_gold = rowcounter_gold + 1;
      var rowg = data_gold[ig]; 
  
      if (rowg[0] != 1 && rowg[0] != 2 && rowg[4] > 0)
      {        
        
        if ( blockarray.indexOf(rowg[20]) > -1 )        
        {
        var cellg = ss_gold.getRange(rowcounter_gold, 1);      
        cellg.setValue(2);                             
        }
        else
        {
         
        rowrangeg = ss_gold.getRange(rowcounter_gold, 1, 1, lastcol_gold)		
        target_gold.appendRow(rowrangeg.getValues()[0])

        var cellg = ss_gold.getRange(rowcounter_gold, 1);      
        cellg.setValue(1);               
          
        }                                
      }
      
  
  }  
    
    
  
  
  }


  
}
