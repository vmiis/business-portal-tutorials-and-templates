//---------------------------------------------
_app_id='woolcock_flat_';
//---------------------------------------------
var main__ID=function(){
    //---------------------------------------------
    var L=$vm.module_list;
    var A=_app_id;
	var B=$vm.hosting_path+'/modules/dynamic';
    var T=$vm.hosting_path+'/modules/dynamic/flat/task';
	//M=$vm.woolcock_module_library,
    //Q=$vm.woolcock_module_library+'/clinical_trials_questionnaire',
    //E=$vm.woolcock_module_library+'/clinical_trials_ecrf';
    //---------------------------------------------
    //database table:
    var participant_tid     ='20010817';
    var task_notes_tid      ='20010818';
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
        sql_participant:"@('Study_ID')",
        participant_login_setup:    A+'participant_login_setup',
        data_entry_by_staff:        A+'data_entry_by_staff',
        data_entry_by_participant:  A+'data_entry_by_participant',
    }
    //---------------------------------------------
    //panels
    L[A+'data_entry_by_staff']=         {table_id:'',var:v,url:B+'/flat/panels/data_entry_by_staff.html'};
    L[A+'data_entry_by_participant']=   {table_id:'',var:v,url:B+'/flat/panels/data_entry_by_participant.html'};
    //---------------------------------------------
    //
    L[A+'participant']=                 {table_id:participant_tid,      var:v,  url:B+'/flat/participant.html'};
    L[A+'clinical_trials_notes']    =   {table_id:task_notes_tid,       var:v,  url:B+'/flat/task_notes.html'};
	L[A+'participant_login_setup']  =   {table_id:login_setup_tid,      var:v,  url:B+'/flat/participant_login_setup.html'};
    //---------------------------------------------
    L[A+'randomisation_sleep']=       {table_id:'20010891',var:v,url:T+'/randomisation_sleep.html'};
    L[A+'randomisation_sleep_import']=       {table_id:'20010891',var:v,url:T+'/randomisation_sleep_import.html'};
    L[A+'randomisation_obesity']=       {table_id:'20010892',var:v,url:T+'/randomisation_obesity.html'};
    L[A+'randomisation_obesity_import']=       {table_id:'20010892',var:v,url:T+'/randomisation_obesity_import.html'};
    L[A+'randomised_sleep_query']=       {table_id:'20010891',var:v,url:B+'/query/randomised_sleep_query.html'};
    L[A+'randomised_obesity_query']=       {table_id:'20010892',var:v,url:B+'/query/randomised_obesity_query.html'};
    //---------------------------------------------
    L[A+'Adverse_Event']=       {table_id:'20009731',var:v,url:T+'/adverse_event.html',notes:'Adverse Event'};
    L[A+'Concom_Medication']=   {table_id:'20009732',var:v,url:T+'/concom_medication.html',notes:'Concomitant Medication'};
    L[A+'File_Notes']=          {table_id:'20009733',var:v,url:T+'/File_Notes.html',notes:'File Notes'};

    //Screening
    L[A+'Screening_Visit_Date']={table_id:'20010827',var:v,url:T+'/visit_date.html',notes:'Screening Visit Date'};
    L[A+'Screening_Anthro']=    {table_id:'20009735',var:v,url:T+'/anthro.html',notes:'Screening Anthropometry'};
    L[A+'Screening_ESS']=       {table_id:'20010831',var:v,url:T+'/epworth_sleepiness_scale.html',notes:'Screening Epworth Sleepiness Scale (ESS)',form_module:A+'Screening_ESS_QUEST',task:'Screening Epworth Sleepiness Scale (ESS)'};
    L[A+'Screening_ESS_QUEST']= {table_id:'20010831',var:v,url:T+'/epworth_sleepiness_scale.form.html'};

    //Baseline
    L[A+'Baseline_Visit_Date']= {table_id:'20010832',var:v,url:T+'/visit_date.html',notes:'Baseline Visit Date'};
    //L[A+'Baseline_MINMOD']={table_id:'XXXXXXXX',var:v,url:T+'/minmod.html',notes:'Baseline MINMOD'};
    L[A+'Baseline_Anthro']=     {table_id:'20010833',var:v,url:T+'/anthro.html',notes:'Baseline Anthropometry'};
    L[A+'Baseline_DXABIS']={table_id:'20010834',var:v,url:T+'/dxabis.html',notes:'Baseline DXABIS'};
    L[A+'Baseline_bloods']={table_id:'20010835',var:v,url:T+'/bloods.html',notes:'Baseline bloods'};
    L[A+'Baseline_ESS']=        {table_id:'20010836',var:v,url:T+'/epworth_sleepiness_scale.html',notes:'Baseline Epworth Sleepiness Scale (ESS)',form_module:A+'Baseline_ESS_QUEST',task:'Baseline Epworth Sleepiness Scale (ESS)'};
    L[A+'Baseline_ESS_QUEST']=  {table_id:'20010836',var:v,url:T+'/epworth_sleepiness_scale.form.html'};
    L[A+'Baseline_SF36']={table_id:'20010837',var:v,url:T+'/short_form_survey_instrument.html',notes:'Baseline SF36',form_module:A+'Baseline_SF36_FORM',task:'Baseline SF36'};
    L[A+'Baseline_SF36_FORM']={table_id:'20010837',var:v,url:T+'/short_form_survey_instrument.form.html'};
    L[A+'Baseline_FOSQ']={table_id:'20010838',var:v,url:T+'/functional_outcomes_of_sleep_questionnaire.html',notes:'Baseline FOSQ',form_module:A+'Baseline_FOSQ_FORM',task:'Baseline FOSQ'};
    L[A+'Baseline_FOSQ_FORM']={table_id:'20010838',var:v,url:T+'/functional_outcomes_of_sleep_questionnaire.form.html'};
    L[A+'Baseline_DASS']={table_id:'20010839',var:v,url:T+'/depression_anxiety_stress_scales.html',notes:'Baseline DASS',form_module:A+'Baseline_DASS_FORM',task:'Baseline DASS'};
    L[A+'Baseline_DASS_FORM']={table_id:'20010839',var:v,url:T+'/depression_anxiety_stress_scales.form.html'};
    L[A+'Baseline_Banduras']={table_id:'20010840',var:v,url:T+'/banduras_self_efficacy_questionnaire.html',notes:'Baseline Banduras',form_module:A+'Baseline_Banduras_FORM',task:'Baseline Banduras'};
    L[A+'Baseline_Banduras_FORM']={table_id:'20010840',var:v,url:T+'/banduras_self_efficacy_questionnaire.form.html'};
    L[A+'Baseline_IWQOL']={table_id:'20010841',var:v,url:T+'/impact_of_weight_on_quality_of_life.html',notes:'Baseline IWQOL',form_module:A+'Baseline_IWQOL_FORM',task:'Baseline IWQOL'};
    L[A+'Baseline_IWQOL_FORM']={table_id:'20010841',var:v,url:T+'/impact_of_weight_on_quality_of_life.form.html'};
    L[A+'Baseline_TFEQ']={table_id:'20010842',var:v,url:T+'/three_factor_eating_questionnaire.html',notes:'Baseline TFEQ',form_module:A+'Baseline_TFEQ_FORM',task:'Baseline TFEQ'};
    L[A+'Baseline_TFEQ_FORM']={table_id:'20010842',var:v,url:T+'/three_factor_eating_questionnaire.form.html'};
    L[A+'Baseline_IPAQ']={table_id:'20010843',var:v,url:T+'/international_physical_activity_questionnaire.html',notes:'Baseline IPAQ',form_module:A+'Baseline_IPAQ_FORM',task:'Baseline IPAQ'};
    L[A+'Baseline_IPAQ_FORM']={table_id:'20010843',var:v,url:T+'/international_physical_activity_questionnaire.form.html'};
    L[A+'Baseline_Scoring_File_Upload']={table_id:'20009742',var:v,url:T+'/file_upload.html',notes:'Baseline Scoring File upload'};

