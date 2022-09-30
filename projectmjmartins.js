var database = [
              {
              matricno: "itfneca/damos/001",   
              password: "damos2000"
              },

              {
                matricno: "itfneca/samah/002",   
                password: "samah2000"
              },
              {
                matricno: "itfneca/maryam/003",   
                password: "maryam2000"
              },

              {
                matricno: "itfneca/rasheed/004",   
                password: "rasheed2000"
              },
              {
                matricno: "itfneca/isreal/005",   
                password: "isreal2000"
              },
              {
                matricno: "itfneca/martins/006",   
                password: "martins2000"
              },
              {
                matricno: "itfneca/gabrielle/007",   
                password: "gabby2000"
              },
              {
                matricno: "itfneca/daniel/008",   
                password: "dan2000"
              },
              {
                matricno: "itfneca/oluniyi/009",   
                password: "olu2000"
              },
              {
                matricno: "itfneca/ebenezer/010",   
                password: "eben2000"
              }
   ]


            var studentportal = [
                {
                portal: "Welcome to your portal Mr Damos, we hope you are ready for the exams"
                },

                {    
                portal: "Welcome to your portal Mr Samah, we hope you are ready for the exams"
                },
                {   
                portal: "Welcome to your portal Miss Maryam, we hope you are ready for the exams"
                },

                {   
                portal: "Welcome to your portal Mr Rasheed, we hope you are ready for the exams"
                },
                {  
                portal: "Welcome to your portal Mr Isreal, we hope you are ready for the exams"
                },
                {   
                portal: "Welcome to your portal Mr Martins, we hope you are ready for the exams"
                },
                {   
                portal: "Welcome to your portal Miss Gabby, we hope you are ready for the exams"
                },
                {   
                portal: "Welcome to your portal Mr Daniel, we hope you are ready for the exams"
                },
                {    
                portal: "Welcome to your portal Mr Olu, we hope you are ready for the exams"
                },
                {   
                portal: "Welcome to your portal Mr Ebenezer, we hope you are ready for the exams"
                }
            ]

            var passed = [
                {
                message: "Congratulations Mr Damos, you have passed see you at the next level"
                },

                {    
               message: "Congratulations Mr Samah, you have passed see you at the next level"
                },
                {   
               message: "Congratulations Miss Maryam, you have passed see you at the next level"
                },

                {   
               message: "Congratulations Mr Rasheed, you have passed see you at the next level"
                },
                {  
               message: "Congratulations Mr Isreal, you have passed see you at the next level"
                },
                {   
               message: "Congratulations Mr Martins, you have passed see you at the next level"
                },
                {   
               message: "Congratulations Miss Gabby, you have passed see you at the next level"
                },
                {   
               message: "Congratulations Mr Daniel, you have passed see you at the next level"
                },
                {    
               message: "Congratulations Mr oluniyi, you have passed see you at the next level"
                },
                {   
               message: "Congratulations Mr Ebenezer, you have passed see you at the next level"
                }
            ]

            var failed = [
                {
                message: "Sorry Mr Damos, you have failed woefully, try again next semester"
                },

                {    
              message: "Sorry Mr Samah, you have failed woefully, try again next semester"
                },
                {   
              message: "Sorry Miss Maryam, you have failed woefully, try again next semester"
                },

                {   
              message: "Sorry Mr Rasheed, you have failed woefully, try again next semester"
                },
                {  
               message: "Sorry Mr Isreal, you have failed woefully, try again next semester"
                },
                {   
               message: "Sorry Mr Martins, you have failed woefully, try again next semester"
                },
                {   
               message: "Sorry Mr Gabby, you have failed woefully, try again next semester"
                },
                {   
               message: "Sorry Mr Daniel, you have failed woefully, try again next semester"
                },
                {    
               message: "Sorry Mr Oluniyi, you have failed woefully, try again next semester"
                },
                {   
               message: "Sorry Mr Ebenezer, you have failed woefully, try again next semester"
                }
            ]

        function student(){
                          var matricno = prompt("pls enter your matric no");
                          var password = prompt("pls enter your password");
                        for(var i = 0; i<=database.length; i++)
                        if(database[i].matricno===matricno && database[i].password===password){alert(studentportal[i].portal)}
                        alert("Solve this equation: if x + 2 = 4; find x")
                      var answer = prompt("enter your answer")
                      if(answer===2){alert(passed[i].message)}
                      else{alert(failed[i].message)}

        }
