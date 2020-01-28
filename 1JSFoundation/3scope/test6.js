var i;
for(i = 0; i < 10; i++){
    (function(i){
        var a = document.createElement('a');
        a.setAttribute('style', 'width:200px');
        a.innerHTML = i + '<br>';
        
        a.addEventListener('click',function(e){
            e.preventDefault();
            console.log('ttt');
            console.log(i);
            alert(i);
        })
        console.log(a);
        document.body.appendChild(a);
    })(i);
}