//2 Month
    L[A+'Month_2_Visit_Date']={table_id:'20010847',var:v,url:T+'/visit_date.html',notes:'Month 2 Visit Date'};
    L[A+'Month_2_PSG']={table_id:'20010848',var:v,url:T+'/psg.html',notes:'Month 2 PSG'};
    L[A+'Month_2_MINMOD']={table_id:'20010849',var:v,url:T+'/minmod.html',notes:'Month 2 MINMOD'};
    L[A+'Month_2_Anthro']=     {table_id:'20010850',var:v,url:T+'/anthro.html',notes:'Month 2 Anthropometry'};
    L[A+'Month_2_DXABIS']={table_id:'20010851',var:v,url:T+'/dxabis.html',notes:'Month 2 DXABIS'};
    L[A+'Month_2_bloods']={table_id:'20010852',var:v,url:T+'/bloods.html',notes:'Month 2 bloods'};
    L[A+'Month_2_ESS']={table_id:'20010853',var:v,url:T+'/epworth_sleepiness_scale.html',notes:'month 2 ESS',form_module:A+'Month_2_ESS_FORM',task:'Month 2 ESS'};
    L[A+'Month_2_ESS_FORM']={table_id:'20010853',var:v,url:T+'/epworth_sleepiness_scale.form.html'};
    L[A+'Month_2_SF36']={table_id:'20010854',var:v,url:T+'/short_form_survey_instrument.html',notes:'Month 2 SF36',form_module:A+'Month_2_SF36_FORM',task:'Month 2 SF36'};
    L[A+'Month_2_SF36_FORM']={table_id:'20010854',var:v,url:T+'/short_form_survey_instrument.form.html'};
    L[A+'Month_2_FOSQ']={table_id:'20010855',var:v,url:T+'/functional_outcomes_of_sleep_questionnaire.html',notes:'Month 2 FOSQ',form_module:A+'Month_2_FOSQ_FORM',task:'Month 2 FOSQ'};
    L[A+'Month_2_FOSQ_FORM']={table_id:'20010855',var:v,url:T+'/functional_outcomes_of_sleep_questionnaire.form.html'};
    L[A+'Month_2_DASS']={table_id:'20010856',var:v,url:T+'/depression_anxiety_stress_scales.html',notes:'Month 2 DASS',form_module:A+'Month_2_DASS_FORM',task:'Month 2 DASS'};
    L[A+'Month_2_DASS_FORM']={table_id:'20010856',var:v,url:T+'/depression_anxiety_stress_scales.form.html'};
    L[A+'Month_2_Banduras']={table_id:'20010857',var:v,url:T+'/banduras_self_efficacy_questionnaire.html',notes:'Month 2 Banduras',form_module:A+'Month_2_Banduras_FORM',task:'Month 2 Banduras'};
    L[A+'Month_2_Banduras_FORM']={table_id:'20010857',var:v,url:T+'/banduras_self_efficacy_questionnaire.form.html'};
    L[A+'Month_2_IWQOL']={table_id:'20010858',var:v,url:T+'/impact_of_weight_on_quality_of_life.html',notes:'Month 2 IWQOL',form_module:A+'Month_2_IWQOL_FORM',task:'Month 2 IWQOL'};
    L[A+'Month_2_IWQOL_FORM']={table_id:'20010858',var:v,url:T+'/impact_of_weight_on_quality_of_life.form.html'};
    L[A+'Month_2_TFEQ']={table_id:'20010859',var:v,url:T+'/three_factor_eating_questionnaire.html',notes:'Month 2 TFEQ',form_module:A+'Month_2_TFEQ_FORM',task:'Month 2 TFEQ'};
    L[A+'Month_2_TFEQ_FORM']={table_id:'20010859',var:v,url:T+'/three_factor_eating_questionnaire.form.html'};
    L[A+'Month_2_IPAQ']={table_id:'20010860',var:v,url:T+'/international_physical_activity_questionnaire.html',notes:'Month 2 IPAQ',form_module:A+'Month_2_IPAQ_FORM',task:'Month 2 IPAQ'};
    L[A+'Month_2_IPAQ_FORM']={table_id:'20010860',var:v,url:T+'/international_physical_activity_questionnaire.form.html'};

