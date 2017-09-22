//---------------------------------------------
_app_id='woolcock_zopiclone_';
//---------------------------------------------
var main__ID=function(){
    //---------------------------------------------
    var L=$vm.module_list;
    var A=_app_id;
	var B=$vm.hosting_path+'/modules/dynamic';
    var T=$vm.hosting_path+'/modules/dynamic/zopiclone/task';
    //---------------------------------------------
    //database table:
    var participant_tid     ='20000435';
    var task_notes_tid      ='20000439';

    var login_setup_tid     ='20010819';
    var visit_booking_tid   ='20010820';
    var site_filter_tid     ='20010821';
    //---------------------------------------------
    //variables used inside modules
    var v={
        app_id:_app_id,
        participant_tid:participant_tid,
        clinical_trials_notes_tid:task_notes_tid,
        site_filter_tid:site_filter_tid,
        login_setup_tid:login_setup_tid,
        sql_participant:"@('Local_ID')",
        participant_login_setup:    A+'participant_login_setup',
        data_entry_by_staff:        A+'data_entry_by_staff',
        data_entry_by_participant:  A+'data_entry_by_participant',
    }
    //---------------------------------------------
	//panels
    L[A+'data_entry_by_staff']=         {table_id:'',var:v,url:B+'/zopiclone/panels/data_entry_by_staff.html'};
    //---------------------------------------------
    //
    L[A+'participant']=                 {table_id:participant_tid,      var:v,  url:B+'/zopiclone/participant.html'};
    L[A+'clinical_trials_notes']    =   {table_id:task_notes_tid,       var:v,  url:B+'/zopiclone/task_notes.html'};
    //---------------------------------------------
	//General
	L[A+'File_Notes']=                 {table_id:'20000394',var:v,url:T+'/general/file_notes.html'};
	//Adverse Event & Concom
	L[A+'edf_upload_file']=            {table_id:'20007182',var:v,url:T+'/forms/edf_file_upload.html'};
	L[A+'Severe_Adverse_Event']=       {table_id:'20000395',var:v,url:T+'/adverse_event_and_concom/severe_adverse_event.html'};
	L[A+'Severe_Adverse_Event_Follow_Up']=       {table_id:'20000395',var:v,url:T+'/adverse_event_and_concom/severe_adverse_event_follow_up.html'};
	L[A+'Adverse_Event']=       {table_id:'20000395',var:v,url:T+'/adverse_event_and_concom/adverse_event.html'};
	L[A+'Concom_Medication']=       {table_id:'20000395',var:v,url:T+'/adverse_event_and_concom/concom_medication.html'};
	L[A+'Screening_Evening_Visit_Date']= {table_id:'20000399',var:v,url:T+'/forms/visit_date.html'};
	L[A+'Screening_Evening_FOSQ']= {table_id:'20000400',var:v,url:T+'/forms/fosq.html'};
	L[A+'Screening_Evening_ESS']= {table_id:'20000401',var:v,url:T+'/forms/ess.html'};
	L[A+'Screening_Evening_KSS']= {table_id:'20000402',var:v,url:T+'/forms/kss.html'};
	L[A+'Screening_Evening_Aused_File_Upload']= {table_id:'20000403',var:v,url:T+'/forms/aused_file_upload.html'};
	L[A+'Screening_Evening_Aused_Result']= {table_id:'20008485',var:v,url:T+'/forms/aused_30m.html'};
	L[A+'Screening_Morning_Leeds']= {table_id:'20000404',var:v,url:T+'/forms/leeds.html'};
	L[A+'Screening_Morning_KSS']= {table_id:'20000405',var:v,url:T+'/forms/kss.html'};
	L[A+'Screening_Morning_Aused_File_Upload']= {table_id:'20000406',var:v,url:T+'/forms/aused_file_upload.html'};
	L[A+'Screening_Morning_Aused_Result']= {table_id:'20008484',var:v,url:T+'/forms/aused_30m.html'};
	L[A+'Baseline_Evening_Visit_Date']= {table_id:'20000407',var:v,url:T+'/forms/visit_date.html'};
	L[A+'Baseline_Evening_FOSQ']= {table_id:'20000408',var:v,url:T+'/forms/fosq.html'};
	L[A+'Baseline_Evening_ESS']= {table_id:'20000409',var:v,url:T+'/forms/ess.html'};
	L[A+'Baseline_Evening_KSS']= {table_id:'20000410',var:v,url:T+'/forms/kss.html'};
	L[A+'Baseline_Morning_Leeds']= {table_id:'20000411',var:v,url:T+'/forms/leeds.html'};
	L[A+'Baseline_Morning_KSS']= {table_id:'20000412',var:v,url:T+'/forms/kss.html'};
	L[A+'Baseline_Morning_Aused_File_Upload']= {table_id:'20000413',var:v,url:T+'/forms/aused_file_upload.html'};
	L[A+'Baseline_Morning_Aused_Result']= {table_id:'20008486',var:v,url:T+'/forms/aused_30m.html'};
	L[A+'Baseline_Morning_Paperwork_File_Upload']= {table_id:'20000414',var:v,url:T+'/forms/paperwork_file_upload.html'};
	//Baseline_Morning_EDF_File_Upload']= {table_id:'20005515',var:v,url:T+'/forms/File_Upload.html'};
	L[A+'Baseline_Morning_Arousal_File_Upload']= {table_id:'20005516',var:v,url:T+'/forms/arousal_file_upload.html'};
	L[A+'Baseline_Morning_Sleep_Scoring_File_Upload']= {table_id:'20005517',var:v,url:T+'/forms/sleep_scoring_upload.html'};
	L[A+'Baseline_Morning_PSG300_Report']= {table_id:'20008366',var:v,url:T+'/forms/psg300.html'};
	L[A+'Night_1_Evening_Visit_Date']= {table_id:'20000415',var:v,url:T+'/forms/visit_date.html'};
	L[A+'Night_1_Evening_FOSQ']= {table_id:'20000416',var:v,url:T+'/forms/fosq.html'};
	L[A+'Night_1_Evening_ESS']= {table_id:'20000417',var:v,url:T+'/forms/ess.html'};
	L[A+'Night_1_Evening_KSS']= {table_id:'20000418',var:v,url:T+'/forms/kss.html'};
	L[A+'Night_1_Morning_Leeds']= {table_id:'20000419',var:v,url:T+'/forms/leeds.html'};
	L[A+'Night_1_Morning_KSS']= {table_id:'20000420',var:v,url:T+'/forms/kss.html'};
	L[A+'Night_1_Morning_Aused_File_Upload']= {table_id:'20000421',var:v,url:T+'/forms/aused_file_upload.html'};
	L[A+'Night_1_Morning_Aused_Result']= {table_id:'20008487',var:v,url:T+'/forms/aused_30m.html'};
	L[A+'Night_1_Morning_Paperwork_File_Upload']= {table_id:'20000422',var:v,url:T+'/forms/paperwork_file_upload.html'};
	//Night_1_Morning_EDF_File_Upload']= {table_id:'20003854',var:v,url:T+'/forms/File_Upload.html'};
	L[A+'Night_1_Morning_Arousal_File_Upload']= {table_id:'20003856',var:v,url:T+'/forms/arousal_file_upload.html'};
	L[A+'Night_1_Morning_Sleep_Scoring_File_Upload']= {table_id:'20003858',var:v,url:T+'/forms/sleep_scoring_upload.html'};
	L[A+'Night_1_Morning_PSG300_Report']= {table_id:'20008481',var:v,url:T+'/forms/psg300.html'};
	L[A+'Week_1_KSS']= {table_id:'20000423',var:v,url:T+'/forms/kss.html'};
	L[A+'Week_2_Morning_KSS']= {table_id:'20000424',var:v,url:T+'/forms/kss.html'};
	L[A+'Week_3_Morning_KSS']= {table_id:'20000425',var:v,url:T+'/forms/kss.html'};
	L[A+'Week_4_Morning_KSS']= {table_id:'20000426',var:v,url:T+'/forms/kss.html'};
	L[A+'Night_30_Evening_Visit_Date']= {table_id:'20000427',var:v,url:T+'/forms/visit_date.html'};
	L[A+'Night_30_Evening_FOSQ']= {table_id:'20000428',var:v,url:T+'/forms/fosq.html'};
	L[A+'Night_30_Evening_ESS']= {table_id:'20000429',var:v,url:T+'/forms/ess.html'};
	L[A+'Night_30_Evening_KSS']= {table_id:'20000430',var:v,url:T+'/forms/kss.html'};
	L[A+'Night_30_Morning_Leeds']= {table_id:'20000431',var:v,url:T+'/forms/leeds.html'};
	L[A+'Night_30_Morning_KSS']= {table_id:'20000432',var:v,url:T+'/forms/kss.html'};
	L[A+'Night_30_Morning_Aused_File_Upload']= {table_id:'20000433',var:v,url:T+'/forms/aused_file_upload.html'};
	L[A+'Night_30_Morning_Aused_Result']= {table_id:'20008488',var:v,url:T+'/forms/aused_30m.html'};
	L[A+'Night_30_Morning_Paperwork_File_Upload']= {table_id:'20000434',var:v,url:T+'/forms/paperwork_file_upload.html'};
	//Night_30_Morning_EDF_File_Upload']= {table_id:'20003855',var:v,url:T+'/forms/File_Upload.html'};
	L[A+'Night_30_Morning_Arousal_File_Upload']= {table_id:'20003857',var:v,url:T+'/forms/arousal_file_upload.html'};
	L[A+'Night_30_Morning_Sleep_Scoring_File_Upload']= {table_id:'20003859',var:v,url:T+'/forms/sleep_scoring_upload.html'};
	L[A+'Night_30_Morning_PSG300_Report']= {table_id:'20008482',var:v,url:T+'/forms/psg300.html'};
	L[A+'Extra_Visit_Evening_Visit_Date']= {table_id:'20005503',var:v,url:T+'/forms/visit_date.html'};
	L[A+'Extra_Visit_Evening_FOSQ']= {table_id:'20005504',var:v,url:T+'/forms/fosq.html'};
	L[A+'Extra_Visit_Evening_ESS']= {table_id:'20005505',var:v,url:T+'/forms/ess.html'};
	L[A+'Extra_Visit_Evening_KSS']= {table_id:'20005506',var:v,url:T+'/forms/kss.html'};
	L[A+'Extra_Visit_Morning_Leeds']= {table_id:'20005514',var:v,url:T+'/forms/leeds.html'};
	L[A+'Extra_Visit_Morning_KSS']= {table_id:'20005508',var:v,url:T+'/forms/kss.html'};
	L[A+'Extra_Visit_Morning_Aused_File_Upload']= {table_id:'20005509',var:v,url:T+'/forms/aused_file_upload.html'};
	L[A+'Extra_Visit_Morning_Aused_Result']= {table_id:'20008489',var:v,url:T+'/forms/aused_30m.html'};
	L[A+'Extra_Visit_Morning_Paperwork_File_Upload']= {table_id:'20005510',var:v,url:T+'/forms/paperwork_file_upload.html'};
	//Extra_Visit_Morning_EDF_File_Upload']= {table_id:'20005511',var:v,url:T+'/forms/File_Upload.html'};
	L[A+'Extra_Visit_Morning_Arousal_File_Upload']= {table_id:'20005512',var:v,url:T+'/forms/arousal_file_upload.html'};
	L[A+'Extra_Visit_Morning_Sleep_Scoring_File_Upload']= {table_id:'20005513',var:v,url:T+'/forms/sleep_scoring_upload.html'};
	L[A+'Extra_Visit_Morning_PSG300_Report']= {table_id:'20008483',var:v,url:T+'/forms/psg300.html'};
	//---------------------------------------------
}
main__ID();
