//------------------------
//number dropdown
var $List2=$('#YY__ID');
var y=new Date().getFullYear();
for(var i=0;i<7;i++){
    $List2.append(  $('<option></option>').val(y-i).html(y-i)  );
}
$List2.val(y);
//---------------------------------------------
_fields="Item,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,Sub Total|Total";
//-------------------------------------
$('#aquery__ID').on('click',function(){_set_req(); _request_data();})
//-------------------------------------
var data_process=function(data_records){
    var results=create_results(data_records);
    var r=[];
    for(var p in results){
        var record={}
        record.Item=p;
        record.Total=0;
        record.Jan=''; if(results[p].M1!=undefined){ record.Jan=parseFloat(results[p].M1).toFixed(2); record.Total+=parseFloat(results[p].M1);}
        record.Feb=''; if(results[p].M2!=undefined){ record.Feb=parseFloat(results[p].M2).toFixed(2); record.Total+=parseFloat(results[p].M2);}
        record.Mar=''; if(results[p].M3!=undefined){ record.Mar=parseFloat(results[p].M3).toFixed(2); record.Total+=parseFloat(results[p].M3);}
        record.Apr=''; if(results[p].M4!=undefined){ record.Apr=parseFloat(results[p].M4).toFixed(2); record.Total+=parseFloat(results[p].M4);}
        record.May=''; if(results[p].M5!=undefined){ record.May=parseFloat(results[p].M5).toFixed(2); record.Total+=parseFloat(results[p].M5);}
        record.Jun=''; if(results[p].M6!=undefined){ record.Jun=parseFloat(results[p].M6).toFixed(2); record.Total+=parseFloat(results[p].M6);}
        record.Jul=''; if(results[p].M7!=undefined){ record.Jul=parseFloat(results[p].M7).toFixed(2); record.Total+=parseFloat(results[p].M7);}
        record.Aug=''; if(results[p].M8!=undefined){ record.Aug=parseFloat(results[p].M8).toFixed(2); record.Total+=parseFloat(results[p].M8);}
        record.Sep=''; if(results[p].M9!=undefined){ record.Sep=parseFloat(results[p].M9).toFixed(2); record.Total+=parseFloat(results[p].M9);}
        record.Oct=''; if(results[p].M10!=undefined){ record.Oct=parseFloat(results[p].M10).toFixed(2); record.Total+=parseFloat(results[p].M10);}
        record.Nov=''; if(results[p].M11!=undefined){ record.Nov=parseFloat(results[p].M11).toFixed(2); record.Total+=parseFloat(results[p].M11);}
        record.Dec=''; if(results[p].M12!=undefined){ record.Dec=parseFloat(results[p].M12).toFixed(2); record.Total+=parseFloat(results[p].M12);}
        record.Total=record.Total.toFixed(2);
        r.push(record);
    }
    var record={}
    record.Item='Total';
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Total!='') a+=parseFloat(r[i].Total); record.Total=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Jan!='') a+=parseFloat(r[i].Jan); record.Jan=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Feb!='') a+=parseFloat(r[i].Feb); record.Feb=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Mar!='') a+=parseFloat(r[i].Mar); record.Mar=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Apr!='') a+=parseFloat(r[i].Apr); record.Apr=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].May!='') a+=parseFloat(r[i].May); record.May=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Jun!='') a+=parseFloat(r[i].Jun); record.Jun=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Jul!='') a+=parseFloat(r[i].Jul); record.Jul=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Aug!='') a+=parseFloat(r[i].Aug); record.Aug=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Sep!='') a+=parseFloat(r[i].Sep); record.Sep=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Oct!='') a+=parseFloat(r[i].Oct); record.Oct=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Nov!='') a+=parseFloat(r[i].Nov); record.Nov=a.toFixed(2);
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Dec!='') a+=parseFloat(r[i].Dec); record.Dec=a.toFixed(2);

    r.sort(function(a,b) {
        if (a.Item < b.Item)
          return -1;
        if (a.Item > b.Item)
          return 1;
        return 0;
    })
    r.push(record);
    return r;
}
//-------------------------------------
_data_process=function(){
    $vm.alert('Working hard...');
    var r=_records;
    _records=[];
    setTimeout(function(){
        _records=data_process(r);
        _simple_render();
        $vm.close_alert();
    }, 100);
}
//-------------------------------------
_set_req=_set_req_export=function(){
    var sql="select __month__=V2,Information from [TABLE-"+_db_pid+"] where V1=@I1 ";
    _req={cmd:'query_records',sql:sql,i1:$('#YY__ID').val()}
}
//-------------------------------------
var _request_data_export=function(){
    $VmAPI.request({data:_req,callback:function(res){
        _records=data_process(res.records);
        _export_data(_filename);
    }})
}
//-------------------------------------