//9 Month
    L[A+'Month_9_Visit_Date']={table_id:'20010863',var:v,url:T+'/visit_date.html',notes:'Month 9 Visit Date'};
    L[A+'Month_9_Anthro']={table_id:'20010864',var:v,url:T+'/anthro.html',notes:'Month 9 anthropometry'};
    L[A+'Month_9_ESS']={table_id:'20010865',var:v,url:T+'/epworth_sleepiness_scale.html',notes:'month 9 ESS',form_module:A+'Month_9_ESS_FORM',task:'Month 9 ESS'};
    L[A+'Month_9_ESS_FORM']={table_id:'20010865',var:v,url:T+'/epworth_sleepiness_scale.form.html'};
    L[A+'Month_9_SF36']={table_id:'20010866',var:v,url:T+'/short_form_survey_instrument.html',notes:'Month 9 SF36',form_module:A+'Month_9_SF36_FORM',task:'Month 9 SF36'};
    L[A+'Month_9_SF36_FORM']={table_id:'20010866',var:v,url:T+'/short_form_survey_instrument.form.html'};
    L[A+'Month_9_FOSQ']={table_id:'20010867',var:v,url:T+'/functional_outcomes_of_sleep_questionnaire.html',notes:'Month 9 FOSQ',form_module:A+'Month_9_FOSQ_FORM',task:'Month 9 FOSQ'};
    L[A+'Month_9_FOSQ_FORM']={table_id:'20010867',var:v,url:T+'/functional_outcomes_of_sleep_questionnaire.form.html'};
    L[A+'Month_9_DASS']={table_id:'20010868',var:v,url:T+'/depression_anxiety_stress_scales.html',notes:'Month 9 DASS',form_module:A+'Month_9_DASS_FORM',task:'Month 9 DASS'};
    L[A+'Month_9_DASS_FORM']={table_id:'20010868',var:v,url:T+'/depression_anxiety_stress_scales.form.html'};
    L[A+'Month_9_Banduras']={table_id:'20010869',var:v,url:T+'/banduras_self_efficacy_questionnaire.html',notes:'Month 9 Banduras',form_module:A+'Month_9_Banduras_FORM',task:'Month 9 Banduras'};
    L[A+'Month_9_Banduras_FORM']={table_id:'20010869',var:v,url:T+'/banduras_self_efficacy_questionnaire.form.html'};
    L[A+'Month_9_IWQOL']={table_id:'20010870',var:v,url:T+'/impact_of_weight_on_quality_of_life.html',notes:'Month 9 IWQOL',form_module:A+'Month_9_IWQOL_FORM',task:'Month 9 IWQOL'};
    L[A+'Month_9_IWQOL_FORM']={table_id:'20010870',var:v,url:T+'/impact_of_weight_on_quality_of_life.form.html'};
    L[A+'Month_9_TFEQ']={table_id:'20010871',var:v,url:T+'/three_factor_eating_questionnaire.html',notes:'Month 9 TFEQ',form_module:A+'Month_9_TFEQ_FORM',task:'Month 9 TFEQ'};
    L[A+'Month_9_TFEQ_FORM']={table_id:'20010871',var:v,url:T+'/three_factor_eating_questionnaire.form.html'};
    L[A+'Month_9_IPAQ']={table_id:'20010872',var:v,url:T+'/international_physical_activity_questionnaire.html',notes:'Month 9 IPAQ',form_module:A+'Month_9_IPAQ_FORM',task:'Month 9 IPAQ'};
    L[A+'Month_9_IPAQ_FORM']={table_id:'20010872',var:v,url:T+'/international_physical_activity_questionnaire.form.html'};

