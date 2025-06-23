// document.body.onkeydown = function(e){
//     console.log(e);

//     if(e.keyCode ==82){
//         document.body.style.background = 'red';
//     }else if(e.keyCode == 66){
//         document.body.style.background = 'blue';
//     }else if(e.keyCode == 71){
//         document.body.style.background = 'green';
//     }else if(e.keyCode ==27){
//         document.body.style.background = 'white';
//     }
// }



let keyBoardLightColor = '#d85f5f';

$('.btn').css('box-shadow', `0 3px 4px ${keyBoardLightColor}`).css('color', `${keyBoardLightColor}`);


$('#colorPicker').on('input', function(e){
    keyBoardLightColor = e.target.value;
    $('.btn').css('box-shadow', `0 3px 4px ${keyBoardLightColor}`).css('color', `${keyBoardLightColor}`);
})

document.body.onkeydown = function(e){

    console.log(e);

    if(e.keyCode == 81){
        btnQ.style.boxShadow = `0 1px 1px ${keyBoardLightColor}`;
        btnQ.style.top = '2px';
    }else if(e.keyCode == 87){
        btnW.style.boxShadow = `0 1px 1px  ${keyBoardLightColor}`;
        btnW.style.top = '2px';
    }
    
}

document.body.onkeyup = function(e){
    if(e.keyCode == 81){
        btnQ.style.boxShadow = `0 3px 4px ${keyBoardLightColor}`;
        btnQ.style.top = '0';
    }else if(e.keyCode == 87){
        btnW.style.boxShadow = `0 3px 4px ${keyBoardLightColor}`;
        btnW.style.top = '0';
    }
}




