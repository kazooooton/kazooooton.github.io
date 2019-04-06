block=[
    [
        //ブロック0（Tブロック）
        [
        [0,0,0,0],
        [1,1,1,0],
        [0,1,0,0],
        [0,0,0,0]
        ],
        [
        [0,1,0,0],
        [0,1,1,0],
        [0,1,0,0],
        [0,0,0,0]
        ],
        [
        [0,1,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
        ],
        [
        [0,1,0,0],
        [1,1,0,0],
        [0,1,0,0],
        [0,0,0,0]
        ]
    ],

    [
        //ブロック1（Lブロック）
        [
        [0,0,0,0],
        [1,1,1,0],
        [1,0,0,0],
        [0,0,0,0]
        ],
        [
        [1,0,0,0],
        [1,0,0,0],
        [1,1,0,0],
        [0,0,0,0]
        ],
        [
        [0,0,0,0],
        [0,0,1,0],
        [1,1,1,0],
        [0,0,0,0]
        ],
        [
        [1,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,0,0,0]
        ]
    ],

    [
        //ブロック2（Zブロック）
        [
        [0,0,0,0],
        [1,1,0,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
        [
        [0,1,0,0],
        [1,1,0,0],
        [1,0,0,0],
        [0,0,0,0]
        ],
        [
        [0,0,0,0],
        [1,1,0,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
        [
        [0,1,0,0],
        [1,1,0,0],
        [1,0,0,0],
        [0,0,0,0]
        ]
    ],

    [
        //ブロック3（Sブロック）
        [
        [0,0,0,0],
        [0,1,1,0],
        [1,1,0,0],
        [0,0,0,0]
        ],
        [
        [1,0,0,0],
        [1,1,0,0],
        [0,1,0,0],
        [0,0,0,0]
        ],
        [
        [0,0,0,0],
        [0,1,1,0],
        [1,1,0,0],
        [0,0,0,0]
        ],
        [
        [1,0,0,0],
        [1,1,0,0],
        [0,1,0,0],
        [0,0,0,0]
        ]
    ],

    [
        //ブロック4（逆Lブロック）
        [
        [1,1,1,0],
        [0,0,1,0],
        [0,0,0,0],
        [0,0,0,0]
        ],
        [
        [1,1,0,0],
        [1,0,0,0],
        [1,0,0,0],
        [0,0,0,0]
        ],
        [
        [0,0,0,0],
        [1,0,0,0],
        [1,1,1,0],
        [0,0,0,0]
        ],
        [
        [0,1,0,0],
        [0,1,0,0],
        [1,1,0,0],
        [0,0,0,0]
        ]
    ],

    [
        
            //ブロック5（Iブロック）
            [
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0]
            ],
            [
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0]
            ],
            [
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0]
            ],
            [
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0]
            ]
        
    ],

    [
        
            //ブロック6（四角ブロック）
            [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
            ],
            [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
            ],
            [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
            ],
            [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
            ]
        
        
    ]

];

biro=['#CC00CC','#FFA500','#CC0000','#00CC00','#CC0000','#00CCCC','#CCCC00']

function tsugiwotsukuru(){
    btsugi=Math.floor(Math.random()*7)
    tsugigamen=document.getElementById('tsugi');
    ct=tsugigamen.getContext('2d');
    ct.clearRect(0,0,79,79);
    kaku(ct,0,0,0,btsugi);

}


function kakunin(bx,by,muki,shurui){
    p=block[shurui][muki];
    for(n=0;n<4;n++){
        for(m=0;m<4;m++){
            if(p[n][m]==1){
                if((bx+m<0)||(bx+m>11)){
                    return false;
                }
                if((by+n<0)||(by+n>21)){
                    return false;
                }
                if(jyoutai[by+n][bx+m] != 100){
                    return false;
                }
            }
        }
    }
    return true;
}


function shitaidou(){
    gamegamen=document.getElementById('game');
    cg=gamegamen.getContext('2d');
    maenoix=ix;
    maenoiy=iy;
    maenoimuki=imuki;
    kesu(cg,ix,iy,imuki,ishurui)
    iy=iy+1
    document.getElementById('ochiru').play();

    kekka=kakunin(ix,iy,imuki,ishurui);
    if(kekka){
        kaku(cg,ix,iy,imuki,ishurui);
    }else{
        ix=maenoix;
        iy=maenoiy;
        imuki=maenoimuki;
        kaku(cg,ix,iy,imuki,ishurui);

        p = block[ishurui][imuki]
        for(n=0;n<4;n++){
            for(m=0;m<4;m++){
                if(p[n][m]==1){
                    jyoutai[iy+n][ix+m]=ishurui;
                }
            }
        }
        document.getElementById('don').play();
        




        tokutenkeisan()



        ix=4;
        iy=0;
        ishurui=btsugi;
        imuki=0,
        kaku(cg,ix,iy,imuki,ishurui);

kekka=kakunin(ix,iy,imuki,ishurui);
if(!kekka){
    document.getElementById('gameover').play();
    
    
    jikkou=false;
}




        tsugiwotsukuru();
    }
    jikan=jikan-3;
    if(jikan<50){
        jikan=1000;
    }
}

function ugokasu(e){
    gamegamen=document.getElementById('game');
    cg=gamegamen.getContext('2d');
    maenoix=ix;
    maenoiy=iy;
    maenoimuki=imuki;


    kesu(cg,ix,iy,imuki,ishurui)
    if(e.keyCode==39){
        ix=ix+1
        document.getElementById('kaiten').play();
    }
    if(e.keyCode==37){
        ix=ix-1
        document.getElementById('kaiten').play();
    }
    if(e.keyCode==38){
        imuki=imuki+1;
        if(imuki>3){
            imuki=0;
        }
        document.getElementById('kaiten').play();
    }
    if(e.keyCode==40){
        shitaidou();
    }
        


    kekka=kakunin(ix,iy,imuki,ishurui);
    if(!kekka){
        ix=maenoix;
        iy=maenoiy;
        imuki=maenoimuki;
    }

    kaku(cg,ix,iy,imuki,ishurui)
}

function kesu(c,bx,by,muki,shurui){
c.globalCompositeOperation='destination-out';
kaku(c,bx,by,muki,shurui)
c.globalCompositeOperation='source-over';
}

function kaku(c,bx,by,muki,shurui){
c.fillStyle = biro[shurui];
c.strokeStyle = '#333333';
c.lineWidth = 3;
p=block[shurui][muki];
for(n=0;n<4;n++){
    for(m=0;m<4;m++){
        if(p[n][m]==1){
            c.fillRect((bx+m)*20,(by+n)*20,20,20);
            c.strokeRect((bx+m)*20,(by+n)*20,20,20);
        }
    }
}
}



function tokutenkeisan(){
    kosuu=0;
    for(y=0;y<21;y++){
        sorottenai=false;
        for(x=1;x<=10;x++){
            if(jyoutai[y][x]==100)
            sorottenai=true;
        }
        if(!sorottenai){
            kosuu=kosuu+1
            document.getElementById('kieru').play();
            for(k=y;k>0;k--){
                for(x=1;x<=10;x++){
                    jyoutai[k][x]=jyoutai[k-1][x];
                }
            }
        }
    }

    gamegamen=document.getElementById('game');
    cg=gamegamen.getContext('2d');
    cg.clearRect(0,0,239,439);

    for(y=0;y<22;y++){
        for(x=0;x<12;x++){
            if((jyoutai[y][x] != 100)&&(jyoutai[y][x] != 99)){
                cg.fillStyle=biro[jyoutai[y][x]];
                cg.strokeStyle='#333333';
                cg.lineWidth=3;
                cg.fillRect(x*20,y*20,20,20);
                cg.strokeRect(x*20,y*20,20,20);

            }
        }
    }

    switch(kosuu){
        case 1:
        tokuten=tokuten+10;
        break;
        case 2:
        tokuten=tokuten+20;
        break;
        case 3:
        tokuten=tokuten+100;
        break;
        case 4:
        tokuten=tokuten+1000;
        document.getElementById('zenbu').play();
        break;

    }

    tgamen=document.getElementById('tokuten')
    tgamen.innerHTML=tokuten;
}




function jikandeugokasu(){
    if(jikkou){
        shitaidou();
        setTimeout(jikandeugokasu,jikan);
    }
}

function gamekaishi(){
    
    gamegamen=document.getElementById('game');
    cg=gamegamen.getContext('2d');
    cg.clearRect(0,0,239,439);

    tokuten=0;
    jikkou=true;
    jikan=1000;
    setTimeout(jikandeugokasu,jikan);

    jyoutai=new Array(22);
    for(i=0;i<22;i++){
        jyoutai[i]=new Array(12);
        for(j=0;j<12;j++){
            jyoutai[i][j]=100;
        }
    }
    for(i=0;i<22;i++){
        jyoutai[i][0]=99;
    }
    for(i=0;i<22;i++){
        jyoutai[i][11]=99
    }
    for(i=0;i<12;i++){
        jyoutai[21][i]=99;
    }

ix=4;
iy=0;
imuki=0,
ishurui=Math.floor(Math.random()*7)
tsugiwotsukuru();
kaku(cg,ix,iy,imuki,ishurui)

}

function hajime(){
    backgamen=document.getElementById('back');
    cb = backgamen.getContext('2d')
    cb.fillStyle = '#CCCCCC';
    cb.strokeStyle = '#333333';
    cb.lineWidth = 3;
    cb.fillRect(0,0,20,20);
    cb.strokeRect(0,0,20,20);
    x=0;
    y=0;
    for (i=0;i<22;i++) {
        cb.fillRect(x,y,20,20);
        cb.strokeRect(x,y,20,20);
        y=y+20
    }
    x=220;
    y=0;
    for (i=0;i<22;i++) {
        cb.fillRect(x,y,20,20);
        cb.strokeRect(x,y,20,20);
        y=y+20
    }
    x=0;
    y=420;
    for (i=0;i<22;i++) {
        cb.fillRect(x,y,20,20);
        cb.strokeRect(x,y,20,20);
        x=x+20
    }
}
