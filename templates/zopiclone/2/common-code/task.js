
var _task_fields='';
//-------------------------------------
var participant_pid=$vm.module_list['participant'][0];
var notes_pid=$vm.module_list['notes'][0];
//-------------------------------------
var site_sql_where='';
var site_array=[];
//-------------------------------------
var site_filter_and_request=function(){
/*    var site_filter_pid=$vm.module_list['site_filter'][0];
    var sql="select List=@('Site_List') from [FORM-"+site_filter_pid+"] where S2=@S1";
    var req_data={cmd:'query_records',sql:sql,s1:$vm.user};
    $VmAPI.request({data:req_data,callback:function(res){
        if(res.records.length>0){
            var sites=res.records[0].List.replace(/\r/g,'\n').replace(/\n\n/g,'\n').replace(/\n/g,',');
            if(res.records[0].List==='*') site_sql_where='';
            else{
                site_array=sites.split(',');
                var sites="";
                for(var i=0;i<site_array.length;i++){
                    if(sites!=="") sites+=",";
                    sites+="'"+site_array[i]+"'";
                }
                site_sql_where=" where S2 in ("+sites+")";
            }
        }
        else{
            site_sql_where=" where S2 in ('')";
        }
        _set_req(); _request_data();
    }});
*/
    _set_req(); _request_data();
}
//-------------------------------------
_set_req=function(){
    $('#new__ID').hide();
    $('#save__ID').hide();
    //var sql_n=" select count(ID) from [TABLE-"+participant_pid+"]"+site_sql_where;

    var sql_n="with participant as (select ID,ParticipantUID=UID from [TABLE-"+participant_pid+"] )";
    sql_n+=",task as (select PUID from [TABLE-"+_db_pid+"] ) ";
    sql_n+="select count(ID) from participant left join task on  PUID=ParticipantUID ";

    /*
    var sql="with participant as (select Site=S1,ParticipantUID=UID,RowNum=row_number() over (order by ID DESC) from [TABLE-"+participant_pid+"]"+site_sql_where+" )";
    sql+=",task as (select ID,PID,UID,PUID,GUID,S2,Information,DateTime,Author from [TABLE-"+_db_pid+"] ) ";
    sql+="select ID,S2,UID,GUID=ParticipantUID,Task_ID=PID,Site,Information,DateTime,Author,dirty=0, valid=1 from participant left join task on  GUID=ParticipantUID where RowNum between @I6 and @I7";
    _req={cmd:'query_records',sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
    */

    var sql="with participant as (select Participant=@('Local_ID'),ParticipantUID=UID,RowNum=row_number() over (order by ID DESC) from [TABLE-"+participant_pid+"] )";
    sql+=",task as (select ID,PID,UID,PUID,S2,Information,DateTime,Author from [TABLE-"+_db_pid+"] ) ";
    sql+=",result as (select ID,PID,UID,PUID,S2,ParticipantUID,Participant,Information,DateTime,Author,RowNum from participant left join task on  PUID=ParticipantUID ) ";
    sql+="select ID,S2,UID,PUID=ParticipantUID,Task_ID=PID,Participant,Information,DateTime,Author,dirty=0, valid=1 from result where RowNum between @I6 and @I7";
    _req={cmd:'query_records',sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
}
//-------------------------------------
var _set_req_export=function(){
    /*
    var sql="with participant as (select Site=S1,ParticipantUID=UID,RowNum=row_number() over (order by ID DESC) from [TABLE-"+participant_pid+"]"+site_sql_where+" )";
    sql+=",task as (select ID,PID,UID,PUID,GUID,S2,Information,DateTime,Author from [TABLE-"+_db_pid+"] ) ";
    sql+="select ID,S2,UID,GUID=ParticipantUID,Task_ID=PID,Site,Information,DateTime,Author,dirty=0, valid=1 from participant left join task on  GUID=ParticipantUID";
    */

    var sql="with participant as (select Participant=@('Local_ID'),ParticipantUID=UID,RowNum=row_number() over (order by ID DESC) from [TABLE-"+participant_pid+"] )";
    sql+=",task as (select ID,PID,UID,PUID,S2,Information,DateTime,Author from [TABLE-"+_db_pid+"] ) ";
    sql+="select ID,S2,UID,PUID=ParticipantUID,Task_ID=PID,Participant,Information,DateTime,Author,RowNum,dirty=0, valid=1 from participant left join task on PUID=ParticipantUID ";
    _set_from_to();
    if(_from!='0' && _to!='0') sql+=" where RowNum between @I6 and @I7";
    else sql+=" order by RowNum";
    _req={cmd:'query_records',sql:sql,i6:_from,i7:_to}
}
//-----------------------------------------------
_set_req_for_multi=function(){
    $('#new__ID').hide();
    $('#save__ID').hide();
    var sql_n=" select count(ID) from [TABLE-"+_db_pid+"]";
    var sql="with task as (select ID,UID,PUID,GPID,S2,Information,DateTime,Author,RowNum=row_number() over (order by PUID DESC) from [TABLE-"+_db_pid+"] ) ";
    sql+="select ID,S2,UID,PUID,Task_ID=GPID,Information,DateTime,Author,dirty=0, valid=1 from task where RowNum between @I6 and @I7";
    _req={cmd:'query_records',sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
}
//-------------------------------------
var auto_uid={};
_after_change=function(record,C){
    if(C==='Participant'){
        record.participant_uid=auto_uid[record.Participant];
    }
};
_default_table_process=function(table){
    //-------------------------------------
    table.S2={width:60, renderer:function(instance, td, row, col, prop, value, cellProperties){
        if(value!==null && value!==undefined && value.length===6) value="#"+value;
        if(value!=='') $(td).html("<span style='color:"+value+"'>&#x25cf;</span>");
        return td;
    }};
    //-------------------------------------
    /*
    table.Participant={type: 'autocomplete',trimDropdown:false,source:function (query, process){
        var sqlA="with tb as (select Item=@('Local_ID'),Value=UID from [TABLE-"+participant_pid+"])";
        sqlA+=" select top 10 Item,Value from tb where Item like '%'+@S1+'%' ";
        $vm.read_record_auto({query:query,process:process,sql:sqlA,minLength:0,callback:function(nv){auto_uid=nv;}});
    }};
    */
}
//-------------------------------------
_before_submit=function(record,dbv){    //set status color, PUID=paticipant_uid
    var flds=_task_fields.split(',');
    var J=0,K=0,N=flds.length;
    for(var i=0;i<N;i++){
        var id=flds[i].split('|').pop();
        if(id=='UID') K++;
        else if(record[id]==='' || record[id]===undefined || record[id]===null)  J++;
    }
    N=N-K;
    if(N==J) 		    dbv.S2='#FF0000';
    else if(J===0)  	dbv.S2='#00FF00';
    else 			    dbv.S2='#FFFF00';
    dbv.PPID=participant_pid;
    if(record.Participant===undefined || record.Participant===null){
        alert("No participant was selected");
        return false;
    }
    if(record.participant_uid!==undefined) dbv.PUID=record.participant_uid;
    return true;
};
//-------------------------------------
_after_submit=function(I,res,n){    //modify status color
    $("#excel__ID").handsontable("setDataAtCell", I,0,_dbv.S2);
};
//-------------------------------------
