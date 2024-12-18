function  getTimeString(time)
{   const hour = parseInt(time/3600) ;
    const minutes = time %3600
    const minute = parseInt(minutes/60) ;
    const seconds = minutes %60
    const second = seconds;
    return `${time} =  which is ${hour} hours ago and  ${minute} minutes and ${second} seconds ago`;
}

console.log(getTimeString(3661));

VID.others.posted_date




   ${
        VID.others.posted_date?.length==0 ? "" :`<span class="absolute text-white right-2 bottom-2 bg-black rounded font-bold text-2xl p-2">
     
       const hour = parseInt(${VID.others.posted_date}/3600) ;
        const minutes = time %3600
        const minute = parseInt(minutes/60) ;
        const seconds = minutes %60
        const second = seconds;
      ${hour} hours ago and  ${minute} minutes and ${second} seconds ago
      </span>`
    }





      ${
        VID.others.posted_date?.length==0 ? "" :`<span class="absolute text-white right-2 bottom-2 bg-black rounded font-bold text-2xl p-2">${VID.others.posted_date}</span>`
      }



      ${
        VID.others.posted_date?.length == 0
            ? ""
            : (() => {
                // Parse the time (ensure it's a number)
                const time = parseInt(VID.others.posted_date, 10);
    
                // Calculate hours, minutes, and seconds
                const hour = Math.floor(time / 3600);
                const minutes = time % 3600;
                const minute = Math.floor(minutes / 60);
                const second = minutes % 60;
    
                // Return the formatted HTML string
                return `
                    <span class="absolute text-white right-2 bottom-2 bg-black rounded font-bold text-2xl p-2">
                        ${hour} hours ago, ${minute} minutes, and ${second} seconds ago
                    </span>`;
            })()
    }
    