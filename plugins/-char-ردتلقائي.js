let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*اهلين فيك*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وﻋﻟﻳﻛﻡ اﻟسلام ورﺣﻣﮫ اﻟﻟﮫ وﺑركاﺗﮫ.*',  
     ]; 
   }else if (/^فتال|يافتال|انيك$/i.test(m.text)) { 
     responses = [ 
' ماتوقعتها منك يالحجي 💔😒.'
     ]; 
 }else if (/^شعبوط من عمك|شعبوط عمك$/i.test(m.text)) { 
     responses = [ 
'*الصاعقه اككيد😩❤‍🔥*'
     ]; 
   }else if (/^مرتبط$/i.test(m.text)) { 
     responses = [ 
'*لا ولا أريد الارتباط🏌🏻‍♂💔*'
   ]; 
   }else if (/^شعبوط تحبني؟|بوت تحبني$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^تكرهني$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^احبك/i.test(m.text)) { 
     responses = [ 
       '*وانا بحبك اكتر🌚❤*',  

     ]; 
   }else if (/^ من وين انت$/i.test(m.text)) { 
     responses = [ 
'اليمن'
     ]; 
   } else if (/^شعبوط$/i.test(m.text)) { 
     responses = [ 
'ﮬااا ﻣاﺗﺷﺗﻲ𓅓ム'
     ]; 
     }else if (/^كيفك|اخبارك$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله', 
       'بخيِرون الحمدِلله ',  
       'تمام الحمد لله ونت؟، ',
       '',  
     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد', 
      'عيلافيو كفيررر.',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي',  

     ];
     }else if (/^❤|♥$/i.test(m.text)) { 
     responses = [ 
       '*اعشققك♥*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^venom$/i.test(m.text)) { 
     responses = [ 
       '*تحت امرك حبي*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*انرت يروحي*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
