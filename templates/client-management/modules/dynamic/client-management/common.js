//-------------------------------------
var client_tid=$vm.module_list[_ids.client].table_id;
//-------------------------------------
var _default_cell_render=function(records,I,field,td,set_value,source){
    switch(field){
        case 'Client':
			if(_mobj.op.child=='1'){
				records[I].vm_readonly[field]=true;
				td.text(records[I].Client);
			}
			else{
				var sql="with tb as (select distinct name=S3,S2,UID from [TABLE-"+client_tid+"]) select name, value=name,value2=UID,S2 from tb where name like '%'+@S1+'%' ";
				var callback=function(event,ui){
					records[I].Client=ui.item.value;
					records[I].Login_Name=ui.item.S2;
					records[I].Client_uid=ui.item.value2;
				}
				VmInclude:__PARTS__/grid/field_auto_with_callback.js
			}
			break;
	}
}
//-------------------------------------
_set_req=function(){
	if(_module.child=='1'){
		var where=" where S2='"+_mobj.op.record.Login_Name+"'";
		var sql="with tb as (select Information,ID,UID,PUID,DateTime,Author,RowNum=row_number() over (order by ID DESC) from [TABLE-"+_db_pid+"-@S1]"+where+" )";
	    sql+="select Information,ID,UID,PUID,DateTime,Author,RowNum from tb where RowNum between @I6 and @I7";
	    var sql_n="select count(ID) from [TABLE-"+_db_pid+"-@S1]"+where;
	    _req={cmd:'query_records',db_pid:_db_pid,sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
	}
	else{
		var sql="with tb as (select Information,ID,UID,PUID,DateTime,Author,RowNum=row_number() over (order by ID DESC) from [TABLE-"+_db_pid+"-@S1] )";
	    sql+="select Information,ID,UID,PUID,DateTime,Author,RowNum from tb where RowNum between @I6 and @I7";
	    var sql_n="select count(ID) from [TABLE-"+_db_pid+"-@S1]";
	    _req={cmd:'query_records',db_pid:_db_pid,sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
	}
}
//-------------------------------------
_set_req_export=function(){
	if(_module.child=='1'){
		var where=" where S2='"+_mobj.op.record.Login_Name+"'";
		var sql="with tb as (select Information,ID,UID,DateTime,Author,RowNum=row_number() over (order by ID DESC) from [TABLE-"+_db_pid+"]"+where+")";
	    sql+="select Information,ID,UID,DateTime,Author,RowNum from tb";
	    _set_from_to();
	    if(_from!='0' && _to!='0') sql+=" where RowNum between @I6 and @I7";
	    _req={cmd:'query_records',sql:sql,i6:_from,i7:_to}
	}
	else{
		var sql="with tb as (select Information,ID,UID,DateTime,Author,RowNum=row_number() over (order by ID DESC) from [TABLE-"+_db_pid+"] )";
	    sql+="select Information,ID,UID,DateTime,Author,RowNum from tb";
	    _set_from_to();
	    if(_from!='0' && _to!='0') sql+=" where RowNum between @I6 and @I7";
	    _req={cmd:'query_records',sql:sql,i6:_from,i7:_to}
	}
}
//-------------------------------------
_data_process_after_render=function(){
	if(_module.child=='1' && _module.single_record=='1'){
		if(_records.length==0){
			$('#new__ID').triggerHandler('click');
		}
		if(_records.length==1){
			var form=$('#grid__ID tr:nth-child(2)').find('u:first');
			form.triggerHandler('click');
		}
		else{
			alert("More than one records were found! Please report the administrator.");
			return;
		}
	}
}
//-------------------------------------
_new_pre_data_process=function(){
	if(_module.child=='1'){
		var record=_mobj.op.record;
		var client=record.Business_Name;
		_records[0].Client=client;
	}
}
//-------------------------------------
_before_submit=function(record,dbv){
	if(_module.child=='1'){
		var p_record=_mobj.op.record;
		var client=p_record.First_Name+' '+p_record.Last_Name
		record.Client=client;
		record.Login_Name=p_record.Login_Name;
		record.Client_uid=p_record.Client_uid;
	}
	if(record.Client==''){
		alert("Please select a client.");
		return false;
	}
	record.Client=record.Client;
	dbv.PPID=client_tid;
	dbv.PUID=record.Client_uid;
	dbv.S2=record.Login_Name;

	return true;
};
//-------------------------------------