//12 Month
    L[A+'Month_12_Visit_Date']={table_id:'20010873',var:v,url:T+'/visit_date.html',notes:'Month 12 Visit Date'};
    L[A+'Month_12_PSG']={table_id:'20010874',var:v,url:T+'/psg.html',notes:'Month 12 PSG'};
    L[A+'Month_12_MINMOD']={table_id:'20010875',var:v,url:T+'/minmod.html',notes:'Month 12 MINMOD'};
    L[A+'Month_12_Anthro']={table_id:'20010876',var:v,url:T+'/anthro.html',notes:'Month 12 anthropometry'};
    L[A+'Month_12_DXABIS']={table_id:'20010877',var:v,url:T+'/dxabis.html',notes:'Month 12 DXABIS'};
    L[A+'Month_12_bloods']={table_id:'20010878',var:v,url:T+'/bloods.html',notes:'Month 12 bloods'};
    L[A+'Month_12_ESS']={table_id:'20010879',var:v,url:T+'/epworth_sleepiness_scale.html',notes:'month 12 ESS',form_module:A+'Month_12_ESS_FORM',task:'Month 12 ESS'};
    L[A+'Month_12_ESS_FORM']={table_id:'20010879',var:v,url:T+'/epworth_sleepiness_scale.form.html'};
    L[A+'Month_12_SF36']={table_id:'20010880',var:v,url:T+'/short_form_survey_instrument.html',notes:'Month 12 SF36',form_module:A+'Month_12_SF36_FORM',task:'Month 12 SF36'};
    L[A+'Month_12_SF36_FORM']={table_id:'20010880',var:v,url:T+'/short_form_survey_instrument.form.html'};
    L[A+'Month_12_FOSQ']={table_id:'20010881',var:v,url:T+'/functional_outcomes_of_sleep_questionnaire.html',notes:'Month 12 FOSQ',form_module:A+'Month_12_FOSQ_FORM',task:'Month 12 FOSQ'};
    L[A+'Month_12_FOSQ_FORM']={table_id:'20010881',var:v,url:T+'/functional_outcomes_of_sleep_questionnaire.form.html'};
    L[A+'Month_12_DASS']={table_id:'20010882',var:v,url:T+'/depression_anxiety_stress_scales.html',notes:'Month 12 DASS',form_module:A+'Month_12_DASS_FORM',task:'Month 12 DASS'};
    L[A+'Month_12_DASS_FORM']={table_id:'20010882',var:v,url:T+'/depression_anxiety_stress_scales.form.html'};
    L[A+'Month_12_Banduras']={table_id:'20010883',var:v,url:T+'/banduras_self_efficacy_questionnaire.html',notes:'Month 12 Banduras',form_module:A+'Month_12_Banduras_FORM',task:'Month 12 Banduras'};
    L[A+'Month_12_Banduras_FORM']={table_id:'20010883',var:v,url:T+'/banduras_self_efficacy_questionnaire.form.html'};
    L[A+'Month_12_IWQOL']={table_id:'20010884',var:v,url:T+'/impact_of_weight_on_quality_of_life.html',notes:'Month 12 IWQOL',form_module:A+'Month_12_IWQOL_FORM',task:'Month 12 IWQOL'};
    L[A+'Month_12_IWQOL_FORM']={table_id:'20010884',var:v,url:T+'/impact_of_weight_on_quality_of_life.form.html'};
    L[A+'Month_12_TFEQ']={table_id:'20010885',var:v,url:T+'/three_factor_eating_questionnaire.html',notes:'Month 12 TFEQ',form_module:A+'Month_12_TFEQ_FORM',task:'Month 12 TFEQ'};
    L[A+'Month_12_TFEQ_FORM']={table_id:'20010885',var:v,url:T+'/three_factor_eating_questionnaire.form.html'};
    L[A+'Month_12_IPAQ']={table_id:'20010886',var:v,url:T+'/international_physical_activity_questionnaire.html',notes:'Month 12 IPAQ',form_module:A+'Month_12_IPAQ_FORM',task:'Month 12 IPAQ'};
    L[A+'Month_12_IPAQ_FORM']={table_id:'20010886',var:v,url:T+'/international_physical_activity_questionnaire.form.html'};


    //---------------------------------------------
    v.quest_list={
        "Screening":[
            A+'Screening_ESS',
        ],
        "Baseline":[
          A+'Baseline_ESS',
          A+'Baseline_SF36',
          A+'Baseline_FOSQ',
          A+'Baseline_DASS',
          A+'Baseline_Banduras',
          A+'Baseline_IWQOL',
          A+'Baseline_TFEQ',
          A+'Baseline_IPAQ',
          A+'Baseline_FOSQ',
        ],
        "Month 2":[
          A+'Month_2_ESS',
          A+'Month_2_SF36',
          A+'Month_2_FOSQ',
          A+'Month_2_DASS',
          A+'Month_2_Banduras',
          A+'Month_2_IWQOL',
          A+'Month_2_TFEQ',
          A+'Month_2_IPAQ',
          A+'Month_2_FOSQ',
        ],
        "Month 9":[
          A+'Month_9_ESS',
          A+'Month_9_SF36',
          A+'Month_9_FOSQ',
          A+'Month_9_DASS',
          A+'Month_9_Banduras',
          A+'Month_9_IWQOL',
          A+'Month_9_TFEQ',
          A+'Month_9_IPAQ',
          A+'Month_9_FOSQ',
        ],
        "Month 9":[
          A+'Month_12_ESS',
          A+'Month_12_SF36',
          A+'Month_12_FOSQ',
          A+'Month_12_DASS',
          A+'Month_12_Banduras',
          A+'Month_12_IWQOL',
          A+'Month_12_TFEQ',
          A+'Month_12_IPAQ',
          A+'Month_12_FOSQ',
        ],
    };
    //----------------------------------
}
main__ID();
