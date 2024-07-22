import React, { useState } from 'react'

interface ISkipCount{
    name:string;
    skipCount:number;
}
const Game :React.FC= () => {

    const [access,setAccess]=useState<number>(0);
    
    const [doShowTdBox,setDoShowTdBox] =useState<boolean>(false);
    const changeInput=(index:number)=>{
        setDoShowTdBox(true);
        setNumber(Math.floor(Math.random()*2));
        if(index==access){
        if(number===0){
            setValue("Truth")
            setColor("bg-success")
            setMsg("have to say truth")
            if(truthIndex==truthArray.length-1){
                setTruthIndex(0);
            } else{
                setTruthIndex(truthIndex+1);
            }
           
        } else{
            setValue("Dare")
            setColor("bg-danger")
            setMsg("have to accept dare")
            if(dareIndex==dareArray.length-1){
                setDareIndex(0);
            } else{
                setDareIndex(dareIndex+1);
            }
           
        }
       
        setIsClickedStart(false);
        if(isClickedStart==false){
            setShowNext(true);
        }

    } else{

        alert("Its not your turn!!!")

    }
    }

    const [showNext,setShowNext]=useState<boolean>(false);

    const [isClickedStart,setIsClickedStart]=useState<boolean>(true);

    const accept=(index:number)=>{
        if(index==access){
            if(access<gamersArray.length-1 ){
                setAccess(access+1);
                
            } else{
                setAccess(0);
            }
            setIsClickedStart(true);
        }
       
    }

    const [value,setValue]=useState<string>("Start the game");
    const [number ,setNumber]=useState<number>();
    const [color,setColor]=useState<string>("");
    const [msg,setMsg]=useState<string>("");
    const [truthIndex,setTruthIndex]=useState<number>(0);
    const [dareIndex,setDareIndex]=useState<number>(0);
    const [truthArray,setTruthArray]=useState<string[]>([
        "What’s your biggest fear?",
        "What’s the strangest thing you’ve ever eaten?",
        "Who was your first celebrity crush?",
        "What’s your biggest insecurity?",
        "What’s your worst habit?",
        "Have you ever lied to get out of a bad date?",
        "Have you ever had an imaginary friend?",
        "What’s the worst thing you’ve ever said to anyone?",
        "What’s the biggest misconception about you?",
        "What’s the best piece of advice you’ve been given?",
        "If you could do any job in the world, what would it be?",
        "What’s your hidden talent?",
        "Do you still have feelings for any of your exes?",
        "Do you believe in aliens?",
        "What’s your worst fashion moment?",
        "Would you date your high school crush today?",
        "What’s your most bizarre nickname?",
        "What’s your biggest red flag?",
        "Why did your last relationship break down?",
        "Have you ever had a holiday romance?",
        "What is the biggest lie you’ve ever told?",
        "What do you want written on your tombstone?",
        "What’s one thing you only do when you’re alone?",
        "What is your favorite book of all time?",
        "What’s the worst date you’ve ever been on?",
        "What’s your biggest wish in life?",
        "What’s something that overwhelms you?",
        "What’s something you would do if you knew there were no consequences?",
        "Have you ever broken the law?",
        "What’s the strangest dream you’ve had?",
        "Have you ever had a one-night stand?",
        "What’s the strangest rumor you’ve heard about yourself?",
        "What’s the weirdest lie you’ve ever told?",
        "What’s the hardest drug you’ve ever tried?",
        "What’s your biggest turn-on?",
        "What’s the last thing you Googled?",
        "What’s your favorite possession?",
        "Have you ever ghosted a friend?",
        "What’s your strangest dealbreaker?",
        "Where’s one place you’re dying to visit?",
        "What’s one thing in your life you wish you could change?",
        "Would you date someone shorter than you?",
        "Where’s the weirdest place you’ve had sex?",
        "Who are you most jealous of?",
        "When was your first time?",
        "Have you ever lied to your boss?",
        "What was the greatest day of your life?",
        "What app do you spend the most time on?",
        "What’s the best date you’ve been on?",
        "If you could only hear one song for the rest of your life, what would it be?",
        "Who in this group would you want to swap lives with for a week?",
        "How long was your longest relationship?",
        "What word do you hate the most?",
        "When was the last time you lied?",
        "What’s your biggest fantasy?",
        "What’s the biggest mistake you’ve ever made?",
        "What’s the one big ticket item you can’t live without?",
        "Who annoys you most in your life?",
        "Have you ever had a fling?",
        "What secretly scares you?",
        "Can you roll your tongue?",
        "What country do you want to run away to?"])

        const [dareArray,setDareArray]=useState<string[]>( [
           "Read out the last dirty text you sent?",
  "Eat five spoonfuls of a condiment of your choice?",
  "Try to juggle 3 things of the group's choice?",
  "Pretend to be a food item of your choice?",
  "Show the most embarrassing photo on your phone?",
  "Show the last five people you texted and what the messages said?",
  "Let the rest of the group DM someone from your Instagram account?",
  "Eat a raw piece of garlic?",
  "Do 100 squats?",
  "Let the group look in your Instagram DMs?",
  "Show us your screen time report?",
  "Keep three ice cubes in your mouth until they melt?",
  "Say something dirty to the person on your left?",
  "Give a foot massage to the person on your right?",
  "Put 10 different available liquids into a cup and drink it?",
  "Yell out the first word that comes to your mind?",
  "Give a lap dance to someone of your choice?",
  "Repeat everything the person on your right is saying until it's your turn again?",
  "Remove four items of clothing?",
  "Like the first 15 posts on your Facebook newsfeed?",
  "Eat a spoonful of mustard?",
  "Keep your eyes closed until it's your go again?",
  "Try and get all the toes on one foot in your mouth?",
  "Send a sext to the last person in your phonebook?",
  "Show your orgasm face?",
  "Seductively eat a banana?",
  "Empty out your wallet/purse and show everyone what's inside?",
  "Do your best sexy crawl?",
  "Pretend to be the person to your right for 10 minutes?",
  "Eat a snack without using your hands?",
  "Whisper a secret to the person on your left?",
  "Say two honest things about everyone else in the group?",
  "Twerk for a minute?",
  "Try and make the group laugh as quickly as possible?",
  "Try to put your whole fist in your mouth?",
  "Let another person in the group touch up your makeup?",
  "Tell everyone an embarrassing story about yourself?",
  "Try to lick your elbow?",
  "Peel a banana with your toes?",
  "Say everything in a whisper for the next 10 minutes?",
  "Smell another player's armpit?",
  "Talk in an American accent for the rest of the evening?",
  "Do your best celebrity impression?",
  "Play air guitar for 2 minutes straight?",
  "Post the oldest selfie on your phone on Instagram Stories?",
  "Tell the saddest story you know?",
  "Howl like a wolf for two minutes?",
  "Dance without music for two minutes?",
  "Pole dance with an imaginary pole?",
  "Belt out the chorus of a cheesy ballad at full volume?",
  "Let someone else tickle you and try not to laugh?",
  "Put as many snacks into your mouth at once as you can?",
  "Scroll through your phone book until someone says stop. You either have to call or delete that person?",
  "Put your clothing on backwards for the rest of the evening?",
  "Down your drink (responsibly)?",
  "Try and make yourself cry in front of the group?",
  "Give a celebrity lookalike for every person in the room?",
  "Tell the group two truths and a lie, and they have to guess which one the lie is?",
  "Attempt to impersonate everyone in the room?",
  "Reply to the first five Instagram Stories on your timeline?",
  "Share the first celebrity on your timeline's Instagram to your Story?",
  "Put on as many layers as possible in 60 seconds?",
  "Fill your mouth with drink and gargle your answer to the next Truth?",
  "Make another player jump in the next 10 minutes?",
  "Smile as widely as you can and hold it for two minutes?",
  "Hold your drink with two hands for the rest of the evening?",
  "Attempt the first TikTok dance on your For You page?",
  "Sit on the floor for the rest of the evening?",
  "Put on make-up without a mirror and leave it like that for the rest of the game?",
  "Give a personalised insult to everyone in the room?",
  "Try not to laugh for the next 10 minutes?",
  "For the next 10 minutes, every time someone asks you something, respond with a bark?",
  "Let the person next to you wax you wherever they want?",
  "Call the first person in your phonebook and howl like a wolf?",
  "Eat a raw egg?",
  "Do a Facebook Live and say everything your friends tell you to?",
  "Update your relationship status to 'engaged' on Facebook?",
  "Download the Wetherspoons app and order a random food item to someone's table?"

        ]
        )

        const [gamersArray,setGamersArray]=useState<string[]>([]);
        

        const addGamer=()=>{

           
            setGamersArray([...gamersArray,`Person-${gamersArray.length+1}`]);
        }

        const changePersonName=(e:React.ChangeEvent<HTMLInputElement>,index:number)=>{
            const array=[...gamersArray];
            array[index]=e.target.value;
            setGamersArray(array);
        }

        const removeGamer=(index:number)=>{
            const gamersArrayFilter=gamersArray.filter(gamer=>gamersArray.indexOf(gamer)!=index);
            setGamersArray(gamersArrayFilter);
        }

        const [isStarted,setIsStarted]=useState<boolean>(false);

        const startGame=()=>{
                  setIsStarted(true);
                  for(let x of gamersArray){
                    skipArray.push({"name":x,"skipCount":0})
                  }
        }
       const [skipArray,setSkipArray]=useState<ISkipCount[]>([]);

        const skipCount=(index:number)=>{

            const skipArray1=[...skipArray];
            skipArray1[index]={...skipArray1[index],"skipCount":(skipArray1[index].skipCount)+1};
            setSkipArray(skipArray1);
          
            if(access<gamersArray.length-1){
                setAccess(access+1);
                
            }else{
                setAccess(0);
            }

            setIsClickedStart(true);

        }

        const [isStopped,setIsStopped]=useState<boolean>(false);
        const [minimumSkips,setMinimumSkips]=useState<ISkipCount>(skipArray[0])

        const generateReport=()=>{
            setIsStopped(true);
           
            setMinimumSkips(skipArray[0]);
           
            for(let skipObj of skipArray){
                if(minimumSkips.skipCount>skipObj.skipCount){
                    setMinimumSkips(skipObj);
                }
            }
        }

        
  return (
   
                    <div className="container mt-5">
                       {
                        !isStarted && !isStopped &&
                        <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header bg">
                                    <h3 className='fw-bold text-center'>Truth or Dare</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                       }
                       {
                        isStarted && !isStopped &&
                        <div className="row text-center d-flex align-items-center">
                        <div className="col-sm-4 ms-5">
                            {  doShowTdBox && 
                            <div className="card">
                                <div className={`card-body shadow-lg ${color}`}>
                                    <h3 className='text-white'>{value}</h3>

                                </div>
                              

                        </div>
                           }

                       

                       
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body  shadow-lg">
                                {
                                    value==="Start the game" && (
                                        <h3 className='text-dark'>{"Get Ready Guys!!!"}</h3>
                                    )
                                   
                                   }
                                   {
                                    value==="Truth" && (
                                        <h3 className='text-dark'>{truthArray[truthIndex]}</h3>
                                    )
                                   
                                   }
                                   {
                                    value==="Dare" && (
                                        <h3 className='text-dark'>{dareArray[dareIndex]}</h3>
                                    )
                                   }
                                </div>
                            </div>
                        </div>
                       
                    </div>
                       }

                       {
                        !isStarted && !isStopped &&
                        <div className="row ms-5">
                        <div className="col-sm-3 mt-5">
                            <p className='text-warning'>Add the Players and have some fun....!</p>
                            <button onClick={addGamer} className='btn btn-dark'>Add Players</button>
                        </div>
                        </div>
                       }

                        <div className="row mt-5">
                         
                         {
                           gamersArray.length>0 && !isStarted && gamersArray.map((gamer,index)=>{
                               return (
                                   <>
                                     <div className="col-sm-3" key={index}>
                               <div className="card">
                                   <div className="row">
                                       <div className="col-sm-10">
                                       <div className="card-body shadow-lg">
                                       <input onChange={(e)=>{changePersonName(e,index)}} className='text-center' type="text" value={gamer} />
                                   </div>
                                       </div>
                                       <div className="col-sm-2 d-flex align-items-center">
                                           <button className='btn btn-danger p-0' onClick={()=>{removeGamer(index)}}><i className="bi bi-trash3-fill"></i></button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                                   </>
                               )
                           })
                         }
                        

                       </div>
                       { gamersArray.length>=2 && !isStarted && !isStopped &&
                         <div className="row mt-2">
                         <div className="col-sm-3">
                             <button onClick={startGame} className='btn btn-success'>Start Game</button>
                         </div>
 
                        </div>
 
                       }
                      
                        <div className="row mt-5">
                         
                          {
                            gamersArray.length>0 && isStarted && !isStopped && gamersArray.map((gamer,index)=>{
                                return (
                                    <>
                                      <div className="col-sm-3" key={index}>
                                <div className="card ">
                                    <div className="row">
                                        <div className="col-sm-10">
                                        <div className="card-body shadow-lg">
                                        <input  className={`text-center ${access==index? " bg-success":"bg-white"}` } type="text" value={gamer} />
                                    </div>
                                        </div>
                                        
                                    </div>
                                   <div className="row mt-2">
                                   {
                                    isClickedStart &&
                                    <div className="col-sm-4 text-center">
                                    <button className={`btn ${access==index ? "btn-success" : "btn-dark"} mt-3` } onClick={()=>{changeInput(index)}}>Start</button>

                                    </div>
                                   }
                                    {
                                         access==index && !isClickedStart &&
                                         <div className="col-sm-4">
                                         <button onClick={()=>{accept(index)}} className='btn btn-dark mt-3 bg-danger'>Accept</button>
                                     </div>
                                    }
                                   {
                                    access==index && !isClickedStart &&
                                    <div className="col-sm-4">
                                    <button onClick={()=>{skipCount(index)}} className='btn btn-dark mt-3 bg-danger'>Skip</button>
                                </div>
                                   }
                                   {
                                    showNext && 
                                    <div className="col-sm-4">
                                    <button onClick={()=>{changeInput(index)}} className='btn btn-dark mt-3 bg-danger'>Next</button>
                                </div>
                                   

                                   }
                                   </div>
                                </div>
                            </div>
                                    </>
                                )
                            })
                          }
                          {
                            isStarted && !isStopped &&
                           <div className="row mt-5">
                            <div className="col-sm-3">
                             <button onClick={generateReport} className='btn btn-dark mt-3'>Stop the Game</button>
                           </div>
                           </div>
                          }

                        
                         

                        </div>

                        {
                             isStopped && 
                             <div className="row mt-3">
                            <div className="col-sm-3">

                            </div>
                            <div className="col-sm-6">
                            <div className="card-body">
                                 <h3 className='text-dark fw-bold'>The Winner is {minimumSkips.name}</h3>
                             </div>
                            </div>
                            
                         </div>

                        }
                        {
                            isStopped &&
                            
                            <div className="row mt-3">
                                <div className="col-sm-2">
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            {
                                                <table className='table table-hover '>
                                                    <thead className='table-dark'>
                                                        <tr>
                                                            <th>S.NO</th>
                                                            <th>NAME</th>
                                                            <th>SKIPS USED</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                       {
                                                        skipArray.length && skipArray.map((value,skipindex)=>{
                                                            return(
                                                                <>
                                                        <tr key={skipindex}>
                                                          <td>{skipindex+1}</td>
                                                          <td>{value.name}</td>
                                                          <td>{value.skipCount}</td>
                                                        </tr>
                                                                </>
                                                            )
                                                        })
                                                       }
                                                    </tbody>
                                                </table>
                                            }

                                        </div>
                                    </div>

                                </div>
                            </div>
                           
                        }
                       
                    </div>
            
        
           
  )
}

export default Game