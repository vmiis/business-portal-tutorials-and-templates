//-------------------------------------
var _ids=_config.module_ids;
var client_tid=$vm.module_list[_ids.client].table_id;
//-------------------------------------
$('#Client__ID').autocomplete({
    minLength:0,
    source:function(request,response){
        var sql="with tb as (select name=S3,value2=UID,value3=S1 from [TABLE-"+client_tid+"])";
        sql+=" select top 10 name,value=name,value2,value3 from tb where Name like '%'+@S1+'%' ";
        $VmAPI.request({data:{cmd:'auto',s1:request.term,sql:sql,minLength:0},callback:function(res){
            response($vm.autocomplete_list(res.table));
        }});
    },
    select: function(event,ui){
        $('#Client_uid__ID').val(ui.item.value2);
        $('#save__ID').css('background','#E00');
    }
})
$('#Client__ID').focus(function(){$('#Client__ID').autocomplete("search","");});
$('#Client_r__ID').on('click',function(){$('#Client__ID').val('');$('#Client_uid__ID').val('');})
//-------------------------------------
var _set_client_field=function(){
	/*
    if($vm.vm['__ID'].op.from_grid==="1"){
        $('#tr_client__ID').show();
    }
    else{
        $('#tr_client__ID').hide();
        _records[0].Client=_trigger_parameters.client;
        _records[0].Client_uid=_trigger_parameters.client_uid;
    }
	*/
    $('#Client__ID').blur(function(){
        _records[I].Client=$('#Client__ID').val();
        _records[I].Client_uid=$('#Client_uid__ID').val();
    })
}
//-------------------------------------
