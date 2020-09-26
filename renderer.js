const path = require('path');
var version = location.search.split('version=')[1];
var namespace = 'QuickStart.' + version.charAt(0).toUpperCase() + version.substr(1);
if(version === 'core') version = 'coreapp';

const baseNetAppPath = path.join(__dirname, '/src/'+ namespace +'/bin/Debug/net'+ version +'2.0');

process.env.EDGE_USE_CORECLR = 1;
if(version !== 'standard')
   process.env.EDGE_APP_ROOT = baseNetAppPath;

var edge = require('electron-edge-js');

var baseDll = path.join(baseNetAppPath, namespace + '.dll');

var localTypeName = namespace + '.LocalMethods';

var foosubmit = edge.func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'fooSubmit'
});

var fooclick = edge.func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'fooClickhere'
});




window.onload = function() {
    var submitBtn=document.getElementById('submitBtn');
    const clickBtn=document.getElementById('clickBtn');

    submitBtn.addEventListener('click',submit);
    clickBtn.addEventListener('click',clickButton);

   
    function submit(){
        console.log("inside submit button..")
        foosubmit('', function(error, result) {
                if (error) throw error;
                 document.getElementById("display").innerHTML = result;
             });
    }

    function clickButton(){
        console.log("inside click button..")
        fooclick('', function(error, result) {
                if (error) throw error;
                 document.getElementById("display").innerHTML = result;
             });
    }
};
